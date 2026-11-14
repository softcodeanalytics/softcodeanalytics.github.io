import Button from "../../components/Buttons/Button";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page-section">
      <div className="container">
        <h2>404: Not Found</h2>
        <h4>
          Oops... Wrong Page. Not to Worry Click the button below to go to Home
        </h4>
        <Button text="Home" page="/" />
      </div>
    </div>
  );
};

export default ErrorPage;
