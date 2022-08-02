import * as React from 'react';

import classNames from 'classnames';
import useERC721Read from '../hooks/useERC721Read';

interface ERC721TotalSupplyProps {
  className?: string;
  userAddress?: string;
  contractAddress: string;
}

export const ERC721TotalSupply = ({
  className,
  contractAddress,
}: ERC721TotalSupplyProps) => {
  const classes = classNames(className, 'ERC721TotalSupply');
  const { data, isError, isLoading } = useERC721Read(contractAddress, 'totalSupply', []);
  if (isError || isLoading) return null;
  return <span className={classes}>{data?.toString()}</span>;
};

export default ERC721TotalSupply;
