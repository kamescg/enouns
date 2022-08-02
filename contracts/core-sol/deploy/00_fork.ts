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
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    const StreamENS = await deploy("StreamENS", {
      contract: "StreamENS",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    const ENounsTraits = await deploy("ENounsTraits", {
      contract: "ENounsTraits",
      from: deployer,
      args: [StreamENS.address],
      skipIfAlreadyDeployed: false,
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

    const ENounsStorage = await deploy("ENounsStorage", {
      contract: "ENounsStorage",
      from: deployer,
      args: [ENounsRender.address, ENounsTraits.address, contactInformation],
      skipIfAlreadyDeployed: false,
      log: true,
    });

    await deploy("ENouns", {
      contract: "ENouns",
      from: deployer,
      args: ["Ethereum Nouns System", "eNouns", ENounsStorage.address],
      skipIfAlreadyDeployed: false,
      log: true,
    });
  }
}
