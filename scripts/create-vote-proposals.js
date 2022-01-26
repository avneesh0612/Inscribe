import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0xD1fB473C186b7a1273bAfC754C848B86C0386677"
);

const tokenModule = sdk.getTokenModule(
  "0x4833b336A4C0C61d0Ac35BcAb772bef7BEd86031"
);

(async () => {
  try {
    const amount = 420_000;
    await voteModule.propose(
      "Should the DAO mint an additional " +
        amount +
        " tokens into the treasury?",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [voteModule.address, ethers.utils.parseUnits(amount.toString(), 18)]
          ),
          toAddress: tokenModule.address,
        },
      ]
    );

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }
})();
