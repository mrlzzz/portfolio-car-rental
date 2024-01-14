import fleetImg from "../assets/fleet.png";

const Fleet = () => {
  return (
    <section className="mx-auto my-4 border border-black lg:h-screen">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex w-full flex-col gap-10 bg-gray-800 py-16 text-center text-white">
          <h1 className="text-5xl font-bold">
            Save big with our cheap car rental!
          </h1>
          <p className="text-2xl">
            Top Airports. Local Suppliers.{" "}
            <span className="text-orange-500">24/7</span> Support.
          </p>
        </div>
        <div className=" hidden lg:block">
          <img
            className=""
            src={fleetImg}
            alt="Fleet of cars offered by Car Rental"
          />
        </div>
      </div>
    </section>
  );
};

export default Fleet;
