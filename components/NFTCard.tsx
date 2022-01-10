import Image from "next/image";

const NFTCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10 bg-white rounded-lg shadow-xl ">
      <Image src="/pen.png" width={100} height={100} alt="Inscribe NFT" />
      <p>View on opensea</p>
    </div>
  );
};

export default NFTCard;
