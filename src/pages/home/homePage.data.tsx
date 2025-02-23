import { BenifitsType } from "../../block/benifits/benifits.types";
import { StageTypes } from "../../block/stage/stage.types";
import icon1 from "../../assets/icons/agriculture-eco-farm-svgrepo-com.svg";
import icon2 from "../../assets/icons/bulb-electric-energy-svgrepo-com.svg";
import icon3 from "../../assets/icons/ecology-environment-nature-svgrepo-com.svg";
import testImg from "../../assets/young-farmer-taking-care-his-business-1536x1032.png";
import { StepsTypes } from "../../block/steps/steps.types";
import { AboutTypes } from "../../block/about/about.types";

interface HomepageTypes {
  stage: StageTypes;
  benifits: BenifitsType;
  steps: StepsTypes;
  about: AboutTypes;
}

const aboutData: AboutTypes = {
  badge: "über uns",
  title: "Warum Uns Wählen?",
  subTitle: "Steigern Sie Ihre Effizienz mit unseren Drohnendiensten.",
  copy: "Als Ihr zuverlässiger Partner für Drohnentechnologie in der Landwirtschaft bieten wir spezialisierte Lösungen für Weinbauern in Rheinland-Pfalz und Baden-Württemberg. Unsere Sprühdrohnen ermöglichen präzise Schädlingsbekämpfung und Düngung, angepasst an die Bedürfnisse des Weinbaus. Mit innovativer Technologie reduzieren wir Kosten, minimieren Umweltbelastung und maximieren Ihre Erträge – nachhaltig und effizient.",
  button: {
    label: "Mehr Erfahren",
    blank: true,
    type: "tertiary",
    size: "large",
    href: "https://www.saidgor.de/#/%C3%9Cber-Uns",
  },
  images: [
    {
      url: testImg,
      alt: "Image from someone test",
    },
    {
      url: testImg,
      alt: "Image from someone test 123",
    },
  ],
};

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
        href: "https://www.saidgor.de/#/Kontakt",
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

  about: aboutData,
  steps: {
    stepData: [
      {
        title: "Anmeldung",
        subTitle:
          "Registrieren Sie sich jetzt und nutzen Sie unsere Drohnendienste",
        image: {
          url: icon1,
          alt: "Registrierungssymbol",
        },
      },
      {
        title: "Drohnen-Sprühen",
        subTitle:
          "Bestätigen Sie Ihre Anfrage für präzises Sprühen Ihrer Felder",
        image: {
          url: icon2,
          alt: "Sprüh-Symbol",
        },
      },
      {
        title: "Ergebnisse",
        subTitle:
          "Erhalten Sie detaillierte Analysen und Ertragsberichte in Echtzeit",
        image: {
          url: icon3,
          alt: "Ergebnissymbol",
        },
      },
    ],
  },
};
