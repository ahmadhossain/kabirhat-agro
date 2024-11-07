import Image from "next/image";
import businessNatureImg from "../../public/landing/nature-of-business.jpg";
import Stripe from "./Stripe";

const OurBusinessNature = () => {
  const info = [
    {
      desc: "Act in the Agricultural activity, serving Cooperatives and their Members , providing services and intermediation of purchases and sales of soybeans and corn.",
    },
    {
      desc: "Export fresh agricultural products to companies processing food for human and animal consumption.",
    },
    {
      desc: "Industrialize agricultural products for human and animal consumption.",
    },
    {
      desc: "Export soy and corn to commercial and/or food processing companies for human and animal consumption.",
    },
    {
      desc: "Import agricultural inputs for supply to Cooperative Members of the Cooperatives served and local companies, as well as cooperatives interested in exchanging inputs for grains.",
    },
    {
      desc: "Manage the interests of sellers and buyers of fresh or industrialized soybeans and corn, as well as establishing partnerships between companies, cooperatives and their producers with industries and potential interested parties from anywhere in the world.",
    },
    {
      desc: "Establish Joint Ventures between Cooperatives and potential investors.",
    },
  ];

  return (
    <div className="px-10 grid md:grid-cols-2 mb-10 gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="heading-1 mb-10">NATURE OF THE BUSINESS</h2>
        <Stripe />
        <div className="flex flex-col gap-6 text">
          {info.map((el, index) => (
            <p key={index}>{el.desc}</p>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={businessNatureImg}
          alt="Our Bussiness nature's image"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default OurBusinessNature;
