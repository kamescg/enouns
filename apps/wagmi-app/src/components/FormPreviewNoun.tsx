import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import ENouns from "@enouns/core-sol/deployments/localhost/ENouns.json";
import InputWithLabel from "./InputWithLabel";

interface FormPreviewNounProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormPreviewNoun = ({ className }: FormPreviewNounProps) => {
  const styleForm = classNames(className, "FormPreviewNoun");

  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      to: "",
      amount: "",
    },
  });
  const account = useAccount();
  const [name, setName] = React.useState("");
  const {
    data: dataWrite,
    error: errorWrite,
    isError: isErrorWrite,
    write,
  } = useContractWrite(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "transferFrom",
    {
      args: [
        "0x0000000000000000000000000000000000000000",
        account?.data?.address,
        0,
      ],
    }
  );
  const { data, error, isError } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "previewUsingEnsName",
    { args: [name || "kames.eth"] }
  );

  const onSubmit = (_data: any) => {
    setName(_data?.name);
  };

  return (
    <div className={styleForm}>
      {data && (
        <>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-30 z-0 blur-xl -rotate-12 scale-150"
            style={{
              backgroundImage: `url(${data})`,
            }}
          />
          <div className="text-center z-5 relative">
            <span className="border-2 border-white inline-block rounded-lg shadow-sm">
              <img
                className="rounded-lg mx-auto border-2 border-shite"
                src={data}
              />
            </span>
          </div>
        </>
      )}
      <div className="mx-auto" style={{ width: 320 }}>
        <form onSubmit={handleSubmit(onSubmit)} className="z-10 mt-10 relative">
          <div className="mt-4">
            <InputWithLabel
              name="name"
              label="name"
              placeholder="vitalik.eth"
              register={register}
            />
          </div>
          <button
            className="button text-white py-2 rounded-md text-lg py-4 px-14 bg-gradient-to-br from-emerald-500 via-emerald-500 to-emerald-700 w-full mt-6"
            type="submit"
          >
            Create Noun
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPreviewNoun;
