import Image from "next/image";
import { FC } from "react";
import { EthereumIcon, InscribeIcon } from "./Icons";

interface Props {
  hidden: boolean;
}

const NFTCard: FC<Props> = ({ hidden }) => {
  return (
    <div
      className={`fixed top-20 right-0 z-50 flex items-center justify-center space-x-4 rounded-lg bg-white p-3 shadow-xl ${
        hidden && "hidden"
      }`}
    >
      <InscribeIcon className="h-40 w-40" />
      <div>
        <h2 className="text-3xl font-bold text-black ">
          Inscribe Membership NFT
        </h2>
        <p className="max-w-[500px] text-black">
          This NFT gives special benefits like access to the community ✨,
          special channel in discord, being able to vote in our polls, and many
          more!
        </p>
        <div className="flex w-full items-center justify-between px-4">
          <a
            className="relative grid h-12 w-12 place-items-center rounded-full bg-gray-200"
            target="_blank"
            rel="noreferrer"
            href="https://ethereum.org/"
          >
            <EthereumIcon className="h-9 w-6" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://testnets.opensea.io/assets/0x2e2040BB43ba63AE7E055f28C3F61F2eb9e7B6d4/0"
          >
            <Image
              width={150}
              height={35}
              objectFit="contain"
              src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
