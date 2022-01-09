import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x439d5df57d4D4C3f673029e06f673BCD52634ac2");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "BloggersDAO Governance Token",
      symbol: "HOKAGE",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
