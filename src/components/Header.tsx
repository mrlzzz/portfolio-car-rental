import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </>
  );
};

export default Header;
