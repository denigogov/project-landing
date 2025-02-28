import FormInput from "../../components/FormInput/FormInput";
import { formData } from "./form.data";
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
          </div>

          <FormInput inputData={formData} />
        </div>
      </div>{" "}
    </div>
  );
};

export default Form;
