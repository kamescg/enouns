import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import ENouns from "@enouns/core-sol/deployments/mainnet/ENouns.json";
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
    { args: [name ? name + ".eth" : "vitalik.eth"] }
  );

  const onSubmit = (_data: any) => {
    setName(_data?.name);
  };

  return (
    <div className={styleForm}>
      {
        <>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-20 z-0 blur-xl"
            style={{
              backgroundImage: `url(${data})`,
            }}
          />
          <div className="text-center z-5 relative">
            <span className="border-2 border-white inline-block rounded-lg shadow-sm">
              <img
                className="rounded-lg mx-auto border-2 border-shite"
                style={{
                  minHeight: "320px",
                  minWidth: "320px",
                }}
                src={data}
              />
            </span>
          </div>
        </>
      }
      <div className="mx-auto" style={{ width: 320 }}>
        <form onSubmit={handleSubmit(onSubmit)} className="z-10 relative">
          <div className="mt-4">
            <InputWithLabel
              name="name"
              label=".eth"
              placeholder="vitalik"
              register={register}
            />
          </div>
          <button
            className="text-white font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-ssm px-5 py-4 text-center mt-3 w-full "
            type="submit"
          >
            Preview eNouns
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPreviewNoun;
