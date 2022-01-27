import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Logo, VerifiedIcon } from "./Icons";
import NFTCard from "./NFTCard";

interface Props {}

const sdk = new ThirdwebSDK("rinkeby");

const bundleDropModule = sdk.getBundleDropModule(
  "0x2e2040BB43ba63AE7E055f28C3F61F2eb9e7B6d4"
);

const Header: FC<Props> = ({}) => {
  const { address } = useWeb3();
  const [animateHeader, setAnimatedHeader] = useState(false);
  const [hidden, isHidden] = useState<boolean>(true);
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  useEffect(() => {
    if (!address) {
      return;
    }
    bundleDropModule
      .balanceOf(address, "0")
      .then((balance: any) => {
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
        } else {
          setHasClaimedNFT(false);
        }
      })
      .catch((error: any) => {
        setHasClaimedNFT(false);
        console.error("failed to nft balance", error);
      });
  }, [address]);

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
          rel="noreferrer"
          target="_blank"
          href="https://blog.avneesh.tech/inscribe"
          className="text-lg font-medium hover:underline"
        >
          About
        </a>

        {hasClaimedNFT && (
          <p
            className="hidden cursor-pointer flex-row items-center gap-x-2 rounded-full bg-slate-200 px-3 py-2 text-black/5 duration-100 hover:bg-slate-100 md:flex"
            onClick={() => isHidden(!hidden)}
          >
            <VerifiedIcon />
            <span className="font-medium text-black">Early Access</span>
          </p>
        )}

        {address && (
          <p className="flex cursor-pointer flex-row items-center rounded-full border-2 border-white px-3 py-2 text-sm duration-100 hover:bg-slate-100 hover:text-black">
            {shortenAddress(address)}
          </p>
        )}
      </div>
      <Link href="/app">
        <a className="ml-4 rounded-full border-2 border-slate-300 px-8 py-2 text-lg font-medium md:ml-20">
          App
        </a>
      </Link>
      <NFTCard hidden={hidden} />
    </nav>
  );
};

export default Header;
