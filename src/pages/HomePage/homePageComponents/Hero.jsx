import { useRef } from "react";
import analytics from "../../../assets/Home-Page-Assets/main-screen.png";
import Button from "../../../components/Buttons/Button";

const Hero = () => {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;

    img.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) translateZ(-10px)`;
  };

  const resetAnimation = () => {
    const img = imgRef.current;
    img.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-left">
          <h1>
            <span>Maximize the Potential of</span> Your Data
          </h1>
          <p>
            With data at your fingertips, unlock insights that drive growth for
            you, your business, and your customers. Let Softcode Analytics
            handle your data projects—we’re up to the task. Call us now, and see
            the difference!
          </p>
          <Button text="Book a Consultation" page="#contact-us" />
        </div>
        <div
          className="hero-right"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetAnimation}
        >
          <img
            ref={imgRef}
            src={analytics}
            alt="Analytics Dashboard"
            className="main-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
