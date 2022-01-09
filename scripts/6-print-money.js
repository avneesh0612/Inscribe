import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xf9Fc07f0F786d8a4F6570B6aE90a14Bf13B3Da07"
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$HOKAGE in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
