import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x9e00b9FCCf95aAAd10f9B0ea64AbB18E0ea4c0f5"
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
