import "./HomePage.css";
import About from "./homePageComponents/About";
import Contact from "./homePageComponents/Contact";
import Features from "./homePageComponents/Features";
import Hero from "./homePageComponents/Hero";
import Services from "./homePageComponents/Services";

function HomePage() {
  return (
    <div className="home-section">
      <Hero />
      <Features />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default HomePage;
