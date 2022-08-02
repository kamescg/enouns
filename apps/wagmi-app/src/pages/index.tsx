import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import FormMintNoun from "@/components/FormMintNoun";
import { useAccount, useContractRead, useEnsName, useSigner } from "wagmi";
import ENouns from "@enouns/core-sol/deployments/localhost/ENouns.json";
import FormPreviewNoun from "@/components/FormPreviewNoun";
import { useEffect, useState } from "react";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import NFTPreview from "@/components/NFTPreview";
import NFTView from "@/components/NFTView";

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
        if (name) {
          setName(name);
        }
      }
    })();
  }, [signer?.data]);

  const { data } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "isOwner",
    { args: [account?.data?.address] }
  );

  const { data: tokenId } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "getId",
    { args: [account?.data?.address] }
  );

  const { data: preview } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "preview",
    { args: [account?.data?.address] }
  );

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
        <div className="container max-w-screen-md mx-auto">
          {data ? (
            <>
              <NFTView tokenId={tokenId || 0} img={preview} width={"100%"} />
            </>
          ) : (
            <div className="">
              {name && <FormMintNoun />}
              {!name && (
                <div className="">
                  <FormPreviewNoun />

                  <div className="mt-4 z-10 relative">
                    <p className="mt-4">
                      <a
                        className="link text-sm font-bold"
                        href="https://learn.rainbow.me/how-to-set-your-ens-name-to-appear-on-websites-as-your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Step-By-Step Instructions
                      </a>
                    </p>
                    <p className="text-center text-xs font-semibold">
                      ☝️ Register domain and set Primary ENS name ☝️
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Index;
