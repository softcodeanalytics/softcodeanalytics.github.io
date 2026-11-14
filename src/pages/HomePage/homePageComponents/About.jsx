import aboutImg from "../../../assets/Home-Page-Assets/about-img.jpg";
import missionImg from "../../../assets/Home-Page-Assets/mission-img.jpg";
import visionImg from "../../../assets/Home-Page-Assets/vision-img.jpg";
import goalImg from "../../../assets/Home-Page-Assets/goal-img.jpg";

const infos = [
  {
    id: 1,
    image: missionImg,
    title: "Our Mission",
    content:
      "Softcode Analytics Limited (SCA) uses updated data innovations and statistical models to provide lasting analytic solutions powered by artificial intelligence in solving our client’s data related challenges within the given time frame and at affordable price.",
  },
  {
    id: 2,
    image: visionImg,
    title: "Our Vision",
    content:
      "Softcode Analytics Limited (SCA) seeks to create solutions, an environment and more opportunities to data experts and users by enabling and equipping them to build efficiency and get value out of data.",
  },
  {
    id: 3,
    image: goalImg,
    title: "Our Goal",
    content:
      "To solve all data related problems with right algorithms for optimized results.",
  },
];

const About = () => {
  return (
    <div id="about-us" className="about-section">
      <div className="container">
        <div className="about-header">
          <div className="about-heads">
            <h5>About Us</h5>
            <h2>Who We Are</h2>
          </div>
          <p>
            Softcode Analytics Limited (SCA) is a Data Analytics Outsourcing and
            Consulting company that has all it takes to provide you a range of
            reliable and professional data analytical services.
          </p>
        </div>
        <div className="about-content">
          <img src={aboutImg} alt="" className="about-img" />
          <div className="about-mvg">
            {infos.map((info) => (
              <div key={info.id} className="mvg-box hover-contain">
                <div className="mvg">
                  <h4>{info.title}</h4>
                  <p>{info.content}</p>
                </div>
                <img src={info.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
