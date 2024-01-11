import FaqTable from "./FaqTable";

const Faq = () => {
  return (
    <section className="mx-auto my-4 h-screen max-w-7xl border border-black">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-5 bg-yellow-400 text-center">
          <span className="text-2xl font-medium">FAQ</span>
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="max-w-2xl text-gray-600">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <FaqTable />
      </div>
    </section>
  );
};

export default Faq;
