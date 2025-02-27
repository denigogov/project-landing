import { ButtonTypes } from "../Button/button.types";

export interface FormInputTypes {
  label?: string;
  required?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
}

export interface FormFiledsTypes {
  fullName: FormInputTypes;
  email: FormInputTypes;
  phoneNumber: FormInputTypes;
  formMessage: FormInputTypes;
  privacyPolicy: {
    required?: string;
    text: {
      first?: string;
      highlight?: string;
      textRest?: string;
      link?: string;
    };
  };
  reChapcta: {
    firstText: string;
    privacyLinkText: string;
    and: string;
    secondLinkText: string;
    endText: string;
  };

  submitButton: ButtonTypes;
}
