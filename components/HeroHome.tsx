import Link from "next/link";
import { FC } from "react";

const HeroHome: FC = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center pt-40 md:h-screen md:pt-0">
      <div className="absolute top-20 -right-40 rounded-full bg-pink-400/30 blur-2xl md:h-96 md:w-96"></div>
      <div className="absolute bottom-14 -left-40 rounded-full bg-blue-400/30 blur-2xl md:h-96 md:w-96"></div>
      <p className="text-slate-400">Inscribe DAO</p>
      <h1 className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text pb-2 text-center font-Ubuntu text-3xl font-extrabold text-transparent md:w-[600px] md:text-6xl">
        A DAO for Bloggers all around the world!
      </h1>
      <p className="mt-4 w-5/6 text-center text-slate-300 md:w-2/5">
        A platform to connect with like-minded people
      </p>
      <Link href="/app">
        <a className="mt-4 rounded-full border-2 border-slate-400 from-pink-400/70 to-blue-400 px-4 py-2 text-lg text-white hover:bg-gradient-to-r">
          Join Now
        </a>
      </Link>
    </div>
  );
};

export default HeroHome;
