import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x9e00b9FCCf95aAAd10f9B0ea64AbB18E0ea4c0f5");

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
