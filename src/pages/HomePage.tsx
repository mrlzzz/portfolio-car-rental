import { Outlet, Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <nav>
        <Link to={`about`}>About</Link>
        <Link to={`contact`}>Contact</Link>
        <Link to={`prices`}>Prices</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default HomePage;
