import { FC } from "react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen pb-40 bg-black">
      <Header />
      <HeroHome />

      <div className="relative flex flex-col items-center w-screen mb-40">
        <div className="absolute top-0 rounded-full mr-52 bg-pink-400/20 w-80 h-72 blur-2xl"></div>
        <div className="absolute top-0 rounded-full ml-52 bg-blue-400/20 w-80 h-72 blur-2xl"></div>
        <h1 className="z-30 mt-32 text-5xl font-bold text-white font-Ubuntu">
          With Inscribe you can:
        </h1>
        <div className="flex items-center justify-center w-full mt-20 space-x-10">
          <Feature
            icon="/INK.svg"
            description="Trade INK our own crypto currency"
          />
          <Feature
            icon="/Vote.svg"
            description="Take part in the DAOs voting and Polls"
          />
          <Feature
            icon="/NFT.svg"
            description="Get access to the inclusive community with an NFT"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
