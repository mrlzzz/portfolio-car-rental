import Icon from "../utils/Icon";
import userImg_1 from "../assets/Testimonials/user-img-1.jpg";
import userImg_2 from "../assets/Testimonials/user-img-2.jpg";

const Testimonials = () => {
  return (
    <section className="mx-auto my-4 h-screen max-w-7xl border border-black">
      <div className="flex h-full flex-col justify-center gap-10">
        <div className="flex flex-col items-center gap-5 bg-yellow-400 text-center">
          <span className="text-2xl font-medium">Reviewed by People</span>
          <h1 className="text-5xl font-bold">Client's Testimonials</h1>
          <p className="max-w-2xl text-gray-600">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex justify-center gap-10 bg-yellow-100">
          <div className="flex max-w-xl flex-col gap-10 bg-yellow-200 p-12 shadow-xl">
            <p className="text-pretty font-poppins text-2xl">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable."
            </p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-4">
                <img className="h-16 w-16 rounded-full" src={userImg_1} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Harry Potter</h1>
                  <span>Copenhagen</span>
                </div>
              </span>
              <Icon type="quote" />
            </div>
          </div>
          <div className="flex max-w-xl flex-col gap-10 bg-yellow-200 p-12 shadow-xl">
            <p className="text-pretty font-poppins text-2xl">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable."
            </p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-4">
                <img className="h-16 w-16 rounded-full" src={userImg_2} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Hermione Granger</h1>
                  <span>Århus</span>
                </div>
              </span>
              <Icon type="quote" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
