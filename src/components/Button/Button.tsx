import "./_button.scss";
import { ButtonTypes } from "./button.types";
import spinner from "../../assets/icons/spinner.svg";

const Button: React.FC<ButtonTypes> = ({
  label,
  size,
  type,
  className,
  onClick,
  blank,
  href,
  disabled,
  loading,
}) => {
  return (
    <div className="button">
      {label && (
        <a href={href ?? ""} target={blank ? "_blank" : "_parent"}>
          <button
            disabled={disabled || loading ? true : false}
            className={` ${className} uk-button  uk-button-${
              size ?? ""
            } uk-button-${type ?? "default"}`}
            onClick={onClick}
          >
            {loading ? (
              <img className="button__spinner" src={spinner} alt="spinner" />
            ) : (
              label ?? ""
            )}
          </button>
        </a>
      )}
    </div>
  );
};

export default Button;
