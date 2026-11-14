import { GrSend } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
// import { SiGoogleforms } from "react-icons/si";
import { PiChatsFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidPhone } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import Button from "../../../components/Buttons/Button";

const Contact = () => {
  return (
    <div id="contact-us" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="contact-heads">
            <h5>Contact Us</h5>
            <h2>Feel free to reach out to us.</h2>
          </div>
        </div>
        <div className="contact-cards">
          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <GrSend />
            </div>
            <div className="contact-content">
              <h4>Message us via mail</h4>
              <p>
                For more info or to request ou servics. Reach us at <br />{" "}
                info@softcodeanalytics.com
              </p>
            </div>
            <div className="contact-buttons">
              <Button
                text="Email us"
                icon={<MdEmail />}
                onClick={() =>
                  (window.location = "mailto:info@softcodeanalytics.com")
                }
              />
              {/* <Button
                text="Request Form"
                icon={<SiGoogleforms />}
                onClick={() => (window.location = "tel:+2348136809580")}
              /> */}
            </div>
          </div>
          
          {/* Chat Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <PiChatsFill />
            </div>
            <div className="contact-content">
              <h4>Speak to Us</h4>
              <p>
                Send us a message on WhatsApp or give us a call. <br /> We would
                be glad to hear from you
              </p>
            </div>
            <div className="contact-buttons">
              <Button
                text="Text us"
                icon={<IoLogoWhatsapp />}
                page="https://wa.me/2348136809580"
                newTab={true}
              />
              <Button
                text="Call Us"
                icon={<BiSolidPhone />}
                onClick={() => (window.location = "tel:+2348136809580")}
              />
            </div>
          </div>

          {/* Address Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <HiMiniBuildingOffice2 />
            </div>
            <div className="contact-content">
              <h4>Swing by the Office</h4>
              <p>
                CE5 Apo Sparklight Plaza, opposite Living Faith Church, Durumi,
                Abuja. <br />
                9am - 4pm every Weekday.
              </p>
            </div>
            <div className="contact-buttons">
              <Button
                text="Visit Us"
                icon={<MdLocationPin />}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/CE5+Apo+Sparklight+Plaza,+Abuja,+Nigeria",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
