import Icon from "../utils/Icon";
import HeroCar from "../assets/hero-car.png";

const Hero = () => {
  return (
    <section className="mx-auto my-4 h-screen max-w-7xl border border-black p-2">
      <div className="flex h-full">
        <div className="flex h-full w-full flex-col justify-center text-pretty  p-3 lg:w-[40%]">
          <p className="my-2 text-xl font-extrabold">Plan your trip now</p>
          <h1 className="text-5xl/tight font-bold">
            Save <span className="text-orange-500">big</span> with our car
            rental
          </h1>
          <p className="my-8 leading-relaxed text-gray-600 antialiased">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex flex-col gap-4 lg:mx-0 lg:flex-row lg:gap-0">
            <button className="mr-6 w-full rounded-sm bg-orange-500 px-7 py-4 font-bold text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] transition-all duration-150 hover:brightness-95 active:scale-95 active:shadow-none lg:w-fit">
              <span className="flex items-center justify-center gap-2 lg:justify-start">
                Book Ride<Icon type="check"></Icon>
              </span>
            </button>
            {/* Using `outline` instead of `border` due to `border box` not working (or I just can't figure it out)*/}
            <button className="w-full rounded-sm bg-black px-7 py-4 font-bold text-white outline  outline-2 outline-offset-[-2px] outline-black transition-all duration-300 hover:bg-white hover:text-black active:scale-95 lg:w-fit">
              <span className="flex items-center justify-center gap-2 lg:justify-start">
                Learn More<Icon type="arrRight"></Icon>
              </span>
            </button>
          </div>
        </div>
        <div className="hidden h-full w-[60%] flex-col justify-center border border-black lg:flex">
          <img src={HeroCar}></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
