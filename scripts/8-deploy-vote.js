import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x439d5df57d4D4C3f673029e06f673BCD52634ac2"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "BloggersDAO's Epic Proposals",
      votingTokenAddress: "0xf9Fc07f0F786d8a4F6570B6aE90a14Bf13B3Da07",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();
