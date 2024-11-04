import Image from "next/image";
import goalImg from "../../public/landing/our-goal.jpg";

const OurGoal = () => {
  return (
    <div className="container-full grid grid-cols-2 gap-10 mb-10">
      <div className="flex flex-col justify-center">
        <div>
          <Image src={goalImg} alt="Our Goal's image" width={0} height={0} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="heading-1 mb-10">OUR GOALS</h2>
        <p className="">
          Our focus is to connect suppliers to international buyers and ensure a
          smooth and lucrative experience for all parties involved.
        </p>
      </div>
    </div>
  );
};

export default OurGoal;
