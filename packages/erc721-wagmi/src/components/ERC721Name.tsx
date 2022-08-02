import * as React from 'react';

import classNames from 'classnames';
import useERC721Read from '../hooks/useERC721Read';

interface ERC721NameProps {
  className?: string;
  userAddress?: string;
  contractAddress: string;
}

export const ERC721Name = ({
  className,
  contractAddress,
}: ERC721NameProps) => {
  const classes = classNames(className, 'ERC721Name');
  const { data, isError, isLoading } = useERC721Read(contractAddress, 'name', []);
  if (isError || isLoading) return null;
  return <span className={classes}>{data}</span>;
};

export default ERC721Name;
