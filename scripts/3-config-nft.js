import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7133AEdFA4ff108f1C07071CD6A9A05f83c8FFa4"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "BloggersDAO Membership",
        description: "A DAO for Bloggers.",
        image: readFileSync("scripts/assets/pen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
