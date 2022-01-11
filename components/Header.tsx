import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [animateHeader, setAnimatedHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 50) {
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
      className={`
    ${animateHeader ? "bg-white/5 backdrop-blur-3xl py-4" : ""} 
    fixed top-0 flex items-center w-screen px-10 py-2 shadow-xl duration-100`}
    >
      <Link passHref href="/">
        <Image
          src="/logo.svg"
          width={200}
          height={68}
          objectFit="contain"
          alt="Inscribe"
          className="cursor-pointer"
        />
      </Link>

      <div className="flex items-center ml-auto mr-20 space-x-4">
        <Link href="/">
          <a className="text-lg font-medium text-gray-100 hover:underline">
            Home
          </a>
        </Link>
        <a
          href="https://blog.avneesh.tech/inscribe"
          className="text-lg font-medium text-gray-100 hover:underline"
        >
          About
        </a>
      </div>

      <Link href="/app">
        <a className="px-8 py-2 text-lg font-medium text-gray-100 border-2 border-gray-100 rounded-full">
          App
        </a>
      </Link>
    </nav>
  );
};

export default Header;
