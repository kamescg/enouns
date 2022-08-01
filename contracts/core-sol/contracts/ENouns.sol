//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import "hardhat/console.sol";
import { NameEncoder } from "./libraries/NameEncoder.sol";
import { ERC721K } from "./ERC721K.sol";
import { ERC721Storage } from "./ERC721Storage.sol";
import { ENounsRender } from "./ENounsRender.sol";
import { IENSReverseRecords } from "./interfaces/IENSReverseRecords.sol";
import { INounsDescriptor } from "./interfaces/INounsDescriptor.sol";
import { INounsSeeder } from "./interfaces/INounsSeeder.sol";

/**
 * @title eNouns
 * @author Kames Geraghty
 * @notice Nouns and Ethereum Name System combo; PFP generated from ENS domain bytes32 node.
 */
contract ENouns is ERC721K {
  using NameEncoder for string;

  /// @notice ENSReverseRecords Ethereum mainnet instance
  address private immutable _ensReverseRecords;

  mapping(bytes32 => address) internal _ensReverseRecordsMap;

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
  ) ERC721K(name_, symbol_, _erc721Storage_) {
    _ensReverseRecords = 0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C;
  }

  receive() external payable {
    if (balanceOf(_msgSender()) == 0) {
      _issue(msg.sender, _idCounter++);
    }
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  /**
   * @notice Given an address, construct a base64 encoded SVG image.
   */
  function preview(address user) external view returns (string memory) {
    bytes memory input = bytes(abi.encode(user));
    return ERC721Storage(_erc721Storage).preview(input);
  }

  function previewUsingEnsName(string memory name) external view returns (string memory) {
    return ENounsRender(ERC721Storage(_erc721Storage).getSvgRender()).renderUsingEnsName(name);
  }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    if (from == address(0)) {
      _issue(to, _idCounter++);
    } else {
      _reissue(from, to, tokenId);
    }
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                     */
  /* ===================================================================================== */

  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    override
    returns (bytes memory output0_, bytes memory output1_)
  {
    output0_ = bytes(abi.encode(ownerOf(tokenId)));
    output1_ = bytes("0x0");
    return (output0_, output1_);
  }

  function _encodeName(string memory _name) internal pure returns (bytes32) {
    (, bytes32 _node) = _name.dnsEncodeName();
    return _node;
  }

  function _reverseName(address _address) internal view returns (string memory) {
    address[] memory t = new address[](1);
    t[0] = _address;
    return IENSReverseRecords(_ensReverseRecords).getNames(t)[0];
  }

  /**
   * @notice Issue an eNouns NFT associated with ENS domain bytes32 node
   */
  function _issue(address _to, uint256 _tokenId) internal returns (uint256) {
    bytes32 node = _encodeName(_reverseName(_to));
    require(_ensReverseRecordsMap[node] == address(0), "eNouns:issued");
    _mint(_to, _tokenId);
    _ensReverseRecordsMap[node] = _to;
    return _tokenId;
  }

  function _reissue(
    address _from,
    address _to,
    uint256 _tokenId
  ) internal returns (uint256) {
    address owner_ = ownerOf(_tokenId);
    require(owner_ == _from, "eNouns:not-owner");
    string memory toEnsName_ = _reverseName(_to);
    require(_ensReverseRecordsMap[_encodeName(toEnsName_)] == _from, "eNouns:invalid-ens");
    super.transferFrom(_from, _to, _tokenId);
  }

  /* ===================================================================================== */
  /* Owner Functions                                                                    */
  /* ===================================================================================== */
  function withdraw(uint256 amount) external onlyOwner {
    (bool _success, ) = msg.sender.call{ value: amount }("");
    require(_success, "Withdrawal failed");
  }
}
