import { FC } from "react";
import Header from "./Header";
import { ChangeIcon } from "./Icons";
import { useSwitchNetwork } from "@3rdweb/hooks";

const SwitchNetwork: FC = () => {
  const { switchNetwork } = useSwitchNetwork();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center text-center">
      <div className="absolute top-20 -right-40 rounded-full bg-pink-400/30 blur-2xl md:h-96 md:w-96"></div>
      <div className="absolute bottom-14 -left-40 rounded-full bg-blue-400/30 blur-2xl md:h-96 md:w-96"></div>
      <Header />
      <h2 className="font-Ubuntu text-2xl font-semibold md:text-4xl">
        Please connect to Rinkeby
      </h2>
      <p className="mt-3 text-sm md:text-lg">
        This dapp only works on the Rinkeby network, please switch networks in
        your connected wallet.
      </p>
      <div onClick={() => switchNetwork(4)} className="group relative mt-5">
        <div className="absolute -inset-1 animate-tilt rounded-lg bg-gradient-to-r from-pink-400 to-blue-400 opacity-75 blur filter backdrop-blur-lg group-hover:opacity-100"></div>

        <button className="relative flex items-center space-x-2 rounded-lg bg-black px-6 py-3 text-lg font-medium md:text-2xl">
          <ChangeIcon className="h-6 w-6" />{" "}
          <span className="ml-4">Switch to Rinkeby</span>
        </button>
      </div>
    </div>
  );
};

export default SwitchNetwork;
