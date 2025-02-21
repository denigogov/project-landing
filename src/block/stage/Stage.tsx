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
            <h1 className="b-stage-text__heading">
              Innovationen für die moderne Landwirtschaft
            </h1>
            <p className="uk-text-lead ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              aliquid modi repudiandae sapiente totam quisquam?
            </p>
          </div>

          {buttonData &&
            buttonData?.map((property, i) => (
              <div key={i}>
                <Button
                  label={property?.label}
                  size={property?.size}
                  type={property.type}
                  className=" uk-width-1-4@m uk-width-1-2"
                />
              </div>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Stage;
