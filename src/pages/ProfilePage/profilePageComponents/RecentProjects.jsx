import usAid from "../../../assets/Profile-Page-Assets/usaid-logo.png";
import tetFund from "../../../assets/Profile-Page-Assets/tetfund-logo.webp";
import nitda from "../../../assets/Profile-Page-Assets/nitda-logo.png";
import rmrdc from "../../../assets/Profile-Page-Assets/rmrdc-logo.gif";

import analyticsImg from "../../../assets/Profile-Page-Assets/analytics.jpg";

const projects = [
  {
    id: 1,
    logo: usAid,
    title: "ANALYSIS OF OVC STAKEHOLDERS ENGAGEMENT PROJECT ACTIVITY (2024)",
    content:
      "Softcode Analytics conducted a qualitative and thematic analysis of stakeholder perspectives and insights on the strategic initiative to design follow-on activities for the Orphans and Vulnerable Children (OVC) program, undertaken by the HIV/AIDS & TB (HAT) Office of the USAID Mission in Nigeria. The analysis was based on data collected through virtual Key Informant Interview (KII) sessions and Focus Group Discussions (FGDs) with various stakeholder groups",
    projectImage: analyticsImg,
  },
  {
    id: 2,
    logo: tetFund,
    title: "ANALYSIS OF TETFUND IMPACT ASSESSMENT PROJECT",
    content:
      "Softcode Analytics Limited also conducted the data analysis for the TETFUND Impact Evaluation Assessment Project in partnership with another consulting company. This project measured the impact of TETFUND's interventions in Nigeria’s public tertiary institutions.",
    projectImage: analyticsImg,
  },
  {
    id: 3,
    logo: nitda,
    title:
      "NGEA (NIGERIA GOVERNMENT ENTERPRISE ARCHITECTURE) PROJECT STRATEGIC ASSESMENT OF THE FEDERAL PUBLIC INSTITUTIONS SYSTEM, DIGITAL SERVICES AND CAPABILITIES",
    content:
      "Softcode Analytics designed the questionnaire & methodology and conducted a structured quantitative analysis of the Nigeria Government Enterprise Architecture (NGEA) project. The analysis included infographic illustrations and a dashboard for presentation to stakeholders. This strategic assessment evaluated the systems, digital services, and capabilities of federal public institutions to determine their readiness for implementing the Enterprise Architecture Framework across government institutions.",
    title2: "DEEP LEARNING AND EDA-BASED APPROACH FOR DETECTING FAKE NEWS",
    content2:
      "Softcode Analytics partnered with a researcher to conduct a qualitative analysis of a deep learning and exploratory data analysis (EDA)-based project for detecting fake news. We systematically analyzed large datasets, matching the scale and dynamics of social media, enabling the use of statistical and computational methods to identify patterns in misinformation.",
    projectImage: analyticsImg,
  },
  {
    id: 4,
    logo: rmrdc,
    title:
      "RAW MATERIALS RESEARCH AND DEVELOPMENT COUNCIL (RMRDC) STAFF AUDIT ANALYSIS",
    content:
      "Softcode Analytics partnered with LMU Infrastructure Co. Ltd. to conduct a thorough staff audit for the Raw Materials Research and Development Council. Our collaboration involved a detailed examination of the staff structure, performance metrics, and operational efficiencies. Softcode Analytics handled the data analysis, delivering a comprehensive analytical report that highlighted key insights and actionable recommendations. <br /> To ensure clarity and ease of understanding, we also created an engaging infographic that visually represented the audit findings. This project aimed to enhance organizational effectiveness and support strategic decision-making within the Council",
    projectImage: analyticsImg,
  },
];

const RecentProjects = () => {
  return (
    <div className="recent-projects-section">
      <div className="container">
        <div className="rp-header">
          <div className="rp-heads">
            <h5>Recent Projects</h5>
            <h2>Successful Project Implementations</h2>
          </div>
          <p>
            Softcode Analytics has worked with MDAs, research companies, NGOs,
            and various researchers. Our pool of data experts, who specialize in
            different sectors, along with our advisory board, is up to the task
            of addressing all our clients' data needs.
          </p>
        </div>
        <div className="rp-boxes">
          {projects.map((project) => (
            <div key={project.id} className="rp-box hover-effect">
              <div className="rp-logo">
                <img src={project.logo} alt="" />
              </div>
              <div className="rp-content">
                <div className="rp-text">
                  <h4>{project.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: project.content }}></p>

                  {project.title2 && <h4>{project.title2}</h4>}
                  {project.content2 && (
                    <p
                      dangerouslySetInnerHTML={{ __html: project.content2 }}
                    ></p>
                  )}
                </div>
                <img src={project.projectImage} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
