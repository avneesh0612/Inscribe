import Image from "next/image";
import { EthereumIcon, InscribeIcon } from "./Icons";
import { FC } from "react";

const NFTCard: FC = () => {
  return (
    <div className="flex items-center justify-center space-x-4 rounded-lg bg-white p-3 shadow-xl">
      <InscribeIcon className="h-32 w-32" />
      <div>
        <h2 className="text-3xl font-bold text-black ">
          Inscribe Membership NFT
        </h2>
        <p className="max-w-[500px] text-black">
          This NFT is for early access members of the thirdweb community.
          📦Receive exclusive airdrops and perks ⚡Gain immediate access to our
          platform 🔓Unlock our &quot;early access lounge&quot; discord channel
          with our team 🔮
        </p>
        <div className="flex w-full items-center justify-between px-4">
          <a
            className="relative h-14 w-14 rounded-full bg-gray-400"
            href="https://ethereum.org/"
          >
            <EthereumIcon className="h-11 w-8 " />
          </a>

          <a href="https://testnets.opensea.io/0x2e2040BB43ba63AE7E055f28C3F61F2eb9e7B6d4/0">
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
