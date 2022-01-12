import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x8697CD37E22117433586234A9926BdbD6c307046");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "Inscribe",
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
