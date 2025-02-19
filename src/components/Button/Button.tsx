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
    <div className={`${className ?? ""} button`}>
      {label && (
        <button
          className={` uk-button  uk-button-${size ?? ""} uk-button-${
            type ?? ""
          }`}
          onClick={onClick}
        >
          {label ?? ""}
        </button>
      )}
    </div>
  );
};

export default Button;
