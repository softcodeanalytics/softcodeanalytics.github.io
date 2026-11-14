import "./Button.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Button = ({
  text,
  page,
  icon,
  type = "button",
  onClick,
  newTab = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const isHashLink = page && page.startsWith("#");

  return (
    <div className="main-button">
      {page ? (
        isHashLink ? (
          <HashLink to={page} smooth>
            <button type={type} onClick={handleClick}>
              {text} {icon}
            </button>
          </HashLink>
        ) : (
          <Link
            to={page}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : ""}
          >
            <button type={type} onClick={handleClick}>
              {text} {icon}
            </button>
          </Link>
        )
      ) : (
        <button type={type} onClick={handleClick}>
          {text} {icon}
        </button>
      )}
    </div>
  );
};

export default Button;
