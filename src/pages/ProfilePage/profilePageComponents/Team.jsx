import ceo1 from "../../../assets/Profile-Page-Assets/images/image1.png";
import ceo2 from "../../../assets/Profile-Page-Assets/images/image2.png";
import ceo3 from "../../../assets/Profile-Page-Assets/images/image3.png";
import ceo4 from "../../../assets/Profile-Page-Assets/images/image4.png";
import ceo5 from "../../../assets/Profile-Page-Assets/images/image5.png";
import ceo6 from "../../../assets/Profile-Page-Assets/images/image6.png";
import ceo7 from "../../../assets/Profile-Page-Assets/images/image7.png";
import ceo8 from "../../../assets/Profile-Page-Assets/images/image8.png";
import ceo9 from "../../../assets/Profile-Page-Assets/images/image9.jpg";
import ceo10 from "../../../assets/Profile-Page-Assets/images/image10.png";
import ceo11 from "../../../assets/Profile-Page-Assets/images/image11.png";

const teams = [
  {
    id: 1,
    image: ceo2,
    title: "M&E Specialist",
    name: "Aliyu Aminu Ahmed",
    experience:
      "With over 10 years experience in Monitoring & Evaluation and Data Quality Control",
  },
  {
    id: 2,
    image: ceo1,
    title: "Big Data Specialist",
    name: "Dr. Collins Opiyo",
    experience:
      "With over 25 years experience in generation and utilization of largescale statistical data and big data Analysis",
  },
  {
    id: 3,
    image: ceo4,
    title: "Population and Climate Specialist",
    name: "Hajia Aisha Abdulazeez Adamu",
    experience:
      "With over 25 years experience in Population and Climate change",
  },
  {
    id: 4,
    image: ceo3,
    title: "Demography Researcher",
    name: "Kolapo Usman",
    experience:
      "With over 30 years experience in Research, sampling Techniques and Big data Analysis",
  },
  {
    id: 5,
    image: ceo6,
    title: "GIS Specialist",
    name: "Prince Ogunsina Ayo",
    experience:
      "With over 30 years experience in Geospatial Technologies and Analysis",
  },
];

const teams2 = [
  {
    id: 1,
    image: ceo11,
    title: "Chief Administrative Officer",
    name: "Benjamin Adeoye",
  },
  {
    id: 2,
    image: ceo8,
    title: "Chief Technical Officer",
    name: "Emeka Ohiri",
  },
  {
    id: 3,
    image: ceo5,
    title: "Chief Operations Officer",
    name: "Ezra Adegboye",
  },
  {
    id: 4,
    image: ceo9,
    title: "Chief Analyst",
    name: "Funmito Odefemi",
  },
  {
    id: 5,
    image: ceo10,
    title: "Head, Innovation and Strategy",
    name: "Olayinka Oke",
  },
  {
    id: 6,
    image: ceo7,
    title: "Lead Research Analyst",
    name: "Tobiloba Makinwa",
  },
];

const Team = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="team-header">
          <h5>Meet Our Leadership Team</h5>
          <h2>Softcode Analytics Limited Advisory Board</h2>
        </div>
        <div className="team-images">
          {teams.map((team) => (
            <div key={team.id} className="team-image-box">
              <img src={team.image} alt="" />
              <div className="team-text">
                <h5>{team.title}</h5>
                <h4>{team.name}</h4>
                <p>{team.experience}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team-header">
          <h5>Meet Our Team</h5>
          <h2>The SCA Core Technical Team</h2>
        </div>
        <div className="team-images">
          {teams2.map((team2) => (
            <div key={team2.id} className="team-image-box">
              <img src={team2.image} alt="" />
              <div className="team-text">
                <h5>{team2.title}</h5>
                <h4>{team2.name}</h4>
                <p>{team2.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
