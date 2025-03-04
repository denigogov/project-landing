import { ButtonTypes } from "../../components/Button/button.types";

type Images = {
  alt?: string;
  url: string;
}[];

export interface AboutTypes {
  badge?: string;
  title?: string;
  subTitle?: string;
  copy?: string;
  button?: ButtonTypes;
  images?: Images;
  sliderImages?: Images;
  video?: string;
}
