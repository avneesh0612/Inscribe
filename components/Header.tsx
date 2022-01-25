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
      className={`fixed top-0 flex w-screen items-center border-b-2 border-white/10 bg-black px-4 py-4 duration-100  md:px-10
    ${animateHeader ? "bg-black/5 py-6 shadow-xl backdrop-blur-xl" : ""}`}
    >
      <Link passHref href="/">
        <Logo className="h-12 w-40 cursor-pointer md:ml-4 md:h-14 md:w-44" />
      </Link>

      <div className="ml-auto flex items-center space-x-4">
        <a
          href="https://blog.avneesh.tech/inscribe"
          className="text-lg font-medium hover:underline"
        >
          About
        </a>
        {address && (
          <p className="hidden rounded-full border-2 border-slate-300 px-4 py-2 text-lg font-medium md:flex">
            {shortenAddress(address)}
          </p>
        )}
      </div>

      <Link href="/app">
        <a className="ml-4 rounded-full border-2 border-slate-300 px-8 py-2 text-lg font-medium md:ml-20">
          App
        </a>
      </Link>
    </nav>
  );
};

export default Header;
