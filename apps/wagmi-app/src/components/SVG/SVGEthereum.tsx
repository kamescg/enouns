import * as React from "react";
import classNames from "classnames";

interface SVGEthereumProps {
  className?: string;
}

export const SVGEthereum = ({ className }: SVGEthereumProps) => {
  const containerClassName = classNames(className, "SVGEthereum");
  return (
    <svg
      className="w-4 h-4 mr-2 -ml-1 text-[#626890]"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="ethereum"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
      ></path>
    </svg>
  );
};

export default SVGEthereum;
