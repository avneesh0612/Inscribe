const Footer = () => {
  return (
    <div className="flex items-center justify-center w-screen p-10 mt-12 space-x-10 bg-black border-t-2 border-white/5">
      <a
        href="https://discord.gg/UFfwQWY7eV"
        className="text-lg font-medium text-gray-100 hover:underline"
      >
        Discord
      </a>
      <a
        href="https://github.com/avneesh0612/Inscribe"
        className="text-lg font-medium text-gray-100 hover:underline"
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
