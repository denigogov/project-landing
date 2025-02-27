import FormInput from "../../components/FormInput/FormInput";
import { formData } from "./form.data";
import facebook from "../../assets/icons/facebook.svg";
import indeed from "../../assets/icons/indeed.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import "./_form.styles.scss";

// Add UIKit icons module

const Form: React.FC = () => {
  return (
    <div className="form">
      <div className="uk-section uk-container uk-container-large  ">
        <div className="uk-grid uk-child-width-1-2@m  " data-uk-grid="true">
          <div>
            <div>
              <h1 className="uk-heading-small@s  ">
                {formData?.formText?.titleTop && (
                  <span className="uk-heading-bullet">
                    {formData?.formText?.titleTop}
                  </span>
                )}
                <br />

                {formData?.formText?.titleBottom &&
                  formData?.formText?.titleBottom}
              </h1>
              {formData?.formText?.copy && (
                <p className="form__card-text uk-text-left">
                  {formData?.formText?.copy}
                </p>
              )}
            </div>

            <div
              className="uk-grid uk-child-width-1-4 uk-child-width-1-6@m uk-grid-small"
              data-uk-grid="true"
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                uk-tooltip="title: Visit Out Facebook Profile; delay: 400"
              >
                <img src={facebook} style={{ width: "40px" }} />
              </a>{" "}
              <a
                href="https://wa.me/+491638843357?text=Hallo!%20Ich%20habe%20eine%20Frage%20zu%20euren%20Drohnenservices."
                target="_blank"
                uk-tooltip="title: Quick Call over WhatsApp; delay: 400"
              >
                <img src={whatsapp} alt="" style={{ width: "36px" }} />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/said-gaaloul-379111308/"
                target="_blank"
                uk-tooltip="title: Vist our Indeed Profile; delay: 400"
              >
                <img src={indeed} alt="" style={{ width: "40px" }} />
              </a>
            </div>
          </div>

          <FormInput inputData={formData} />
        </div>
      </div>{" "}
    </div>
  );
};

export default Form;
