import { FC } from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";

const Home: FC = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <Header />
      <HeroHome />

      <div className="relative mt-14 flex w-screen flex-col items-center md:mt-0">
        <div className="absolute top-0 mr-52 rounded-full bg-pink-400/20 blur-2xl md:h-72 md:w-80"></div>
        <div className="absolute top-0 ml-52 rounded-full bg-blue-400/20 blur-2xl md:h-72 md:w-80"></div>
        <h1 className="mt- z-30 mt-32 font-Ubuntu text-2xl font-bold text-white md:text-5xl">
          With Inscribe you can:
        </h1>
        <div className="mt-20 flex w-full flex-wrap items-center justify-center space-y-5 md:space-x-10">
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
