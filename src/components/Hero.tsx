import Icon from "../utils/Icon";
import HeroCar from "../assets/hero-car.png";

const Hero = () => {
  return (
    <section className="mx-auto my-4 h-screen max-w-7xl border border-black">
      <div className="flex h-full">
        <div className="flex h-full w-[40%] flex-col justify-center text-pretty border border-black">
          <p className="my-2 text-xl font-extrabold">Plan your trip now</p>
          <h1 className="text-5xl/tight font-bold">
            Save <span className="text-orange-500">big</span> with our car
            rental
          </h1>
          <p className="my-8 leading-relaxed text-gray-600 antialiased">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div>
            <button className="mr-6 rounded-sm bg-orange-500 px-7 py-4  font-bold text-white shadow-md shadow-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500">
              <span className="flex items-center gap-2">
                Book Ride<Icon type="check"></Icon>
              </span>
            </button>
            {/* Using `outline` instead of `border` due to `border box` not working (or I just can't figure it out)*/}
            <button className=" rounded-sm bg-black px-7 py-4  font-bold text-white outline outline-2 outline-offset-[-2px] outline-black transition-all duration-300 hover:bg-white hover:text-black">
              <span className="flex items-center gap-2">
                Learn More<Icon type="arrRight"></Icon>
              </span>
            </button>
          </div>
        </div>
        <div className="flex h-full w-[60%] flex-col justify-center border border-black">
          <img src={HeroCar}></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
