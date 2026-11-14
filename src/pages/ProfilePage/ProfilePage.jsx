import "./ProfilePage.css";
import Header from "./profilePageComponents/Header";
import MarketSize from "./profilePageComponents/MarketSize";
import RecentProjects from "./profilePageComponents/RecentProjects";
import Team from "./profilePageComponents/Team";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <RecentProjects />
      <MarketSize />
      <Team />
    </>
  );
};

export default ProfilePage;
