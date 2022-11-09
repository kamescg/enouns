import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import ModalSmall from "./Layout/Modal/ModalSmall";
interface ModalHowItWorksProps {
  children?: React.ReactNode;
  className?: string;
}

export const ModalHowItWorks = ({
  className,
  children,
}: ModalHowItWorksProps) => {
  const classes = classNames(
    className,
    "ModalHowItWorks cursor-pointer tag tag-cloud"
  );
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
              href="https://etherscan.io/address/0x5879eb56dcff53095781aa1f4b5eb0d325960360"
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

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalHowItWorks;
