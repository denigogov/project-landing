import "./_steps.styles.scss";
import testIcon from "../../assets/icons/agriculture-eco-farm-svgrepo-com.svg";

interface StepsProps {
  stepsData?: any[];
}

const Steps: React.FC<StepsProps> = ({}) => {
  const stepsData = [
    {
      title: "Anmeldung",
      subTitle:
        "Registrieren Sie sich jetzt und nutzen Sie unsere Drohnendienste",
      img: testIcon,
      alt: "Registrierungssymbol",
    },
    {
      title: "Drohnen-Sprühen",
      subTitle: "Bestätigen Sie Ihre Anfrage für präzises Sprühen Ihrer Felder",
      img: testIcon,
      alt: "Sprüh-Symbol",
    },
    {
      title: "Ergebnisse",
      subTitle:
        "Erhalten Sie detaillierte Analysen und Ertragsberichte in Echtzeit",
      img: testIcon,
      alt: "Ergebnissymbol",
    },
  ];

  return (
    <div className="steps">
      <div className="container">
        <ul className="step-list">
          {stepsData?.map((text, i) => (
            <li className="step-list__item " key={i}>
              <div className="step-list__item__inner">
                <div className="content">
                  <div className="body">
                    <h2>{text.title}</h2>
                    <p>{text.subTitle}</p>
                  </div>

                  <div className="icon">
                    <img src={text.img} alt="Check" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Steps;
