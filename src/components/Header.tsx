import { NavLink } from "react-router-dom";

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

const activeLinkCallback = ({ isActive }: NavLinkRenderProps) => {
  return isActive ? "text-red-400" : "";
};

const Header = () => {
  return (
    <>
      <nav className="mx-4 flex h-20 items-center justify-center border border-black">
        <NavLink to="/" className={activeLinkCallback}>
          Home
        </NavLink>
        <NavLink to="/about" className={activeLinkCallback}>
          About
        </NavLink>
        <NavLink to="/contact" className={activeLinkCallback}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
