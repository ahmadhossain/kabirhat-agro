import Image from "next/image";
import philosophyImg from "../../public/landing/our-philosophy.jpg";
const OurPhilosphy = () => {
  return (
    <div className="container-full grid grid-cols-2 mb-10 gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="heading-1 mb-10">Our Philosphy</h2>
        <p className="">
          Our philosophy is to provide a service of immense value to
          international buyers of soy and corn, accompanying all the stages of
          the process to ensure success. From overseeing the production chain,
          all the way to securing the dispatch and arrival of the product in its
          final destination.
        </p>
      </div>
      <div>
        <Image
          src={philosophyImg}
          alt="Our Philoshy's image"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default OurPhilosphy;
