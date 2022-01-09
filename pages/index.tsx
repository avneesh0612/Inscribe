import { FC } from "react";
import Header from "../components/Header";

const Home: FC = () => {
  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />
      <h1 className="p-3 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
        A DAO for Bloggers all around the world!
      </h1>
    </div>
  );
};

export default Home;
