import { FC } from "react";
import Header from "../components/Header";
import Link from "next/link";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen pt-40 bg-black">
      <Header />
      <div className="flex flex-col items-center justify-center w-screen">
        <p className="text-gray-200">Inscribe DAO</p>
        <h1 className="pb-2 text-5xl font-extrabold font-Ubuntu text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
          A DAO for Bloggers all around the world!
        </h1>
        <p className="mt-4">
          Inscribe let&apos;s you share ideas and write articles with your
          friends.
        </p>
        <Link href="/app">
          <a className="px-4 py-2 mt-4 text-white border-2 border-gray-200 rounded-full">
            Join Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
