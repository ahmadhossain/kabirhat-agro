import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-teal-800 px-12 text-white text-sm font-medium">
      <div className="flex flex-col md:flex-row gap-7 justify-between py-8">
        <Logo />
        <div className="md:basis-1/2">
          <p className="text-md md:text-xl font-bold mb-3">Contact</p>
          <div className="flex flex-col gap-2">
            <p>Tel: +880 1873372433</p>
            <p>Email: info@Kabirhatagro.com</p>
            <p>
              Address : 7th FL House No. 1127 – Ave 8 – Road No. 11 – DOHS,
              Mirpur – Dhaka-1216
            </p>
          </div>
        </div>
      </div>
      <p className="border-t border-gray-400 text-center pt-5 pb-8">
        Copyright © 2024 Kabirhat. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
