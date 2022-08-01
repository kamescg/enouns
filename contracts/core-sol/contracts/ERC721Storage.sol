// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Base64 } from "base64-sol/base64.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ISVGRender } from "./interfaces/ISVGRender.sol";
import { ITraitsFetch } from "./interfaces/ITraitsFetch.sol";

/**
 * @title ERC721Storage
 * @author Kames Geraghty
 */
contract ERC721Storage is Ownable {
  address internal _svgRender;
  address internal _traitsFetch;
  ContractURI internal _contractURI;

  struct ContractURI {
    string name;
    string description;
    string image;
    string external_link;
    string seller_fee_basis_points;
    string fee_recipient;
  }

  constructor(
    address _svgRender_,
    address _traitsFetch_,
    ContractURI memory _contractURI_
  ) {
    _svgRender = _svgRender_;
    _traitsFetch = _traitsFetch_;
    _contractURI = _contractURI_;
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */
  function getSvgRender() external view returns (address) {
    return _svgRender;
  }

  function getTraitsFetch() external view returns (address) {
    return _traitsFetch;
  }

  /**
   * @notice Given an address, construct a base64 encoded SVG image.
   */
  function preview(bytes memory input) public view returns (string memory) {
    return ISVGRender(_svgRender).render(input);
  }

  function constructTokenURI(
    uint256 tokenId,
    bytes memory input0,
    bytes memory input1
  ) external view returns (string memory uri) {
    string memory image_ = ISVGRender(_svgRender).render(input0);
    // string memory traits_ = ITraitsFetch(_svgRender).fetch(input1);
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              string.concat(
                '{"name":',
                '"',
                _parseName(tokenId),
                '",',
                '"description":',
                '"',
                _parseDescription(tokenId),
                '",',
                '"image":',
                '"',
                image_,
                '",',
                '"attributes": [',
                // traits_,
                "]",
                "}"
              )
            )
          )
        )
      );
  }

  function constructContractURI() external view returns (string memory uri) {
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              string.concat(
                '{"name":',
                '"',
                _contractURI.name,
                '",',
                '"description":',
                '"',
                _contractURI.description,
                '",',
                '"image":',
                '"',
                _contractURI.image,
                '",',
                '"external_link":',
                '"',
                _contractURI.external_link,
                '",',
                '"seller_fee_basis_points":',
                '"',
                _contractURI.seller_fee_basis_points,
                '",',
                '"fee_recipient":',
                '"',
                _contractURI.fee_recipient,
                '"',
                "}"
              )
            )
          )
        )
      );
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _parseName(uint256 _tokenId) internal view returns (string memory) {
    return "ERC721K";
  }

  function _parseDescription(uint256 _tokenId) internal view returns (string memory) {
    return "ERC721K";
  }
}
