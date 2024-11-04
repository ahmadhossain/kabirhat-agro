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
    <div className="">
      <div className="py-10 px-12 flex justify-between">
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
      </div>
    </div>
  );
};

export default Navbar;
