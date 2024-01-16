import selectCarImg from "../assets/Guide/select-car.png";
import contactOperatorImg from "../assets/Guide/contact-operator.png";
import letsDriveImg from "../assets/Guide/lets-drive.png";

const Guide = () => {
  return (
    <section className="mx-auto my-4 max-w-7xl p-2 lg:h-[75vh] ">
      <div className="flex h-full flex-col items-center justify-center gap-8 lg:gap-24">
        <div className="flex flex-col gap-5 text-center">
          <span className="text-2xl font-medium">Plan your trip now</span>
          <h1 className="text-5xl font-bold">Quick & easy car rental</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col items-center gap-3 text-center ">
            <img className="w-44" src={selectCarImg} alt="Select Car Image" />
            <h1 className="text-2xl font-bold">Select Car</h1>
            <p className="w-2/3 text-gray-600">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your standards.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-3 text-center ">
            <img
              className="w-44"
              src={contactOperatorImg}
              alt="Contact Operator Image"
            />
            <h1 className="text-2xl font-bold">Contact Operator</h1>
            <p className="w-2/3 text-gray-600">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-3 text-center ">
            <img className="w-44" src={letsDriveImg} alt="Let's Drive Image" />
            <h1 className="text-2xl font-bold">Let's Drive</h1>
            <p className="w-2/3 text-gray-600">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
