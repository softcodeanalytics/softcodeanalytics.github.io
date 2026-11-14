import perform from "../../../assets/Home-Page-Assets/peformance-icon.png";
import clock from "../../../assets/Home-Page-Assets/clock-icon.png";
import report from "../../../assets/Home-Page-Assets/report-icon.png";

const iconBoxes = [
  {
    id: 1,
    icon: perform,
    title: "Performance",
    content:
      "Your benefit and output is an operational dashboard to inform you of the progress of your work.",
  },
  {
    id: 2,
    icon: clock,
    title: "Stay Informed",
    content:
      "Stay informed with round the clock info-graphics to communicate findings.",
  },
  {
    id: 3,
    icon: report,
    title: "Report",
    content:
      "Insightful reports providing clear understanding of the problem's scope, nature, and actionable solutions.",
  },
];

const Features = () => {
  return (
    <div className="features-section">
      <div className="container">
        <div className="feature-header">
          <div className="feat-heads">
            <h5>Features We Offer</h5>
            <h2>Super Powers that make us out of this world!</h2>
          </div>
          <p>
            Unlock the full potential of your data with our cutting-edge
            analytics services. From geo-spatial technologies to statistical
            data analysis, we provide tailored solutions to drive your business
            forward.
          </p>
        </div>
        <div className="feature-boxes">
          {iconBoxes.map((iconBox) => (
            <div key={iconBox.id} className="feature-box">
              <img src={iconBox.icon} alt="" />
              <h4>{iconBox.title}</h4>
              <p>{iconBox.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
