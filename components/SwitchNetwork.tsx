import { FC } from "react";
import Header from "./Header";
import { ChangeIcon } from "./Icons";
import { useSwitchNetwork } from "@3rdweb/hooks";

const SwitchNetwork: FC = () => {
  const { switchNetwork } = useSwitchNetwork();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-center">
      <div className="absolute rounded-full bg-pink-400/30 md:w-96 md:h-96 top-20 -right-40 blur-2xl"></div>
      <div className="absolute rounded-full bg-blue-400/30 md:w-96 md:h-96 bottom-14 -left-40 blur-2xl"></div>
      <Header />
      <h2 className="text-2xl font-semibold md:text-4xl font-Ubuntu">
        Please connect to Rinkeby
      </h2>
      <p className="mt-3 text-sm md:text-lg">
        This dapp only works on the Rinkeby network, please switch networks in
        your connected wallet.
      </p>
      <div onClick={() => switchNetwork(4)} className="relative mt-5 group">
        <div className="absolute rounded-lg opacity-75 -inset-1 bg-gradient-to-r from-pink-400 to-blue-400 filter group-hover:opacity-100 blur backdrop-blur-lg animate-tilt"></div>

        <button className="relative flex items-center px-6 py-3 space-x-2 text-lg font-medium bg-black rounded-lg md:text-2xl">
          <ChangeIcon className="w-6 h-6" />{" "}
          <span className="ml-4">Switch to Rinkeby</span>
        </button>
      </div>
    </div>
  );
};

export default SwitchNetwork;
