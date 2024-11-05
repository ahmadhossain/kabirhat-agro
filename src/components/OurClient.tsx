const OurClient = () => {
  const info = [
    {
      tittle: "Mission",
      desc: "Mission To provide products and services in a sustainable way, aiming at the development of our suppliers and the agribusiness chain.",
      bg: "bg-gray-100",
    },
    {
      tittle: "Vision",
      desc: "Vision To expand our presence in agribusiness, being the best choice for our partners and customers.",
      bg: "bg-black",
    },
    {
      tittle: "Values",
      desc: "Values Ethics, transparency, cooperation, recognition, simplicity, commitment and innovation.",
      bg: "bg-teal-800",
    },
  ];

  return (
    <div className="mx-10 my-20 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-1 mb-10">Our Clients</h2>
        <div className="grid  md:grid-cols-3">
          {info.map((el, index) => (
            <div
              key={index}
              className={`px-5 py-7 text-left ${el.bg} ${
                index !== 0 && "text-white"
              }`}
            >
              <p
                className={`text-2xl font-bold pb-3 ${
                  index === 0 && "text-black"
                }`}
              >
                {el.tittle}
              </p>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
