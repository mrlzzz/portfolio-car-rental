import google from "../assets/google-play-badge.png";
import apple from "../assets/app-store-badge.svg";

const GetMobile = () => {
  return (
    <section
      className={`lg:bg-get-mobile mx-auto flex justify-center border border-black bg-[center_10px] bg-no-repeat p-2 lg:h-[50vh]`}
    >
      <div className="flex h-full w-[80rem] items-center justify-start  border border-red-300 p-3">
        <div className="relative flex max-w-lg flex-col gap-10">
          <h1 className="text-4xl font-bold">
            Download our app to get most out of it
          </h1>
          <p className="text-gray-500">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          {/* These two assets are not in the same format / size  */}
          <div className="flex lg:justify-start">
            <img
              className="w-[9rem] lg:w-[12rem]"
              src={apple}
              alt="Get our App on the Appstore"
            />
            <img
              className="w-[12rem] lg:w-[15rem]"
              src={google}
              alt="Get our App on the Google Play"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetMobile;
