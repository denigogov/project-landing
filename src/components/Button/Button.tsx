import "./_button.scss";
import { ButtonTypes } from "./button.types";

const Button: React.FC<ButtonTypes> = ({
  label,
  size,
  type,
  className,
  onClick,
  blank,
  href,
}) => {
  return (
    <div className="button">
      {label && (
        <a href={href ?? ""} target={blank ? "_blank" : "_parent"}>
          <button
            className={` ${className} uk-button  uk-button-${
              size ?? ""
            } uk-button-${type ?? "default"}`}
            onClick={onClick}
          >
            {label ?? ""}
          </button>
        </a>
      )}
    </div>
  );
};

export default Button;
