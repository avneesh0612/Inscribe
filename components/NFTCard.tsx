import Image from "next/image";

const NFTCard = () => {
  return (
    <div className="flex items-center justify-center p-3 space-x-4 bg-white rounded-lg shadow-xl">
      <Image src="/pen.png" width={125} height={125} alt="Inscribe NFT" />
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
        <div className="flex items-center justify-between w-full px-4">
          <a
            className="relative bg-gray-400 rounded-full w-14 h-14"
            href="https://ethereum.org/"
          >
            <Image
              width={45}
              height={45}
              objectFit="contain"
              src="/ethereum.png"
              alt=""
            />
          </a>

          <a href="https://testnets.opensea.io/assets/0x2e2040bb43ba63ae7e055f28c3f61f2eb9e7b6d4/0">
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
