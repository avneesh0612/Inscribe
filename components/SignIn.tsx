import { useWeb3 } from "@3rdweb/hooks";
import Header from "./Header";
import Image from "next/image";

const SignIn = () => {
  const { connectWallet } = useWeb3();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="absolute rounded-full bg-pink-400/30 md:w-96 md:h-96 top-20 -right-40 blur-2xl"></div>
      <div className="absolute rounded-full bg-blue-400/30 md:w-96 md:h-96 bottom-14 -left-40 blur-2xl"></div>
      <Header />
      <h1 className="px-5 my-5 text-3xl font-semibold text-center text-white md:text-4xl">
        Welcome to Inscribe
      </h1>
      <div
        onClick={() => connectWallet("injected")}
        className="relative mt-5 group"
      >
        <div className="absolute rounded-lg opacity-75 -inset-1 bg-gradient-to-r from-pink-400 to-blue-400 filter group-hover:opacity-100 blur backdrop-blur-lg animate-tilt"></div>

        <button className="relative flex items-center px-6 py-3 space-x-3 text-lg font-medium bg-black rounded-lg md:text-2xl">
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
