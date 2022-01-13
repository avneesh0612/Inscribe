import { useWeb3 } from "@3rdweb/hooks";
import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Logo } from "./Icons";

interface Props {}

const Header: FC<Props> = ({}) => {
  const [animateHeader, setAnimatedHeader] = useState(false);
  const { address, balance } = useWeb3();
  const shortenAddress = (str: string) => {
    return str.substring(0, 4) + "..." + str.substring(str.length - 4);
  };

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 60) {
        setAnimatedHeader(true);
      } else setAnimatedHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`bg-black fixed top-0 flex items-center border-b-2 border-white/10 w-screen px-4 md:px-10 py-4 shadow-xl duration-100
    ${animateHeader ? "bg-white/5 backdrop-blur-3xl border-transparent" : ""}`}
    >
      <Link passHref href="/">
        <Logo className="w-40 h-12 cursor-pointer md:ml-4 md:h-14 md:w-44" />
      </Link>

      <div className="flex items-center ml-auto space-x-4">
        <a
          href="https://blog.avneesh.tech/inscribe"
          className="text-lg font-medium hover:underline"
        >
          About
        </a>
        {address && (
          <p className="hidden px-4 py-2 text-lg font-medium border-2 rounded-full md:flex border-slate-300">
            {shortenAddress(address)}
          </p>
        )}
      </div>

      <Link href="/app">
        <a className="px-8 py-2 ml-4 text-lg font-medium border-2 rounded-full md:ml-20 border-slate-300">
          App
        </a>
      </Link>
    </nav>
  );
};

export default Header;
