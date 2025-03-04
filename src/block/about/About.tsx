import "./_about.styles.scss";
import Button from "../../components/Button/Button";
import { AboutTypes } from "./about.types";
import { useState } from "react";

interface AboutProps {
  aboutData: AboutTypes;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  const [toggleImage, setToggleImage] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleImage((a) => !a);
  };

  return (
    <section
      className="about uk-section"
      uk-scrollspy="cls:uk-animation-fade  target: .about;  repeat: false"
    >
      <div className="uk-container uk-container-large">
        <div
          className="uk-grid uk-child-width-1-2@m uk-flex-middle"
          data-uk-grid
        >
          <div>
            <div className="about__heading">
              {aboutData?.badge && (
                <p className="about__heading-badge">{aboutData?.badge}</p>
              )}
              {aboutData?.title && (
                <h1 className="about__heading-title">{aboutData?.title}</h1>
              )}

              {aboutData?.subTitle && (
                <p className="about__heading-subtitle">{aboutData?.subTitle}</p>
              )}
            </div>
            {aboutData?.copy && (
              <p className="about__copy">{aboutData?.copy}</p>
            )}
            <div className="about__button">
              {aboutData?.button && (
                <Button
                  label={aboutData?.button?.label}
                  type={aboutData?.button?.type}
                  blank={aboutData?.button?.blank}
                  className={aboutData?.button?.className}
                  href={aboutData?.button?.href}
                  onClick={aboutData?.button?.onClick}
                  size={aboutData?.button?.size}
                />
              )}{" "}
              <br />
              <Button
                label={!toggleImage ? "Bilder anzeigen" : "Video anzeigen"}
                type="link"
                size="small"
                onClick={handleToggle}
              />
            </div>{" "}
          </div>

          {aboutData?.images?.length && toggleImage && (
            <div
              className=" about__images "
              uk-scrollspy="cls: uk-animation-slide-bottom  target: .about__images; delay: 500"
            >
              {aboutData?.images?.map((img, i) => (
                <img
                  key={i}
                  src={img?.url}
                  alt={img?.alt}
                  className="about__images-image"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {aboutData?.video && !toggleImage && (
            <div
              className="about__video"
              uk-scrollspy="cls: uk-animation-slide-bottom  target: .about__images; delay: 500"
            >
              <video
                autoPlay
                muted
                loop
                src={aboutData?.video}
                about="landwirtchaft drone"
                uk-video="autoplay: inview"
              ></video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
