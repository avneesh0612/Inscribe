import { FC } from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Header />
      <HeroHome />

      <div className="relative flex flex-col items-center w-screen">
        <div className="absolute top-0 rounded-full mr-52 bg-pink-400/20 md:w-80 md:h-72 blur-2xl"></div>
        <div className="absolute top-0 rounded-full ml-52 bg-blue-400/20 md:w-80 md:h-72 blur-2xl"></div>
        <h1 className="z-30 mt-32 text-2xl font-bold text-white md:text-5xl font-Ubuntu">
          With Inscribe you can:
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full mt-20 space-x-10">
          <Feature
            icon="/images/INK.svg"
            description="Trade INK, our own crypto currency"
          />
          <Feature
            icon="/images/Vote.svg"
            description="Take part in the DAOs voting and Polls"
          />
          <Feature
            icon="/images/NFT.svg"
            description="Get access to the inclusive community with an NFT"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
