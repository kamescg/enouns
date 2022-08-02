import * as React from "react";
import ENouns from "@enouns/core-sol/deployments/localhost/ENouns.json";
import { useContractRead } from "wagmi";

interface NFTPreviewProps {
  className?: string;
  img?: string;
  ensName?: string | number;
  width?: any;
}

export const NFTPreview = ({ ensName, width = 320 }: NFTPreviewProps) => {
  const { data } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "previewUsingEnsName",
    { args: [ensName] }
  );

  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-20 z-0 blur-xl"
        style={{
          backgroundImage: `url(${data})`,
        }}
      />
      <div className="relative z-5">
        <div className="text-center border-2 border-white rounded-xl shadow-xl inline-block overflow-hidden">
          <img className="mx-auto" src={data} width={width} />
        </div>
      </div>
    </>
  );
};

export default NFTPreview;
