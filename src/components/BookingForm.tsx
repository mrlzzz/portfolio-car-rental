import Icon from "../utils/Icon";

const BookingForm = () => {
  return (
    <section className="mx-auto my-4 h-screen max-w-7xl border border-black p-2">
      <div className="flex h-full items-center justify-center">
        <div className="w-full border border-black shadow-lg lg:p-16">
          <h1 className="mb-5 text-2xl font-bold">Book a car</h1>
          <form>
            <div className="flex flex-col gap-2">
              {/* Form row #1 */}
              <div className="flex flex-col gap-2 lg:flex-row">
                <div className="flex flex-col lg:w-1/3">
                  <label
                    className="my-2 flex gap-2 font-bold"
                    htmlFor="car-type"
                  >
                    <Icon type="car" />
                    Car Type
                  </label>
                  <select className="p-3" id="car-type" name="car-type">
                    {/* `disabled` and `null` value indicate placeholder */}
                    <option value="" disabled>
                      Select your car type
                    </option>
                    <option value="audi">Audi</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="bmw">BMW</option>
                    <option value="fiat">Fiat</option>
                    <option value="skoda">Skoda</option>
                    <option value="dacia">Dacia</option>
                  </select>
                </div>
                <div className="flex flex-col lg:w-1/3">
                  <label
                    className="my-2 flex gap-2 font-bold"
                    htmlFor="pick-up-location"
                  >
                    <Icon type="location" />
                    Pick-up location
                  </label>
                  <select
                    className="p-3 "
                    id="pick-up-location"
                    name="pick-up-location"
                  >
                    <option value="" disabled>
                      Select pick-up location
                    </option>
                    <option value="kbh-k">København K</option>
                    <option value="kbh-n">København N</option>
                    <option value="kbh-nv">København NV</option>
                    <option value="kbh-oe">København Ø</option>
                    <option value="kbh-s">København S</option>
                    <option value="kbh-sv">København SV</option>
                  </select>
                </div>
                <div className="flex flex-col lg:w-1/3">
                  <label
                    className="my-2 flex gap-2 font-bold"
                    htmlFor="drop-off-location"
                  >
                    <Icon type="location" />
                    Drop-off location
                  </label>
                  <select
                    className="p-3"
                    id="drop-off-location"
                    name="drop-off-location"
                  >
                    <option value="" disabled>
                      Select drop-off location
                    </option>
                    <option value="kbh-k">København K</option>
                    <option value="kbh-n">København N</option>
                    <option value="kbh-nv">København NV</option>
                    <option value="kbh-oe">København Ø</option>
                    <option value="kbh-s">København S</option>
                    <option value="kbh-sv">København SV</option>
                  </select>
                </div>
              </div>
              {/* Form row #2 */}
              <div className="flex flex-col gap-2 lg:flex-row">
                <div className="flex flex-col lg:w-1/3">
                  <label
                    className="my-2 flex gap-2 font-bold"
                    htmlFor="pick-up-date"
                  >
                    <Icon type="calendar" />
                    Pick-up date
                  </label>
                  <input
                    type="date"
                    id="pick-up-date"
                    name="pick-up-date"
                    placeholder="dd/mm/yy"
                    className="p-3"
                  ></input>
                </div>
                <div className="flex flex-col lg:w-1/3">
                  <label
                    className="my-2 flex gap-2 font-bold"
                    htmlFor="drop-off-date"
                  >
                    <Icon type="calendar" />
                    Drop-off date
                  </label>
                  <input
                    type="date"
                    id="drop-off-date"
                    name="drop-off-date"
                    placeholder="dd/mm/yy"
                    className="p-3"
                  ></input>
                </div>
                <div className="mt-3 flex flex-col justify-end lg:mt-0 lg:w-1/3">
                  <button
                    className="bg-orange-500 p-3 font-bold text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] transition-all duration-150 hover:brightness-95 active:scale-95 active:shadow-none"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
