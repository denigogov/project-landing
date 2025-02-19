import { ButtonTypes } from "../../components/Button/button.types";

//  example types
type Image = {
  src: string;
  alt: string;
  sizes: string[];
};

export interface StageTypes {
  image?: Partial<Image>[];
  button?: ButtonTypes[];
  button1?: ButtonTypes[];
  button2?: ButtonTypes[];
  button3?: ButtonTypes[];
}
