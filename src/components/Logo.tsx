import Image from "next/image";
import logo from "../../public/logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={logo} width={250} height={250} alt="Logo" />
    </div>
  );
};

export default Logo;
