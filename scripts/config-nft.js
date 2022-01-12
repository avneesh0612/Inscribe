import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2e2040BB43ba63AE7E055f28C3F61F2eb9e7B6d4"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Inscribe Membership",
        description: "A DAO for Bloggers.",
        image: readFileSync("scripts/assets/pen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
