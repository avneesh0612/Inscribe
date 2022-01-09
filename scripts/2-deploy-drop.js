import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x9e00b9FCCf95aAAd10f9B0ea64AbB18E0ea4c0f5");

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
