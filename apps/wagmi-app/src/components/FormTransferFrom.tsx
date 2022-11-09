import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useContractWrite } from "wagmi";
import ENouns from "@enouns/core-sol/deployments/mainnet/ENouns.json";
import InputWithLabel from "./InputWithLabel";

interface FormTransferFromProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormTransferFrom = ({ className }: FormTransferFromProps) => {
  const styleForm = classNames(className, "FormTransferFrom mx-auto");
  const {
    register,
    watch,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      from: "",
      to: "",
      tokenId: "",
    },
  });
  const watchAll = watch();
  const { data, write } = useContractWrite(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "transferFrom",
    { args: [watchAll.from, watchAll.to, watchAll.tokenId] }
  );

  const onSubmit = async (_data: any) => {
    write();
  };

  return (
    <div className={styleForm} style={{ maxWidth: 320 }}>
      <form onSubmit={handleSubmit(onSubmit)} className="z-0 relative">
        <InputWithLabel
          name="from"
          label="From"
          placeholder="0x000...000"
          register={register}
        />
        <InputWithLabel
          className="my-3"
          name="to"
          label="To"
          placeholder="vitalik.eth"
          register={register}
        />
        <InputWithLabel
          name="tokenId"
          label="ID"
          placeholder="1"
          register={register}
        />
        <button
          style={{
            width: 320,
          }}
          className="btn btn-white btn-lg mt-3"
          type="submit"
        >
          Reclaim eNouns
        </button>
      </form>
    </div>
  );
};

export default FormTransferFrom;
