import { StageTypes } from "../../block/stage/stage.types";

interface HomepageTypes {
  stage: StageTypes;
}

export const homePageData: HomepageTypes = {
  stage: {
    button: [
      {
        label: "Kontakt",
        size: "large",
        type: "primary",
      },
    ],
  },
};
