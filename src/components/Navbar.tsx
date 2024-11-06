import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
    },
    { name: "Photos", href: "/photos" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact Us", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white py-3 px-12 flex flex-wrap justify-between items-center">
      <Logo />
      <div className="flex text-lg gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={` ${pathname === link.href && "text-red-400"}`}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
