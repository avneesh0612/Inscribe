import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="top-0 flex items-center w-screen px-10 py-5">
      <Image
        src="/logo.svg"
        width={200}
        height={68}
        objectFit="contain"
        alt="Inscribe"
      />
      <div className="flex items-center ml-auto mr-20 space-x-4">
        {items.map((item, i) => (
          <Link href={item.href} key={i}>
            <a className="text-lg font-medium text-gray-100 hover:underline">
              {item.title}
            </a>
          </Link>
        ))}
      </div>

      <Link href="/app">
        <a className="px-8 py-2 text-lg font-medium text-gray-100 border-2 border-gray-100 rounded-full">
          App
        </a>
      </Link>
    </div>
  );
};

export default Header;
