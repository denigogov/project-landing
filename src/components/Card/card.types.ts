import { ButtonTypes } from "../Button/button.types";

export interface CardTypes {
  button?: ButtonTypes;
  icon?: {
    name: string;
    alt?: string;
    color?: string;
  };
  title?: string;
  text?: string;
}
