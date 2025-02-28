import React from "react";
import Card from "../../components/Card/Card";
import "./_benifits.styles.scss";
import { BenifitsType } from "./benifits.types";

interface BenifitsProps {
  benifitsData: BenifitsType;
}

const Benifits: React.FC<BenifitsProps> = ({ benifitsData }) => {
  return (
    <section className="benefits uk-section ">
      <div className="uk-container">
        <div className="benefits__text uk-text-center">
          <p className="benefits__text-badge">Innovative Farming</p>
          {benifitsData?.title && (
            <h2 className="benefits__title">{benifitsData?.title}</h2>
          )}

          {benifitsData?.subTitle && (
            <p className="benefits__subtitle">{benifitsData?.subTitle}</p>
          )}
        </div>
        {benifitsData?.card?.length && (
          <div
            className="uk-grid uk-grid-divider uk-child-width-1-3@m uk-text-center "
            data-uk-grid
            uk-grid="true"
            uk-scrollspy="cls: uk-animation-fade; target: .card;  repeat: false"
          >
            {benifitsData?.card?.map((item, i) => (
              <Card
                key={i}
                text={item.text}
                title={item.title}
                button={item.button}
                icon={item.icon}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Benifits;
