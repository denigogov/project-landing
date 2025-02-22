import "./_card.styles.scss";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { CardTypes } from "./card.types";
import Button from "../Button/Button";

const Card: React.FC<CardTypes> = ({ button, text, title, icon }) => {
  UIkit.use(Icons);
  return (
    <article className="card">
      {icon && (
        <div
          className="card__icon-container"
          style={{ "--icon-color": icon?.color } as React.CSSProperties}
        >
          <img src={icon?.name} alt={icon?.alt} />
        </div>
      )}
      {title && <h3 className="card__heading">{title}</h3>}
      {text && <p className="card__text">{text}</p>}
      {button && (
        <Button
          label={button?.label}
          type={button?.type}
          blank={button?.blank}
          className={button?.className}
          href={button?.href}
          onClick={button?.onClick}
          size={button?.size}
        />
      )}
    </article>
  );
};

export default Card;
