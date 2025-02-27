import { FormFiledsTypes } from "../../components/FormInput/formInput.types";

type FormTextType = {
  titleTop: string;
  titleBottom: string;
  copy: string;
};

export interface FormTypes {
  formText: FormTextType;
  formInputs: FormFiledsTypes;
}
