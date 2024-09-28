import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre from "hardhat";

describe("CrowdMintToken", function () {
  async function deployCrowdMintTokenFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const initialSupply = hre.ethers.parseEther("1000000");

    const CrowdMintToken = await hre.ethers.getContractFactory(
      "CrowdMintToken"
    );
    const crowdMintToken = await CrowdMintToken.deploy(initialSupply);

    return { crowdMintToken, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { crowdMintToken, owner } = await loadFixture(
        deployCrowdMintTokenFixture
      );
    });
  });
});
