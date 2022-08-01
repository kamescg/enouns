import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Slider from "react-input-slider";
import classNames from "classnames";
import {
  useAccount,
  useContractRead,
  useEnsName,
  useSigner,
  useWaitForTransaction,
} from "wagmi";
import ENouns from "@enouns/core-sol/deployments/localhost/ENouns.json";
import { utils } from "ethers";
import { useModal } from "react-modal-hook";
import ModalSmall from "./Layout/Modal/ModalSmall";

function SliderComponent({ axis, xmax, xmin, xstep, onChange, value }: any) {
  return (
    <div>
      <Slider
        axis={axis}
        x={value}
        xmax={xmax}
        xmin={xmin}
        xstep={xstep}
        onChange={({ x }) => onChange(x)}
      />
    </div>
  );
}

interface FormMintNounProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

const Preview = ({ data }: any) => {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-20 z-0 blur-xl"
        style={{
          backgroundImage: `url(${data})`,
        }}
      />
      <div className="text-center z-5 relative border-2 border-white rounded-xl shadow-xl inline-block overflow-hidden">
        <img className=" mx-auto" src={data} width={480} />
      </div>
    </>
  );
};

export const FormMintNoun = ({ className, ensName }: FormMintNounProps) => {
  const styleForm = classNames(className, "FormMintNoun mx-auto");

  const [showModal, hideModal] = useModal(() => (
    <ModalSmall hideModal={hideModal}>
      <div className="card rounded-xl shadow-md p-8 h-full z-50 max-w-xl overflow-auto break-words content leading-6 text-xs">
        <pre className="">
          <h3 className="font-bold text-2xl">How It Works</h3>
          <p className="">
            eNouns is short for{" "}
            <span className="font-bold">Ethereum Nouns System</span>.
          </p>
          <p className="text-sm font-bold">
            The Noun is attached to an ENS domain.
          </p>
          <p className="">
            For example <span className="font-bold">0xd8d...045</span> is linked
            to <span className="font-bold">vitalik.eth</span>. The{" "}
            <span className="font-bold">vitalik.eth</span> domain generates a
            unique 🌱 seed. The unique seed generates an eNouns ⌐◨-◨ collectable
            unique to <span className="font-bold">You</span>.
          </p>
          {/* <p className="">
            The <span className="font-bold">vitalik.eth</span> domain generates
            a unique 🌱 seed.
          </p>
          <p className="">The unique seed generates the ⌐◨-◨ eNouns.</p> */}
          <h4 className="font-bold text-lg mt-4">eNouns Smart Contract</h4>
          <p className="text-xs">
            Send a transaction, with a mint price (in the tx value field) to the
            eNouns smart contract and an eNouns NFT will be minted for You.
          </p>
          <p className="text-xs">
            <span className="font-bold">It's that easy.</span>
          </p>
          <p className="text-xs pb-0">
            Want to review the contracts?{" "}
            <a
              className="text-blue-600 hover:text-blue-700 dark:text-blue-200 dark:hover:text-blue-300"
              href="https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verified on Etherscan!
            </a>
          </p>
          <h4 className="font-bold text-lg mt-4">Recovery</h4>
          <p className="text-xs">
            <span className="font-bold">
              The eNouns NFT can always be recovered by the minting ENS domain.
            </span>{" "}
            In other words, the ownership is tied to domain name and not a
            wallet address.
          </p>
          <h4 className="font-bold text-lg mt-4">Price</h4>
          <p className="">
            It's <span className="font-semibold">pay what you want </span>
            and free to use.
          </p>
          <p className="">
            Tips are always appreciated; But of course not required.
          </p>
          <h3 className="font-normal text-xl">Have fun ⌐◨-◨</h3>
        </pre>
      </div>
    </ModalSmall>
  ));

  const {
    control,
    watch,
    register,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      to: "",
      amount: "",
    },
  });
  const watchAll = watch();
  const account = useAccount();
  const signer = useSigner();
  const ens = useEnsName({
    address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
  });
  const { data, error, isError } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "preview",
    { args: [account?.data?.address] }
  );

  const [status, setStatus] = React.useState(2);
  const onSubmit = async (_data: any) => {
    showModal();
    const tx = await signer.data?.sendTransaction({
      to: ENouns.address,
      value: utils.parseEther(_data?.value.toString()),
    });
    setStatus(1);
    await tx?.wait();
    setStatus(2);
  };

  if (status === 2)
    return (
      <div className="flexa justify-center items-center">
        <Preview data={data} />
        <div className="relative">
          <p className="">
            <span className="font-bold">Success!</span>{" "}
            <span className="text-sm">Your eNouns NFT is minted.</span>
          </p>
          <div className="flex items-center justify-center my-3">
            <a
              target={"_blank"}
              href={`https://opensea.io/assets/ethereum/${ENouns.address}/0`}
            >
              <img
                src={`https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png`}
                width={36}
              />
            </a>
          </div>
        </div>
      </div>
    );

  return (
    <div className={styleForm} style={{ maxWidth: 320 }}>
      {data && (
        <>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-20 z-0 blur-xl"
            style={{
              backgroundImage: `url(${data})`,
            }}
          />
          <div className="text-center z-5 relative">
            <img className="rounded-xl shadow-lg mx-auto" src={data} />
          </div>
        </>
      )}
      <div className="flex text-center justify-center flex-col my-4">
        <h3 className="font-normal text-2xl">{ens.data && ens?.data}</h3>
        <span className="text-sm ">ENS Name</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="z-0 relative">
        <div className="grid grid-cols-12 ">
          <div className="col-span-8 flex items-center">
            <Controller
              control={control}
              name="value"
              defaultValue={0.1}
              render={({ field: { value, onChange } }) => (
                <SliderComponent
                  className="w-full"
                  axis={"x"}
                  xmax={2}
                  xmin={0}
                  xstep={0.1}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
          <div className="col-span-4 bg-white p-2 rounded-md text-slate-700">
            <span className="">
              Ξ {watchAll?.value?.toString().slice(0, 3)}
            </span>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center text-xs">
          <span className="italic text-xs">Pay what you want</span>
          <span onClick={showModal} className="font-bold cursor-help">
            How It Works
          </span>
        </div>
        <button
          style={{
            width: 320,
          }}
          className="btn btn-white btn-lg mt-3"
          type="submit"
        >
          Mint
        </button>
      </form>
    </div>
  );
};

export default FormMintNoun;
