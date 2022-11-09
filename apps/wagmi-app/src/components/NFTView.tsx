import * as React from "react";
import { IpfsUriImageBackgroundRender } from "@turbo-eth/core-wagmi";
import ENouns from "@enouns/core-sol/deployments/mainnet/ENouns.json";
import { useAccount, useContractRead, useProvider } from "wagmi";
import { parseAvatarString } from "@turbo-eth/ens-wagmi";
import { TwitterSVG } from "./SVG";
import SVGTwitter from "./SVG/SVGTwitter";
import SVGGithub from "./SVG/SVGGithub";
import SVGENSGradientShorthand from "./SVG/SVGENSGradientShorthand";
import SVGEtherscan from "./SVG/SVGEtherscan";
import SVGOpenSeaBlue from "./SVG/SVGOpenSeaBlue";
import { utils } from "ethers";
import SVGENSToken from "./SVG/SVGENSToken";

interface NFTViewProps {
  className?: string;
  tokenId?: string | number;
}

export const NFTView = ({ tokenId }: NFTViewProps) => {
  const account = useAccount();
  const provider = useProvider();
  const { data, error } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "tokenURI",
    { args: [tokenId] }
  );

  // console.log(data, error, "data");
  const [tokenData, setTokenData] = React.useState();
  React.useEffect(() => {
    if (data) {
      (async () => {
        const json = Buffer.from(data.substring(29), "base64").toString();
        const result = JSON.parse(json);
        result.traits = {};
        result.attributes.forEach((element: any) => {
          result.traits = {
            ...result.traits,
            [element.trait_type]: element.value,
          };
        });
        if (result.traits.avatar) {
          result.avatar = await parseAvatarString(
            account?.data?.address,
            result.traits.avatar,
            provider
          );
        }
        setTokenData(result);
      })();
      async () => {};
    }
  }, [data]);

  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-20 z-0 blur-xl"
        style={{
          backgroundImage: `url(${tokenData?.image})`,
        }}
      />
      <div className="relative z-5">
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex flex-col justify-center items-end pr-12 text-left">
            <a
              target={"_blank"}
              href={`https://opensea.io/assets/ethereum/${ENouns.address}/${tokenId}`}
            >
              <SVGOpenSeaBlue className="w-8 bg-white rounded-full" />
            </a>
            <a
              className="mt-2"
              target={"_blank"}
              href={`https://app.ens.domains/address/${account?.data?.address}/`}
            >
              <SVGENSGradientShorthand className="w-8 bg-white rounded-full" />
            </a>
            <a
              className="mt-2"
              target={"_blank"}
              href={`https://etherscan.io/address/${account?.data?.address}/`}
            >
              <SVGEtherscan className="w-8 bg-white rounded-full" />
            </a>
          </div>
          <div className="col-span-6 text-center relative">
            <div className="mb-5">
              <h3 className="font-light text-3xl">{tokenData?.name}</h3>
            </div>
            <div className="absolute top-8 -right-4 z-20">
              {tokenData?.avatar && (
                <IpfsUriImageBackgroundRender
                  className={
                    "h-12 w-12 z-10 w-full overflow-hidden rounded-full border-2 border-white border-opacity-30 shadow-lg hover:shadow-xl"
                  }
                  uri={tokenData?.avatar || ""}
                />
              )}
            </div>
            <div className="z-5 relative border-2 border-white rounded-xl shadow-xl inline-block w-full">
              <img
                className="relative z-1 w-full rounded-xl"
                src={tokenData?.image}
                width={"100%"}
                style={{ zIndex: 10 }}
              />
              <span
                className=" z-0 -top-1 -right-1 -bottom-1 -left-1 bg-blue-400 absolute animate opacity-100 rounded-lg shadow-lg"
                style={{ zIndex: "0" }}
              ></span>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-center items-start pl-12 text-left">
            {tokenData?.traits["com.twitter"] && (
              <a
                className="mt-2"
                target={"_blank"}
                href={`https://twitter.com/${tokenData?.traits["com.twitter"]}`}
              >
                <SVGTwitter />
              </a>
            )}
            {tokenData?.traits["com.github"] && (
              <a
                className="mt-2"
                target={"_blank"}
                href={`https://github.com/${tokenData?.traits["com.github"]}`}
              >
                <SVGGithub />
              </a>
            )}
          </div>
        </div>

        {/* <div className="flex items-center justify-center mt-4">
          <span className="tag tag-blue mx-1">
            ⌐◨-◨ Nouns: {tokenData?.traits["nounsBalance"]}
          </span>
          <span className="tag tag-ens-1 mx-1">
            <span className="p-2 flex items-center justify-center">
              <SVGENSToken className="w-4 mr-1" />
              <span className="inline-block">
                ENS: {utils.formatEther(tokenData?.traits["ensBalance"] || "0")}
              </span>
            </span>
          </span>
          <span className="tag tag-green mx-1">
            ⌐◨_◨ Lil Nouns: {tokenData?.traits["lilNounsBalance"]}
          </span>
        </div> */}
        <div className="mt-6">
          <p className="font-semibold text-s,">{tokenData?.description}</p>
        </div>
      </div>
    </>
  );
};

export default NFTView;
