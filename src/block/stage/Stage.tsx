import React from "react";
import Button from "../../components/Button/Button";
import { StageTypes } from "./stage.types";

interface StageProps {
  stageData: StageTypes;
}

const Stage: React.FC<StageProps> = ({ stageData }) => {
  const buttons = stageData?.button ?? [];
  const button1 = stageData?.button1;
  const button2 = stageData?.button2;
  const button3 = stageData?.button3;

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div>
        {buttons?.map((property, i) => (
          <React.Fragment key={i}>
            {" "}
            <br />
            <Button
              key={i}
              label={property?.label}
              type={property.type}
              size="large"
            />
          </React.Fragment>
        ))}
      </div>

      {button3 && (
        <div>
          {button3?.map((property, i) => (
            <React.Fragment key={i}>
              <br />
              <Button
                key={i}
                label={property?.label}
                type={property.type}
                size="large"
              />
            </React.Fragment>
          ))}
        </div>
      )}

      <div>
        {button1?.map((property, i) => (
          <React.Fragment key={i}>
            {" "}
            <br />
            <Button
              key={i}
              label={property?.label}
              type={property.type}
              size="large"
            />
          </React.Fragment>
        ))}
      </div>

      {button2 && (
        <div>
          {button2?.map((property, i) => (
            <React.Fragment key={i}>
              {" "}
              <br />
              <Button
                key={i}
                label={property?.label}
                type={property.type}
                size="large"
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stage;
