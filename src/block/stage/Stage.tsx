import Button from "../../components/Button/Button";
import "./stage.styles.scss";
import { StageTypes } from "./stage.types";

interface StageProps {
  stageData: StageTypes;
}

const Stage: React.FC<StageProps> = ({ stageData }) => {
  const buttonData = stageData?.button ?? [];

  return (
    <header>
      <div className="b-stage">
        <div className="uk-width-1-2@s ">
          <div className="b-stage-text uk-width-1-2@l">
            {stageData?.stageTitle && (
              <h1 className="b-stage-text__heading">{stageData?.stageTitle}</h1>
            )}
            {stageData?.stageSubTitle && (
              <p className="uk-text-lead ">{stageData?.stageSubTitle}</p>
            )}
          </div>

          {buttonData &&
            buttonData?.map((property, i) => (
              <div key={i}>
                <Button
                  label={property?.label}
                  size={property?.size}
                  type={property.type}
                  className="b-stage__button"
                  href={property?.href}
                  blank={property.blank}
                />
              </div>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Stage;
