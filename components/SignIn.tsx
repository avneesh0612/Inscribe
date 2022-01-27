import { useWeb3 } from "@3rdweb/hooks";
import Header from "./Header";
import Image from "next/image";
import { FC } from "react";

const SignIn: FC = () => {
  const { connectWallet } = useWeb3();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="absolute top-20 -right-40 rounded-full bg-pink-400/30 blur-2xl md:h-96 md:w-96"></div>
      <div className="absolute bottom-14 -left-40 rounded-full bg-blue-400/30 blur-2xl md:h-96 md:w-96"></div>
      <Header />
      <h1 className="my-5 px-5 text-center text-3xl font-semibold text-white md:text-4xl">
        Welcome to Inscribe
      </h1>
      <div
        onClick={() => connectWallet("injected")}
        className="group relative mt-5"
      >
        <div className="absolute -inset-1 animate-tilt rounded-lg bg-gradient-to-r from-pink-400 to-blue-400 opacity-75 blur filter backdrop-blur-lg group-hover:opacity-100"></div>

        <button className="relative flex items-center space-x-3 rounded-lg bg-black px-6 py-3 text-lg font-medium md:text-2xl">
          <Image
            width={50}
            height={50}
            src="/images/Metamask.svg"
            alt="Metamask"
          />
          Sign in using metamask
        </button>
      </div>
    </div>
  );
};

export default SignIn;
