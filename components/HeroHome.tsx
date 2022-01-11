import Link from "next/link";
import { FC } from "react";

const HeroHome: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="absolute rounded-full bg-pink-400/30 w-96 h-96 top-20 -right-40 blur-2xl"></div>
      <div className="absolute rounded-full bg-blue-400/30 w-96 h-96 bottom-14 -left-40 blur-2xl"></div>
      <p className="text-slate-400">Inscribe DAO</p>
      <h1 className="pb-2 text-5xl font-extrabold text-transparent w-[600px] text-center font-Ubuntu bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
        A DAO for Bloggers all around the world!
      </h1>
      <p className="w-2/5 mt-4 text-center text-slate-300">
        Inscribe let&apos;s you share ideas and write articles with your
        friends. You get to read articles from other people! You also get an
        inclusive NFT.
      </p>
      <Link href="/app">
        <a className="px-4 py-2 mt-4 text-lg text-white border-2 rounded-full border-slate-400 hover:bg-gradient-to-r from-pink-400/70 to-blue-400">
          Join Now
        </a>
      </Link>
    </div>
  );
};

export default HeroHome;
