import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";
import Button from "../common/Button";

const Navbar = () => {
  const navs = [
    { menu: "Services", scrollLink: "home", link: "" },
    { menu: "Clients", scrollLink: "", link: "" },
    { menu: "Testimonials", scrollLink: "", link: "" },
    { menu: "How we work", scrollLink: "", link: "" },
    { menu: "Case Studies", scrollLink: "", link: "" },
    { menu: "Team", scrollLink: "", link: "" },
  ];

  const [navbarOpen] = useNav(false);
  const location = useLocation();

  return (
    <>
      <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand pointer p-0">
            NFT.M
          </Link>
          <button
            className="navbar-toggler border-0 outline-none p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <NavbarToggler navbarOpen={navbarOpen} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
              {navs.map((nav, index) => (
                <li key={index} className="nav-item">
                  {location.pathname === "/" ? (
                    <ScrollLink
                      activeClass="active"
                      className="nav-link white px-0 py-2 pointer"
                      to={nav.scrollLink}
                      spy={true}
                    >
                      {nav.menu}
                    </ScrollLink>
                  ) : (
                    <Link
                      className={`nav-link white px-0 py-2 pointer ${
                        location.pathname === nav.link && "active"
                      }`}
                      to={nav.link}
                    >
                      {nav.menu}
                    </Link>
                  )}
                </li>
              ))}
              <li className="ms-lg-4">
                <Button text="Contact Us" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
