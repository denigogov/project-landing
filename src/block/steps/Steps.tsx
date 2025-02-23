import "./_steps.styles.scss";
import Step from "../../components/Step/Step";
import { StepsTypes } from "./steps.types";

const Steps: React.FC<StepsTypes> = ({ stepData }) => {
  return (
    <div className="steps">{stepData && <Step stepData={stepData} />}</div>
  );
};

export default Steps;
