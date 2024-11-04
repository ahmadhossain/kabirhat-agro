import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-teal-800 px-12 text-white text-sm font-normal">
      <div className="flex justify-between py-8">
        <Logo />
        <div className="basis-1/2">
          <p className="text-xl font-bold mb-3">Contact</p>
          <div className="flex flex-col gap-2">
            <p>Tel: +55 (41) 3079-4050</p>
            <p>Email: infos@safiragri.com</p>
            <p>
              Address : R. XV de Novembro, 270 – Centro, Curitiba – PR, Cep
              80.020-310 – Brazil
            </p>
          </div>
        </div>
      </div>
      <p className="border-t border-gray-400 text-center pt-5 pb-8">
        Copyright © 2024 Safira. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
