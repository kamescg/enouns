import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import FormMintNoun from "@/components/FormMintNoun";
import { useAccount, useEnsName, useProvider, useSigner } from "wagmi";
import FormPreviewNoun from "@/components/FormPreviewNoun";
import { useEffect, useState } from "react";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import { name } from "assert";

const IsConnected = ({ address }) => {
  console.log(address, "address");
  const ens = useEnsName({
    address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
  });
  console.log(ens, "ens");
  // const ensSS = useEnsAddress();
  return (
    <div className="dark: mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white relative">
      <div className="container max-w-screen-sm mx-auto">
        {ens.data && <FormMintNoun ensName={ens.data} />}
        {!ens.data && (
          <div className="">
            <FormPreviewNoun />
            <p className="text-center">
              Register an ENS domain to mint a eNoun.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Index = () => {
  const account = useAccount();
  const signer = useSigner();
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      if (signer?.data?.provider) {
        const ens = new ENS({
          provider: signer?.data?.provider,
          ensAddress: getEnsAddress("1"),
        });
        const { name } = await ens.getName(account?.data?.address);
        // console.log(name, "namename");
        if (name) {
          setName(name);
        }
      }
    })();
  }, [signer?.data]);

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="min-h-vh bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white relative flex justify-center items-center">
        <div className="container max-w-screen-sm mx-auto">
          {name && <FormMintNoun ensName={name} />}
          {!name && (
            <div className="">
              <FormPreviewNoun />
              <p className="text-center">
                Register an ENS domain to mint a eNoun.
              </p>
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Index;
