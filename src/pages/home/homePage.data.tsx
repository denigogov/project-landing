import { BenifitsType } from "../../block/benifits/benifits.types";
import { StageTypes } from "../../block/stage/stage.types";
import icon1 from "../../assets/icons/agriculture-eco-farm-svgrepo-com.svg";
import icon2 from "../../assets/icons/bulb-electric-energy-svgrepo-com.svg";
import icon3 from "../../assets/icons/ecology-environment-nature-svgrepo-com.svg";
import stepIcon1 from "../../assets/icons/contactIcon.svg";
import stepIcon2 from "../../assets/icons/6283163.webp";

import about_3 from "../../assets/about-us-.webp";
import about_2 from "../../assets/New Project.webp";
import about_1 from "../../assets/about-us_1.webp";
import aboutVideoTest from "../../assets/icons/wineYardTestVideo.mp4";

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
  stageTitle: "Maximale Effizienz für Weinbau und Agrarbetriebe",
  stageSubTitle:
    "Präzise Drohnentechnologie für eine nachhaltige Pflanzenschutzlösung – weniger Pestizide, höhere Erträge, reduzierte Kosten.",
  button: [
    {
      label: "Jetzt kostenlose Beratung sichern",
      size: "large",
      type: "tertiary",
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

  video: aboutVideoTest,
};

const benifitsData: BenifitsType = {
  title: "Ihre Vorteile mit unserer Drohnentechnologie",
  subTitle:
    "Mehr Ertrag, weniger Aufwand – nachhaltige Landwirtschaft mit intelligenter Technologie.",

  card: [
    {
      icon: {
        name: icon1,
        alt: "Ernteoptimierung",
      },
      title: "Ertrag steigern",
      text: "Bis zu 20 % höhere Ernteerträge durch präzise Drohnenanalyse und gezielte Applikation von Pflanzenschutzmitteln.",
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
        alt: "Kostenreduzierung",
      },
      title: "Kosten Senken",
      text: "Reduzieren Sie den Verbrauch von Pflanzenschutzmitteln und Wasser um bis zu 30 % dank präziser Drohnentechnologie",
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
        alt: "Zeitersparnis",
      },
      title: "Zeit Sparen",
      text: "Drohnen ermöglichen Inspektionen in wenigen Stunden anstatt Tagen, sodass Sie schneller auf Veränderungen reagieren können.",
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
      title: "Kontaktieren",
      subTitle:
        "Melden Sie sich an und profitieren Sie von unserer innovativen Drohnentechnologie.",
      image: {
        url: stepIcon1,
        alt: "Registrierungssymbol",
      },
    },
    {
      title: "Pflanzenschutz mit Drohnen",
      subTitle:
        "Definieren Sie Ihre Anforderungen und lassen Sie unsere Drohnen die Arbeit erledigen.",
      image: {
        url: stepIcon2,
        alt: "Sprüh-Symbol",
      },
    },
    {
      title: "Ergebnisse in Echtzeit",
      subTitle:
        "Erhalten Sie detaillierte Analysen und Berichte zur Optimierung Ihrer Landwirtschaft",
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
