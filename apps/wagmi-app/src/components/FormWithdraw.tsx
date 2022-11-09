import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useContractWrite } from "wagmi";
import ENouns from "@enouns/core-sol/deployments/mainnet/ENouns.json";
import InputWithLabel from "./InputWithLabel";
import { utils } from "ethers";

interface FormWithdrawProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormWithdraw = ({ className }: FormWithdrawProps) => {
  const styleForm = classNames(className, "FormWithdraw mx-auto");
  const {
    register,
    watch,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      amount: "0",
    },
  });
  const watchAll = watch();
  const { data, write } = useContractWrite(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "withdraw",
    { args: [utils.parseEther(watchAll.amount)] }
  );

  const onSubmit = async (_data: any) => {
    write();
  };

  return (
    <div className={styleForm} style={{ maxWidth: 320 }}>
      <form onSubmit={handleSubmit(onSubmit)} className="z-0 relative">
        <InputWithLabel
          name="amount"
          label="Amount"
          placeholder="0"
          register={register}
        />
        <button
          style={{
            width: 320,
          }}
          className="btn btn-white btn-lg mt-3"
          type="submit"
        >
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default FormWithdraw;
