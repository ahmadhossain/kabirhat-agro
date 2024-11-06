import Image from "next/image";
import logo from "../../public/logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={logo} width={200} height={200} alt="Logo" />
    </div>
  );
};

export default Logo;
