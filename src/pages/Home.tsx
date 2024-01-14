import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import Guide from "../components/Guide";
import Models from "../components/Models";
import Fleet from "../components/Fleet";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import GetMobile from "../components/GetMobile";

const Home = () => {
  return (
    <main>
      <Hero />
      <BookingForm />
      <Guide />
      <Models />
      <Fleet />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <GetMobile />
    </main>
  );
};

export default Home;
