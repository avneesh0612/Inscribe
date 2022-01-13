import sdk from "./initialize-sdk.js";

const app = sdk.getAppModule("0x8697CD37E22117433586234A9926BdbD6c307046");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "Inscribe Governance Token",
      symbol: "INK",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
