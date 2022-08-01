// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { NameEncoder } from "./libraries/NameEncoder.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { IENSReverseRecords } from "./interfaces/IENSReverseRecords.sol";
import { INounsDescriptor } from "./interfaces/INounsDescriptor.sol";
import { INounsSeeder } from "./interfaces/INounsSeeder.sol";

contract ENounsRender is Ownable {
  using Strings for uint256;
  using NameEncoder for string;
  /// @notice NounsDescriptor instance
  address private immutable _nounsDescriptor;

  /// @notice ENSReverseRecords instance
  address private immutable _ensReverseRecords;

  constructor() {
    _nounsDescriptor = 0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63;
    _ensReverseRecords = 0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C;
  }

  function render(bytes memory input) public view returns (string memory) {
    address _address = abi.decode(input, (address));
    return
      string.concat(
        "data:image/svg+xml;base64,",
        INounsDescriptor(_nounsDescriptor).generateSVGImage(
          _generateSeed(_generateInputFromAddress(_address))
        )
      );
  }

  function renderUsingEnsName(string memory _name) public view returns (string memory) {
    return
      string.concat(
        "data:image/svg+xml;base64,",
        INounsDescriptor(_nounsDescriptor).generateSVGImage(
          _generateSeed(_generateInputFromName(_name))
        )
      );
  }

  function _generateInputFromName(string memory _ensName) internal pure returns (uint256) {
    return uint256(_encodeName(_ensName));
  }

  function _generateInputFromAddress(address _address) internal view returns (uint256) {
    string memory toEnsName_ = _reverseName(_address);
    return uint256(_encodeName(toEnsName_));
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

  function _generateSeed(uint256 _pseudorandomness)
    private
    view
    returns (INounsSeeder.Seed memory)
  {
    uint256 backgroundCount = INounsDescriptor(_nounsDescriptor).backgroundCount();
    uint256 bodyCount = INounsDescriptor(_nounsDescriptor).bodyCount();
    uint256 accessoryCount = INounsDescriptor(_nounsDescriptor).accessoryCount();
    uint256 headCount = INounsDescriptor(_nounsDescriptor).headCount();
    uint256 glassesCount = INounsDescriptor(_nounsDescriptor).glassesCount();

    return
      INounsSeeder.Seed({
        background: uint48(uint48(_pseudorandomness) % backgroundCount),
        body: uint48(uint48(_pseudorandomness >> 48) % bodyCount),
        accessory: uint48(uint48(_pseudorandomness >> 96) % accessoryCount),
        head: uint48(uint48(_pseudorandomness >> 144) % headCount),
        glasses: uint48(uint48(_pseudorandomness >> 192) % glassesCount)
      });
  }

  function generate(uint256 _tokenId, string memory _alias) public view returns (string memory) {
    return string("");
  }
}
