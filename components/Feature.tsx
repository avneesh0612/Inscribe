import Image from "next/image";
import { FC } from "react";

interface Props {
  icon: string;
  description: string;
}

const Features: FC<Props> = ({ icon, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={icon}
        alt="icon"
        width={50}
        height={50}
        className="mb-4 h-16 w-16"
      />

      <p className="mt-2 w-52 text-center text-lg text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default Features;
