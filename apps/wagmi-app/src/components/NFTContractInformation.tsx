import * as React from "react";
import classNames from "classnames";
import SVGOpenSeaWhite from "./SVG/SVGOpenSeaWhite";
import {
  ERC721Symbol,
  ERC721Name,
  ERC721TotalSupply,
} from "@turbo-eth/erc721-wagmi";
import ENouns from "@enouns/core-sol/deployments/mainnet/ENouns.json";
interface NFTContractInformationProps {
  className?: string;
}

export const NFTContractInformation = ({
  className,
}: NFTContractInformationProps) => {
  const containerClassName = classNames(
    className,
    "NFTContractInformation",
    "flex items-center "
  );
  return (
    <div className={containerClassName}>
      <a
        className="mr-2"
        target={"_blank"}
        href={`https://opensea.io/collection/enouns`}
      >
        <SVGOpenSeaWhite className="w-5" />
      </a>
      <ERC721Symbol
        className=" font-bold text-lg mx-2"
        contractAddress={ENouns.address}
      />
      <span className="tag tag-cloud">
        Total Supply:{" "}
        <ERC721TotalSupply className="mx-2" contractAddress={ENouns.address} />
      </span>
    </div>
  );
};

export default NFTContractInformation;
