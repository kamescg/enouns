import FormPreviewNoun from "@/components/FormPreviewNoun";
import ENouns from "@enouns/core-sol/deployments/mainnet/ENouns.json";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { useRouter } from "next/router";
import { useContractRead } from "wagmi";
import { id } from "ethers/lib/utils";
import NFTView from "@/components/NFTView";
import NFTPreview from "@/components/NFTPreview";

const Citizenship = () => {
  const { query } = useRouter();

  const { data: isOwner } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "isOwner",
    { args: [query?.name] }
  );

  const { data: tokenId } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "getId",
    { args: [query?.name] }
  );

  const { data, error, isError } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "previewUsingEnsName",
    { args: [query.name] }
  );

  const { data: preview } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "preview",
    { args: [query?.name] }
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
          {isOwner ? (
            <NFTView tokenId={tokenId || 0} />
          ) : (
            <div className="">
              <NFTPreview ensName={query.name} />
              <div className="mt-4 z-10 relative">
                <p className="font-bold">
                  eNouns not minted... <span className="italic">yet!</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Citizenship;
