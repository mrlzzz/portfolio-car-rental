import { useState } from "react";
import Icon from "../utils/Icon";

const FaqTable = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex w-2/3 flex-col bg-white p-10 text-left">
      <button
        className="flex justify-between border border-black p-4"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        What is special about comparing rental car deals?
        <span>
          <Icon type="arrDown" />
        </span>
      </button>

      <div
        className={`${
          isActive ? "max-h-0" : "max-h-20"
        } p-2 transition-all duration-300 ease-in`}
      >
        Comparing rental car deals is important as it helps find the best deal
        that fits your budget and requirements, ensuring you get the most value
        for your money. By comparing various options, you can find deals that
        offer lower prices, additional services, or better car models. You can
        find car rental deals by researching online and comparing prices from
        different rental companies.
      </div>
      <button className="flex justify-between border border-black p-4">
        How do I find the car rental deals?
        <span>
          <Icon type="arrDown" />
        </span>
      </button>
      <div className="p-2">
        You can find car rental deals by researching online and comparing prices
        from different rental companies. Websites such as Expedia, Kayak, and
        Travelocity allow you to compare prices and view available rental
        options. It is also recommended to sign up for email newsletters and
        follow rental car companies on social media to be informed of any
        special deals or promotions.
      </div>
      <button className="flex justify-between border border-black p-4">
        How do I find such low rental car prices?
        <span>
          <Icon type="arrDown" />
        </span>
      </button>
      <div className="p-2">
        Book in advance: Booking your rental car ahead of time can often result
        in lower prices. Compare prices from multiple companies: Use websites
        like Kayak, Expedia, or Travelocity to compare prices from multiple
        rental car companies. Look for discount codes and coupons: Search for
        discount codes and coupons that you can use to lower the rental price.
        Renting from an off-airport location can sometimes result in lower
        prices.
      </div>
    </div>
  );
};

export default FaqTable;
