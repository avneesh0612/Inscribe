import sdk from "./initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x8697CD37E22117433586234A9926BdbD6c307046"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "Inscribe's Epic Proposals",
      votingTokenAddress: "0x4833b336A4C0C61d0Ac35BcAb772bef7BEd86031",
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
