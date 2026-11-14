import { CgTerrain } from "react-icons/cg";
import { ImStatsBars2 } from "react-icons/im";
import { SiGoogleforms } from "react-icons/si";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { LiaCreativeCommonsRemix } from "react-icons/lia";
import { BsDatabaseFill } from "react-icons/bs";
import { GiInspiration } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";
import { MdOutlineInsights } from "react-icons/md";

const serviceBoxes = [
  {
    id: 1,
    title: "Geo-spatial Technologies and Statistical Information",
    content:
      "We integrate geo-spatial technologies with statistical data to visualize trends and patterns, enhancing predictive models and decision-making.",
    icon: <CgTerrain />,
  },
  {
    id: 2,
    title: "Statistical Data Analytics",
    content:
      "We offer statistical data analytics to reveal trends and insights, tailored to your industry’s unique data requirements.",
    icon: <ImStatsBars2 />,
  },
  {
    id: 3,
    title: "Questionnaire and Sample Methodology",
    content:
      "We create statistically valid samples, design questionnaires, and develop tailored methodologies for precise and actionable data collection.",
    icon: <SiGoogleforms />,
  },
  {
    id: 4,
    title: "We Teach",
    content:
      "We teach businesses and individuals how to use data as a strategic asset to predict future outcomes and profitability.",
    icon: <PiChalkboardTeacherDuotone />,
  },
  {
    id: 5,
    title: "Creative Technologies",
    content:
      "We assist organizations in adopting creative technologies for more dynamic and efficient analytical frameworks and decision-making processes.",
    icon: <LiaCreativeCommonsRemix />,
  },
  {
    id: 6,
    title: "Database for Data Relevancy",
    content:
      "We help clients build and manage databases, demonstrating their importance in driving data-driven growth and revenue.",
    icon: <BsDatabaseFill />,
  },
  {
    id: 7,
    title: "We Inspire",
    content:
      "We help organizations refocus on core goals by managing data analysis, transforming it into a strategic advantage.",
    icon: <GiInspiration />,
  },
  {
    id: 8,
    title: "Flexibility and Control",
    content:
      "We provide clients with dashboards and infographics to communicate progress and insights, ensuring flexibility and control in operations.",
    icon: <GiFlexibleLamp />,
  },
  {
    id: 9,
    title: "Insights and Reports",
    content:
      "We generate insightful reports that clarify problems, identify trends, and provide recommendations for effective, data-driven solutions.",
    icon: <MdOutlineInsights />,
  },
];

const Services = () => {
  return (
    <div id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="service-heads">
            <h5>Our Services</h5>
            <h2>What We Offer</h2>
          </div>
          <p>
            Softcode Analytics Limited (SCA) is a Data Analytics Outsourcing and
            Consulting company that has all it takes to provide you a range of
            reliable and professional data analytical services.
          </p>
        </div>
        <div className="services-boxes">
          {serviceBoxes.map((serviceBox) => (
            <div key={serviceBox.id} className="services-box">
              <div className="service-content">
                <h4>{serviceBox.title}</h4>
                <p>{serviceBox.content}</p>
              </div>
              <div className="service-img">{serviceBox.icon}</div>
              {/* <img src={serviceBox.icon} alt="" className="service-img" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
