import { useEffect, useState } from "react";
import "./Footer.css";
import { MdPhone } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Logo from "../../assets/SCA-Logo.png";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="container">
          <div className="footer-left">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <ul>
              <li
                onClick={() =>
                  (window.location = "mailto:info@softcodeanalytics.com")
                }
              >
                <span className="footer-icon">
                  <IoMdMailOpen />
                </span>
                <p>info@softcodeanalytics.com</p>
              </li>
              <li>
                <span className="footer-icon">
                  <MdPhone />
                </span>
                <a href="tel:+2348136809580">
                  <p>+234(0) 813 680 9580</p>
                </a>
              </li>
              <li>
                <span className="footer-icon">
                  <FaLocationDot />
                </span>
                <span>
                  CE5 Apo Sparklight Plaza, opposite Living Faith Church,
                  Durumi, Abuja (FCT) Nigeria.
                </span>
              </li>
              <li>
                <span className="footer-icon">
                  <MdPolicy />
                </span>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <span className="footer-icon">
                  <MdPolicy />
                </span>
                <a href="/">Terms of Service</a>
              </li>
              {/* <li>
                <Button text="Join Us" page="/" />
              </li> */}
            </ul>
          </div>
          <div className="footer-right">
            {/* <h5>Our Socials</h5> */}
            <div className="reach-out">
              <h5 htmlFor="Send-message">Our Socials</h5>
              {/* <p>
                Want to stay up to date on our constantly improving services and
                the best technical titbits for your information? <br /> Then,
                subscribe below:
              </p> */}
              {/* <div className="reach-out-box">
                <input
                  type="text"
                  id="Send-message"
                  name="Message"
                  placeholder="Send us a message"
                />
                <Button text="Subscribe" type="submit" />
              </div> */}
            </div>
            <div className="social-icons">
              <Link to="https://facebook.com/softcodeanalytics" target="_blank">
                <span className="social-icon">
                  <RiFacebookFill />
                </span>
              </Link>
              <Link to="https://instagram.com/SoftcodeA" target="_blank">
                <span className="social-icon">
                  <RiInstagramFill />
                </span>
              </Link>
              <Link to="https://twitter.com/SoftcodeA" target="_blank">
                <span className="social-icon">
                  <RiTwitterXFill />
                </span>
              </Link>
              <Link
                to="https://www.linkedin.com/company/softcodeanalytics"
                target="_blank"
              >
                <span className="social-icon">
                  <FaLinkedinIn />
                </span>
              </Link>
              <Link to="https://wa.me/2348136809580" target="_blank">
                <span className="social-icon">
                  <FaWhatsapp />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="container">
          <div className="f-copyright">
            <p>Copyright &copy; {year} Softcode Analytics Ltd.</p>
            <p>
              Dev & Designed by{" "}
              <Link to="https://israels-portfolio.vercel.app/">FIT-Tech</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
