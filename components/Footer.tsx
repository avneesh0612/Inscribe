import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-12 flex w-screen items-center justify-center space-x-10 border-t-2 border-white/5 bg-black p-10">
      <a
        href="https://discord.gg/UFfwQWY7eV"
        rel="noreferrer"
        target="_blank"
        className="text-lg font-medium text-gray-100 hover:underline"
      >
        Discord
      </a>
      <a
        href="https://github.com/avneesh0612/Inscribe"
        target="_blank"
        rel="noreferrer"
        className="text-lg font-medium text-gray-100 hover:underline"
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
