import type { ReactNode } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppColorMode } from "@/components/App/AppColorMode";
import { AppConfig } from "@/utils/AppConfig";
import AppLogo from "@/components/App/AppLogo";
import Link from "next/link";

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
          <div className="text-right flex items-center justify-end">
            <ul className="flex flex-wrap text-sm">
              <li className="mr-6">
                <Link
                  className="border-none text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-neutral-100"
                  href="/playground"
                  rel="noreferrer"
                >
                  Playground
                </Link>
              </li>
            </ul>
            <AppColorMode className="" />
            {/* <ConnectButton /> */}
          </div>
        </div>
      </div>

      <div className="content bg-neutral-100 dark:bg-neutral-500 min-h-vh overflow-hidden">
        {props.children}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 px-10">
        <div className=" text-center text-sm py-10 dark:text-white">
          <div className="text-center flex items-center justify-end">
            <ConnectButton />
          </div>
          {/* <AppColorMode className="mt-3" /> */}
        </div>
      </div>
    </div>
  </div>
);

export { Main };
