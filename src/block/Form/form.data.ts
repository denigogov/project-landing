import { FormTypes } from "./form.types";

export const formData: FormTypes = {
  formText: {
    titleTop: "Optimieren Sie Ihr Projekt",
    titleBottom: "Mit Drohnentechnologie",
    copy: "Füllen Sie das Formular aus und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden. Lassen Sie uns gemeinsam herausfinden, wie unsere Drohnenlösungen Ihre Ernte verbessern können.",
  },

  formInputs: {
    fullName: {
      label: "Vollständiger Name",
      required: "Vollständiger Name ist erforderlich.",
      minLength: "Der vollständige Name sollte mindestens 4 Zeichen lang sein.",
      maxLength: "Der vollständige Name sollte 30 Zeichen nicht überschreiten.",
    },

    email: {
      label: "Email",
      required: "E-Mail ist erforderlich.",
      minLength: "Die E-Mail sollte mindestens 5 Zeichen lang sein.",
      maxLength: "Die E-Mail sollte 50 Zeichen nicht überschreiten.",
      pattern: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    },

    phoneNumber: {
      label: "Telefonnummer",
      minLength: "Die Telefonnummer sollte mindestens 7 Zeichen lang sein.",
      maxLength: "Die Telefonnummer sollte 15 Zeichen nicht überschreiten.",
      pattern:
        "Die Telefonnummer sollte nur Zahlen und optional ein '+' am Anfang enthalten.",
      // required: ""
    },

    formMessage: {
      label: "Ihre Nachricht",
      required: "Eine Nachricht ist erforderlich.",
      minLength: "Die Nachricht sollte mindestens 20 Zeichen lang sein.",
      maxLength: "Die Nachricht sollte 1000 Zeichen nicht überschreiten.",
    },

    privacyPolicy: {
      required: "Bitte bestätigen Sie dieses erforderliche Feld.",
      text: {
        first: "Ich stimme der",
        highlight: "Datenschutzrichtlinie",
        textRest:
          "zu und willige in die Verarbeitung meiner persönlichen Daten zu diesem Anfragezweck ein.",
        link: "https://www.saidgor.de/datenschutzerkarung-saidgor-drone-service/",
      },
    },

    submitButton: {
      label: "Jetzt Kontakt Aufnehmen",
      size: "medium",
      type: "primary",
      className: "uk-width-1-1",
    },

    reChapcta: {
      firstText:
        "Diese Website ist durch reCAPTCHA geschützt und es gelten die ",
      privacyLinkText: "Datenschutzbestimmungen",
      and: "und",
      secondLinkText: "Nutzungsbedingungen",
      endText: "von Google.",
    },
  },
};
