//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Base64 } from "base64-sol/base64.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @title ChaosWolf
 * @author Kames Geraghty
 * @notice Unleash the chaos.
 */
contract ChaosWolf is ERC721, Ownable {
  string private _imageURI;
  ContractURI internal _contractURI;

  struct ContractURI {
    string name;
    string description;
    string image;
    string externalLink;
    string sellerFeeBasisPoints;
    string feeRecipient;
  }

  /**
   * @notice ChaosWolf Construction
   * @param name string - Name of ERC721 token
   * @param symbol string - Symbol of ERC721 token
   * @param contractURI ContractURI - Contract URI for the token
   * @param imageURI string - Image URI for the token
   */
  constructor(
    string memory name,
    string memory symbol,
    ContractURI memory contractURI,
    string memory imageURI,
    address _owner
  ) ERC721(name, symbol) {
    _contractURI = contractURI;
    _imageURI = imageURI;
    _mint(_owner, 0);
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function setImageURI(string memory imageURI) external {
    _imageURI = imageURI;
  }

  function setContractURI(ContractURI memory contractURI) external {
    _contractURI = contractURI;
  }

  function tokenURI(uint256) public view virtual override returns (string memory uri) {
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              string.concat(
                '{"name":',
                '"',
                "Wolf",
                '",',
                '"description":',
                '"',
                "Unleash the chaos.",
                '",',
                '"image":',
                '"',
                _imageURI,
                '",',
                '"attributes": [',
                _generateTrait("pack", "true"),
                "]",
                "}"
              )
            )
          )
        )
      );
  }

  function contractURI() external view returns (string memory uri) {
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
                '"externalLink":',
                '"',
                _contractURI.externalLink,
                '",',
                '"sellerFeeBasisPoints":',
                '"',
                _contractURI.sellerFeeBasisPoints,
                '",',
                '"feeRecipient":',
                '"',
                _contractURI.feeRecipient,
                '"',
                "}"
              )
            )
          )
        )
      );
  }

  function release() external onlyOwner {
    selfdestruct(payable(msg.sender));
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _generateTrait(string memory _key, string memory _value)
    internal
    pure
    returns (string memory __traits)
  {
    return string.concat('{"trait_type":' '"', _key, '",', '"value":', '"', _value, '"}');
  }
}
