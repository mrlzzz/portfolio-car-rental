import Icon from "../utils/Icon";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center border-t border-black bg-red-100 p-2 lg:h-[50vh]">
      <section className="mx-auto flex h-full w-full max-w-7xl flex-col gap-6 border border-black py-20 text-center lg:flex-row lg:text-left">
        <div className="flex flex-1 flex-col gap-4 border border-green-600">
          <h1 className="text-xl ">
            <span className="font-bold">CAR</span> Rental
          </h1>
          <p className="text-gray-500">
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car to meet your needs.
          </p>
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <a
              href="tel:+4511223344"
              className="flex gap-2 transition-all hover:text-orange-500"
            >
              <Icon type="phone" /> +45 11 22 33 44
            </a>
            <a
              href="mailto:hello@carrental.com"
              className="flex gap-2 transition-all hover:text-orange-500"
            >
              <Icon type="mail" /> hello@carrental.com
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 border border-green-600">
          <h1 className="text-xl font-bold uppercase">About us</h1>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="transition-all hover:text-orange-500">
                Values
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-orange-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-orange-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-orange-500">
                City
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:text-orange-500">
                How we work
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-2 border border-green-600">
          <h1 className="text-xl font-bold uppercase">Working Hours</h1>
          <ul className="flex flex-col gap-1">
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4 border border-green-600">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold uppercase">Subscription</h1>
            <p>Subscribe your Email address for latest news & updates.</p>
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your Email address"
              className="w-full p-4 placeholder:text-center"
            />
            <button className=" w-full bg-orange-500 p-4 text-xl  font-bold uppercase text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] duration-150 hover:brightness-95 active:scale-95 active:shadow-none">
              Submit
            </button>
          </form>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
