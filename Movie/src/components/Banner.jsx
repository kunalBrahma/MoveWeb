import BanerImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${BanerImage})` }}
    >
      <div className="text-2xl text-white text-center w-full bg-gray-900/60 pt-4 pb-4">
        Oppenheimer
      </div>
    </div>
  );
};

export default Banner;
