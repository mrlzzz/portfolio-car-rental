import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
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
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [parentAnimate] = useAutoAnimate();

  const handleMobileMenuClick = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  const mobileMenuIconPath: string = toggleMobileMenu
    ? "M18 6 6 18 M6 6 18 18"
    : "M4 6h16M4 12h16M4 18h16";

  return (
    <>
      {/* Header hack - set max-width first then mx-auto, set height using padding */}
      <header
        ref={parentAnimate}
        className="mx-auto w-full max-w-7xl border border-b-black px-4 py-6"
      >
        {/* Desktop navbar */}
        <div className="flex items-center justify-between">
          <nav>
            <NavLink to="/">Logo</NavLink>
          </nav>
          <nav className="hidden lg:flex [&>span:not(:first-child)]:ml-2">
            <span>
              <NavLink to="/" className={activeLinkCallback}>
                Home
              </NavLink>
            </span>
            <span>
              <NavLink to="/about" className={activeLinkCallback}>
                About
              </NavLink>
            </span>
            <span>
              <NavLink to="/contact" className={activeLinkCallback}>
                Contact
              </NavLink>
            </span>
          </nav>
          <nav className="hidden lg:flex [&>span:not(:first-child)]:ml-2">
            <span>
              <NavLink to="/login">Log In</NavLink>
            </span>
            <span>
              <NavLink to="/register">Register</NavLink>
            </span>
          </nav>
          {/* Mobile navbar menu button */}
          <div className="lg:hidden">
            <button onClick={handleMobileMenuClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={mobileMenuIconPath} />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile navbar */}
        {toggleMobileMenu ? (
          <div className="flex flex-col p-1 text-right lg:hidden [&>*]:py-1">
            <NavLink
              to="/"
              className={activeLinkCallback}
              onClick={handleMobileMenuClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={activeLinkCallback}
              onClick={handleMobileMenuClick}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={activeLinkCallback}
              onClick={handleMobileMenuClick}
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={activeLinkCallback}
              onClick={handleMobileMenuClick}
            >
              Log In
            </NavLink>
            <NavLink
              to="/register"
              className={activeLinkCallback}
              onClick={handleMobileMenuClick}
            >
              Register
            </NavLink>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
