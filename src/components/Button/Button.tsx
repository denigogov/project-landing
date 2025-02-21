import "./_button.scss";
import { ButtonTypes } from "./button.types";

const Button: React.FC<ButtonTypes> = ({
  label,
  size,
  type,
  className,
  onClick,
}) => {
  return (
    <div className="button">
      {label && (
        <button
          className={` ${className} uk-button  uk-button-${
            size ?? ""
          } uk-button-${type ?? "default"}`}
          onClick={onClick}
        >
          {label ?? ""}
        </button>
      )}
    </div>
  );
};

export default Button;
