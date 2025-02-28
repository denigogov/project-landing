import { BenifitsType } from "../../block/benifits/benifits.types";
import { StageTypes } from "../../block/stage/stage.types";
import icon1 from "../../assets/icons/agriculture-eco-farm-svgrepo-com.svg";
import icon2 from "../../assets/icons/bulb-electric-energy-svgrepo-com.svg";
import icon3 from "../../assets/icons/ecology-environment-nature-svgrepo-com.svg";

import about_3 from "../../assets/about-us-.webp";
import about_2 from "../../assets/New Project.webp";
import about_1 from "../../assets/about-us_1.webp";
import { StepsTypes } from "../../block/steps/steps.types";
import { AboutTypes } from "../../block/about/about.types";
import { FooterTypes } from "../../block/footer/footer.types";

interface HomepageTypes {
  stage: StageTypes;
  benifits: BenifitsType;
  steps: StepsTypes;
  about: AboutTypes;
  footer: FooterTypes;
}

const stageData: StageTypes = {
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
};

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
      url: about_1,
      alt: "Image from someone test",
    },
    {
      url: about_2,
      alt: "Image From Drone Controll",
    },
  ],

  sliderImages: [
    {
      url: about_1,
      alt: "Image from someone test",
    },
    {
      url: about_3,
      alt: "Image From Drone Controll",
    },
  ],
};

const benifitsData: BenifitsType = {
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
};

const stepsData: StepsTypes = {
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
      subTitle: "Bestätigen Sie Ihre Anfrage für präzises Sprühen Ihrer Felder",
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
};

const footerData: FooterTypes = {
  companyData: [
    {
      label: "Gewerbepark Cité 4 76532 Baden-Baden Deutschland",
      icon: "location",
    },
    {
      label: "+49 0176 20187322",
      icon: "receiver",
    },
    {
      label: "info@saidgor.de",
      icon: "mail",
    },
  ],

  footerNav: [
    {
      label: "Über uns",
      blank: true,
      href: "https://www.saidgor.de/",
    },

    {
      label: "Leistungen",
      blank: true,
      href: "https://www.saidgor.de/",
    },
    {
      label: "Kontakt",
      blank: true,
      href: "https://www.saidgor.de/",
    },
    {
      label: "Impressum",
      blank: true,
      href: "https://www.saidgor.de/drohnendienstleister-karlsruhe-impressum/",
    },
    {
      label: "Datenschutzerkärung",
      blank: true,
      href: "https://www.saidgor.de/datenschutzerkarung-saidgor-drone-service/",
    },
  ],

  socialNetwork: [
    {
      name: "facebook",
      href: "https://facebook.com/",
      message: "Visit Our Facebook Page",
    },

    {
      name: "instagram",
      message: "Build in progress",
    },
    {
      name: "whatsapp",
      href: "https://wa.me/+491638843357?text=Hallo!%20Ich%20habe%20eine%20Frage%20zu%20euren%20Drohnenservices.",
      message: "Quick Message in WhatsApp",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/said-gaaloul-379111308/",
      message: "Checkout Out LinkedIn Profile",
    },
  ],
};

export const homePageData: HomepageTypes = {
  stage: {
    ...stageData,
  },

  benifits: {
    ...benifitsData,
  },

  about: aboutData,
  steps: {
    ...stepsData,
  },

  footer: {
    ...footerData,
  },
};
