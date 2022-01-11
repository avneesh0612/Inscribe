import { useWeb3 } from "@3rdweb/hooks";
import Header from "./Header";

const SignIn = () => {
  const { connectWallet, address, error, provider } = useWeb3();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Header />
      <h1 className="my-5 text-4xl font-semibold text-white">
        Welcome to Inscribe
      </h1>
      <div
        onClick={() => connectWallet("injected")}
        className="relative mt-5 group"
      >
        <div className="absolute rounded-lg opacity-75 -inset-1 bg-gradient-to-r from-pink-400 to-blue-400 filter group-hover:opacity-100 blur backdrop-blur-lg animate-tilt"></div>

        <button className="relative px-6 py-3 text-2xl font-medium bg-black rounded-lg">
          Connect your wallet
        </button>
      </div>
    </div>
  );
};

export default SignIn;
