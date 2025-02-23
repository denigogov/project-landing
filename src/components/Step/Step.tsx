import { StepTypes } from "./step.types";
import "./_step.styles.scss";

interface StepProps {
  stepData: StepTypes[];
}

const Step: React.FC<StepProps> = ({ stepData }) => {
  return (
    <div className="step">
      <div className="container">
        <ul
          className="step-list"
          uk-scrollspy="cls: uk-animation-fade; target: .step-list__item;  repeat: false"
        >
          {stepData?.map((text, i) => (
            <li className="step-list__item " key={i}>
              <div className="step-list__item__inner">
                <div className="content">
                  <div className="body">
                    {text?.title && <h2>{text?.title}</h2>}
                    {text?.subTitle && <p>{text?.subTitle}</p>}
                  </div>

                  {text?.image && (
                    <div className="icon">
                      <img src={text?.image?.url} alt={text?.image?.alt} />
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Step;
