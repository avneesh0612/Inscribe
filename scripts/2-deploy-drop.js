import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x439d5df57d4D4C3f673029e06f673BCD52634ac2");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "BloggersDAO Membership",
      description: "A DAO for Bloggers.",
      image: readFileSync("scripts/assets/pen.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
