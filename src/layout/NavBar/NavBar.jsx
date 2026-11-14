import React, { useEffect, useState } from "react";
import "../NavBar/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import OutsideClickHandler from "react-outside-click-handler";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Logo from "../../assets/SCA-Logo.png";
import phoneLogo from "../../assets/SCA-Logo-Phone.png";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  // GitHub Pages serves /our-profile as /our-profile/; ignore a trailing slash
  const pathname = location.pathname.replace(/\/+$/, "") || "/";

  // Scroll event handler function for the Home page
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setScrolled(scrollPosition > 750); // Example value, adjust as needed

    const aboutUsSection = document.getElementById("about-us");
    const servicesSection = document.getElementById("services");
    const contactUsSection = document.getElementById("contact-us");

    if (contactUsSection && scrollPosition >= contactUsSection.offsetTop) {
      setActiveSection("contact-us");
    } else if (servicesSection && scrollPosition >= servicesSection.offsetTop) {
      setActiveSection("services");
    } else if (aboutUsSection && scrollPosition >= aboutUsSection.offsetTop) {
      setActiveSection("about-us");
    } else {
      setActiveSection("home");
    }
  };

  // Manage scroll behavior based on the current page
  useEffect(() => {
    if (pathname === "/") {
      // Add scroll listener only on the home page
      window.addEventListener("scroll", handleScroll);
    } else {
      // Ensure no scroll listener is active when leaving home page
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Scroll to top when navigating to the profile page
  useEffect(() => {
    if (pathname === "/our-profile") {
      window.scrollTo(0, 0);
      setActiveSection("our-profile");
    } else if (pathname === "/") {
      setActiveSection("home");
    }
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setActiveSection("home");
  };

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { top: !menuOpened && "-500px" };
    }
  };

  // Handle hashlink clicks for home page sections
  const handleHashLinkClick = (section) => {
    setMenuOpened(false);
    setActiveSection(section);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <div className="navbar-logo">
            <Link
              to="/"
              onClick={() => {
                scrollToTop();
              }}
            >
              {/* <img src={Logo} alt="SoftCode Logo" /> */}
              <img src={phoneLogo} alt="SoftCode Logo" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu">
          {menuOpened ? (
            <RiCloseFill onClick={() => setMenuOpened((prev) => !prev)} />
          ) : (
            <RiMenu3Fill onClick={() => setMenuOpened((prev) => !prev)} />
          )}
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="menu" style={getMenuStyle(menuOpened)}>
            <div className="menu-bg-overlay" />
            <div>
              <li
                className={`menu-list ${
                  activeSection === "home" ? "active" : ""
                }`}
              >
                <Link
                  to="/"
                  onClick={() => {
                    setMenuOpened(false);
                    scrollToTop();
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className={`menu-list ${
                  activeSection === "our-profile" ? "active" : ""
                }`}
              >
                <Link
                  to="/our-profile"
                  onClick={() => {
                    setMenuOpened(false);
                    setActiveSection("our-profile");
                    window.scrollTo(0, 0); // Scroll to top when clicking profile link
                  }}
                >
                  Our Profile
                </Link>
              </li>
              <li
                className={`menu-list ${
                  activeSection === "about-us" ? "active" : ""
                }`}
              >
                <HashLink
                  smooth
                  to="/#about-us"
                  scroll={(el) => {
                    const yOffset =
                      document.querySelector(".navbar").offsetHeight;
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y - 68, behavior: "smooth" });
                  }}
                  onClick={() => handleHashLinkClick("about-us")}
                >
                  About Us
                </HashLink>
              </li>
              <li
                className={`menu-list ${
                  activeSection === "services" ? "active" : ""
                }`}
              >
                <HashLink
                  smooth
                  to="/#services"
                  scroll={(el) => {
                    const yOffset =
                      document.querySelector(".navbar").offsetHeight;
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y - 68, behavior: "smooth" });
                  }}
                  onClick={() => handleHashLinkClick("services")}
                >
                  Services
                </HashLink>
              </li>
              <li
                className={`menu-list ${
                  activeSection === "contact-us" ? "active" : ""
                }`}
              >
                <HashLink
                  smooth
                  to="/#contact-us"
                  scroll={(el) => {
                    const yOffset =
                      document.querySelector(".navbar").offsetHeight;
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y - 68, behavior: "smooth" });
                  }}
                  onClick={() => handleHashLinkClick("contact-us")}
                >
                  Contact Us
                </HashLink>
              </li>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </nav>
  );
};

export default NavBar;
