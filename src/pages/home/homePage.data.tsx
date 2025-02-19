import { StageTypes } from "../../block/stage/stage.types";

interface HomepageTypes {
  stage: StageTypes;
}

export const homePageData: HomepageTypes = {
  stage: {
    image: [{ src: "test", alt: "hohoho" }],

    button: [
      {
        label: "Default",
        type: "default",
      },
      {
        label: "Default",
        type: "primary",
      },
      {
        label: "Default",
        type: "secondary",
      },
      {
        label: "Default",
        type: "tertiary",
      },
    ],

    button1: [
      {
        label: "Secondary",
        type: "secondary",
      },
      {
        label: "Secondary",
        type: "tertiary",
      },
      {
        label: "Secondary",
        type: "default",
      },
      {
        label: "Secondary",
        type: "primary",
      },
    ],

    button2: [
      {
        label: "Tertiary",
        type: "tertiary",
      },
      {
        label: "Tertiary",
        type: "default",
      },
      {
        label: "Tertiary",
        type: "primary",
      },
      {
        label: "Tertiary",
        type: "secondary",
      },
    ],

    button3: [
      {
        label: "Primary",
        type: "primary",
      },
      {
        label: "Primary",
        type: "secondary",
      },
      {
        label: "Primary",
        type: "tertiary",
      },
      {
        label: "Primary",
        type: "default",
      },
    ],
  },
};
