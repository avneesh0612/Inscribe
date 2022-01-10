import Image from "next/image";

interface Props {
  icon: string;
  description: string;
}

const Features: React.FC<Props> = ({ icon, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={icon}
        alt="icon"
        width={50}
        height={50}
        className="w-16 h-16 mb-4"
      />

      <p className="mt-2 text-lg text-center w-52 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default Features;
