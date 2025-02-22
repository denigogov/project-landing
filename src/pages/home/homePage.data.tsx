import { BenifitsType } from "../../block/benifits/benifits.types";
import { StageTypes } from "../../block/stage/stage.types";
import icon1 from "../../assets/icons/agriculture-eco-farm-svgrepo-com.svg";
import icon2 from "../../assets/icons/bulb-electric-energy-svgrepo-com.svg";
import icon3 from "../../assets/icons/ecology-environment-nature-svgrepo-com.svg";

interface HomepageTypes {
  stage: StageTypes;
  benifits: BenifitsType;
}

export const homePageData: HomepageTypes = {
  stage: {
    stageTitle: "Innovationen für die moderne Landwirtschaft",
    stageSubTitle:
      " Steigern Sie Ihre Ernteerträge mit präziser Drohnentechnologie – weniger Pestizide, höhere Effizienz.",
    button: [
      {
        label: "Jetzt Beraten Lassen",
        size: "large",
        type: "primary",
        href: "https://www.saidgor.de/#!/Kontakt",
        blank: true,
      },
    ],
  },

  benifits: {
    title: "Why Choose Our Drone Technology?",
    subTitle:
      " Increase your efficiency, reduce costs, and improve sustainability with precision farming.",

    card: [
      {
        icon: {
          name: icon1,
          alt: "testIcon",
        },
        title: "Ernteerträge Steigern",
        text: "Steigern Sie Ihre Erträge um bis zu 20 % durch präzise Drohnen-Kartierung und Überwachung",
        button: {
          label: "Mehr erfahren",
          blank: true,
          type: "text",
          className: "benefits__button",
        },
      },

      {
        icon: {
          name: icon2,
          alt: "testIcon",
        },
        title: "Kosten Senken",
        text: "Sparen Sie bis zu 30 % bei Pestizid- und Wasserverbrauch durch präzises Sprühen mit Drohnen.",
        button: {
          label: "Mehr erfahren",
          blank: true,
          type: "text",
          className: "benefits__button",
        },
      },

      {
        icon: {
          name: icon3,
          alt: "testIcon",
        },
        title: "Zeit Sparen",
        text: "Inspektionen Ihrer Felder in Stunden statt Tagen mit automatisierter Drohnentechnologie durchführen.",
        button: {
          label: "Mehr erfahren",
          blank: true,
          type: "text",
          className: "benefits__button",
        },
      },
    ],
  },
};
