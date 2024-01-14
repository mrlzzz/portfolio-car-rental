import Icon from "../utils/Icon";
import driveImg from "../assets/ChooseUs/drive.png";
import noChargesImg from "../assets/ChooseUs/no-charges.png";
import pricingImg from "../assets/ChooseUs/pricing.png";

const ChooseUs = () => {
  return (
    <section className="mx-auto my-4 max-w-7xl border border-black p-2 lg:h-screen">
      <div className="flex h-full flex-col items-center justify-around gap-4 bg-yellow-200 lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-2 bg-yellow-300">
          <p className="text-xl font-bold">Why Choose Us</p>
          <h1 className=" max-w-md text-4xl font-bold">
            Best valued deals you will ever find
          </h1>
          <p className="mb-6 mt-4 max-w-lg text-balance text-gray-500">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="rounded-sm bg-orange-500 px-7 py-4 font-bold text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] transition-all duration-150 hover:brightness-95 active:scale-95 active:shadow-none lg:w-fit">
            <span className="flex items-center justify-center gap-2 lg:justify-start">
              Find Details<Icon type="arrRight"></Icon>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-8 bg-yellow-300">
          <div className="flex items-center justify-center gap-3 bg-yellow-400">
            <img className="bg-yellow-500" src={driveImg} alt="Car graphic" />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Cross Country Drive</h1>
              <p className="max-w-xs text-pretty text-gray-500">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-yellow-400">
            <img className="bg-yellow-500" src={pricingImg} alt="Car graphic" />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">All Inclusive Pricing</h1>
              <p className="max-w-xs text-pretty text-gray-500">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-yellow-400">
            <img
              className="bg-yellow-500"
              src={noChargesImg}
              alt="Car graphic"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">No Hidden Charges</h1>
              <p className="max-w-xs text-pretty text-gray-500">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
