import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center bg-slate-800">
        <div className="max-w-3xl my-40 text-white text-center">
          <div className="pb-8 text-7xl font-bold">Nós somos a Safira!</div>
          <div>
            We are Agro! A company with soul and purpose. We are inspired by
            people and guided by work, always seeking to anticipate trends and
            bring the most innovative and efficient products on the market to
            rural producers. We are Sapphire!
          </div>
        </div>
      </div>
      <div className="mx-10 my-20 text-center">
        <div className="heading-1">Our Services</div>
        <div className="flex flex-col gap-y-5 text-gray-600">
          <div>
            A Safira Agri was founded with the intention of structuring the
            corn, soy, and agricultural supplies import/export business,
            searching alternative markets for commercializing those products,
            going where the traditional trading companies can’t go: the small
            quantity markets.
          </div>
          <div>
            Initially, Safira Agri Ltda. was created with the intention of
            draining the production of soy and corn deriving from the
            cooperatives installed in Parana, generating production value, and
            searching for strategic investors to fund the structures of more
            than 47 cooperatives and in the purchase of supplies for more than
            180 thousand partners associated with those cooperatives.
          </div>
          <div>
            Our company has a potential production reach of more than 3 million
            tons of soy, and 2 million tons of corn from the 180 thousand
            suppliers associated with the agricultural cooperatives from the
            state of parana in Brazil.
          </div>
          <div>
            Our strong connection with more than 47 local cooperatives in Brazil
            helps us amplify the supply of soy and corn to international
            partners in a short period of time.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
