import { constants } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  if (process.env.DEPLOY == "fork") {
    const { deployments, getNamedAccounts } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const ENounsRender = await deploy("ENounsRender", {
      contract: "ENounsRender",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: true,
      log: true,
    });

    const contactInformation = {
      name: "ENounsRender",
      description: "ENounsRender",
      image: "https://raw.githubusercontent.com/ENounsRender/ENounsRender/master/logo.png",
      external_link: "https://ENounsRender.com",
      seller_fee_basis_points: "0",
      fee_recipient: "0x0000000000000000000000000000000000000000",
    };

    const ERC721Storage = await deploy("ERC721Storage", {
      contract: "ERC721Storage",
      from: deployer,
      args: [ENounsRender.address, constants.AddressZero, contactInformation],
      skipIfAlreadyDeployed: true,
      log: true,
    });

    const ENouns = await deploy("ENouns", {
      contract: "ENouns",
      from: deployer,
      args: ["Ethereum Nouns System", "eNouns", ERC721Storage.address],
      skipIfAlreadyDeployed: true,
      log: true,
    });
  }
}
