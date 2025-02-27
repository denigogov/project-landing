import "./_formInput.scss";
import Button from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
// import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { FormTypes } from "../../block/Form/form.types";

export type Inputs = {
  fullname: string;
  email: string;
  phoneNumber: string;
  formMessage: string;
  privacyPolicy: boolean;
};

interface FormInputProps {
  inputData: FormTypes;
}

const FormInput: React.FC<FormInputProps> = ({ inputData }) => {
  // const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const inputLabelData = inputData?.formInputs;

  const {
    register,
    handleSubmit,
    watch,
    // reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      fullname: "",
      phoneNumber: "",
      formMessage: "",
      privacyPolicy: false,
    },
  });

  // const [recaptchaLoaded, setRecaptchaLoaded] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="formInput">
      <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <input
            {...register("fullname", {
              required: inputLabelData?.fullName?.required,
              maxLength: {
                value: 30,
                message: inputLabelData?.fullName?.maxLength ?? "",
              },
              minLength: {
                value: 4,
                message: inputLabelData?.fullName?.minLength ?? "",
              },
            })}
            type="text"
            className={`input-field ${watch("fullname") ? "form__valid" : ""}`}
          />
          <label className="input-label">
            {inputLabelData?.fullName?.label}
          </label>
        </div>
        {errors.fullname && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.fullname?.message}
          </p>
        )}
        <div className="input">
          <input
            {...register("email", {
              required: inputLabelData?.email?.required,

              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: inputLabelData?.email?.pattern ?? "",
              },
              maxLength: {
                value: 50,
                message: inputLabelData?.email?.maxLength ?? "",
              },
              minLength: {
                value: 5,
                message: inputLabelData?.email?.minLength ?? "",
              },
            })}
            type="text"
            className={`input-field ${watch("email") ? "form__valid" : ""}`}
          />
          <label className="input-label">{inputLabelData?.email?.label}</label>
        </div>
        {errors.email && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.email?.message}
          </p>
        )}
        <div className="input">
          <input
            {...register("phoneNumber", {
              maxLength: {
                value: 15,
                message: inputLabelData?.phoneNumber?.maxLength ?? "",
              },
              minLength: {
                value: 7,
                message: inputLabelData?.phoneNumber?.minLength ?? "",
              },
              pattern: {
                value: /^[+]?[0-9]{7,15}$/,
                message: inputLabelData?.phoneNumber?.pattern ?? "",
              },
            })}
            type="tel"
            className={`input-field ${
              watch("phoneNumber") ? "form__valid" : ""
            }`}
          />
          <label className="input-label">
            {inputLabelData?.phoneNumber.label}
          </label>
        </div>
        {errors.phoneNumber && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.phoneNumber.message}
          </p>
        )}
        <div className="input">
          <textarea
            {...register("formMessage", {
              required: inputLabelData?.formMessage?.required,
              maxLength: {
                value: 1000,
                message: inputLabelData?.formMessage?.maxLength ?? "",
              },
              minLength: {
                value: 20,
                message: inputLabelData?.formMessage?.minLength ?? "",
              },
            })}
            className={`input-field ${
              watch("formMessage") ? "form__valid" : ""
            }`}
          />
          <label className="input-label">
            {inputLabelData?.formMessage?.label}
          </label>
        </div>
        {errors.formMessage && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.formMessage.message}
          </p>
        )}
        {/* Checkbox  */}
        <div className="uk-padding-small uk-padding-remove-left">
          <div className="uk-flex" style={{ gap: "10px" }}>
            <input
              {...register("privacyPolicy", {
                required: inputLabelData?.privacyPolicy?.required,
              })}
              type="checkbox"
            />

            {/* checkbox text */}
            <p className="uk-text-meta">
              {inputLabelData?.privacyPolicy?.text?.first}{" "}
              <a
                target="_blank"
                href={inputLabelData?.privacyPolicy?.text?.link}
                className="uk-text-primary"
              >
                {inputLabelData?.privacyPolicy?.text?.highlight}{" "}
              </a>
              {inputLabelData?.privacyPolicy?.text?.textRest}
            </p>
          </div>
          {errors.privacyPolicy && (
            <p className="form__input-error uk-text-meta uk-text-danger">
              {errors?.privacyPolicy?.message}
            </p>
          )}
        </div>
        <div>
          <Button
            label={inputLabelData.submitButton?.label}
            type={inputLabelData.submitButton?.type}
            size={inputLabelData.submitButton?.size}
            className={inputLabelData.submitButton?.className}
          />
        </div>
        <br />
        <div>
          <p className="uk-text-meta uk-text-break">
            Diese Website ist durch reCAPTCHA geschützt und es gelten die{" "}
            <a
              className="uk-text-primary"
              target="_blank"
              href="https://policies.google.com/privacy"
            >
              Datenschutzbestimmungen
            </a>{" "}
            und{" "}
            <a
              className="uk-text-primary"
              target="_blank"
              href="https://policies.google.com/terms"
            >
              Nutzungsbedingungen
            </a>{" "}
            von Google.
          </p>
        </div>{" "}
      </form>
    </div>
  );
};

export default FormInput;
