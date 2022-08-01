//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Storage } from "./ERC721Storage.sol";

/**
 * @title ERC721K
 * @author Kames Geraghty
 */
abstract contract ERC721K is ERC721, Ownable {
  uint256 internal _idCounter;

  address internal _erc721Storage;

  /**
   * @notice ERC721K Construction
   * @param name_ string - Name of ERC721 token
   * @param symbol_ string - Symbol of ERC721 token
   * @param _erc721Storage_ address - Metadata instance
   */
  constructor(
    string memory name_,
    string memory symbol_,
    address _erc721Storage_
  ) ERC721(name_, symbol_) {
    _erc721Storage = _erc721Storage_;
  }

  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    returns (bytes memory output0_, bytes memory output1_);

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function contractURI() external view returns (string memory) {
    return ERC721Storage(_erc721Storage).constructContractURI();
  }

  /**
   * @notice Get Metadata instance
   * @return storage Metadata
   */
  function getERC721Storage() external view returns (address) {
    return _erc721Storage;
  }

  /**
   * @notice Generate token URI
   * @param tokenId uint256
   * @return metadata string
   */
  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    (bytes memory input0, bytes memory input1) = _tokenData(tokenId);
    return ERC721Storage(_erc721Storage).constructTokenURI(tokenId, input0, input1);
  }

  /**
   * @notice Set Metadata instance
   * @param erc721Storage address
   */
  function setStorage(address erc721Storage) external onlyOwner {
    _erc721Storage = erc721Storage;
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC721)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */
}
