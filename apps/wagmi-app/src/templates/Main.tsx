import type { ReactNode } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import AppLogo from "@/components/App/AppLogo";
import Link from "next/link";
import NFTContractInformation from "@/components/NFTContractInformation";
import ModalHowItWorks from "@/components/ModalHowItWorks";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white overflow-hiddens">
    {props.meta}
    <div className="min-h-vhs mx-auto h-10 w-full">
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between px-8 py-4  dark:text-white">
          <div className=" align-center flex items-center justify-between">
            <AppLogo />
          </div>
          <div className="text-right flex justify-end">
            <ul className="flex justify-center items-center flex-wrap text-sm">
              <li className="">
                <ModalHowItWorks>
                  <span className="">How It Works</span>
                </ModalHowItWorks>
              </li>
              <li className="ml-3">
                <Link
                  className="border-none text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-neutral-100"
                  href="/playground"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="text-white font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Playground
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content bg-neutral-100 dark:bg-neutral-500 min-h-vh overflow-hidden">
        {props.children}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 px-10">
        <div className=" text-center text-sm py-10 dark:text-white">
          <div className="flex items-center justify-between">
            <div className="">
              <NFTContractInformation />
            </div>
            <ConnectButton
              accountStatus={"avatar"}
              showBalance={{
                largeScreen: false,
                smallScreen: false,
              }}
              chainStatus={{
                largeScreen: "icon",
                smallScreen: "none",
              }}
            />
          </div>
          {/* <AppColorMode className="mt-3" /> */}
        </div>
      </div>
    </div>
  </div>
);

export { Main };
