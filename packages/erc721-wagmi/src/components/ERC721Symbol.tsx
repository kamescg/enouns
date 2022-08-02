import * as React from 'react';

import classNames from 'classnames';
import useERC721Read from '../hooks/useERC721Read';

interface ERC721SymbolProps {
  className?: string;
  userAddress?: string;
  contractAddress: string;
}

export const ERC721Symbol = ({
  className,
  contractAddress,
}: ERC721SymbolProps) => {
  const classes = classNames(className, 'ERC721Symbol');
  const { data, isError, isLoading } = useERC721Read(contractAddress, 'symbol', []);
  if (isError || isLoading) return null;
  return <span className={classes}>{data}</span>;
};

export default ERC721Symbol;
