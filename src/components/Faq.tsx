import Accordion from "./Accordion";
import faqData from "../data/faqData";

const Faq = () => {
  return (
    <section className="mx-auto my-4 max-w-7xl border border-black p-2 lg:h-screen">
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 bg-yellow-400 text-center">
          <span className="text-2xl font-medium">FAQ</span>
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="max-w-2xl text-gray-600">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <Accordion items={faqData} />
      </div>
    </section>
  );
};

export default Faq;
