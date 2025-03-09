import "./_about.styles.scss";
import Button from "../../components/Button/Button";
import { AboutTypes } from "./about.types";
import { useEffect, useRef, useState } from "react";
import playButton from "../../assets/icons/playButton.svg";

interface AboutProps {
  aboutData: AboutTypes;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  // const [toggleImage, setToggleImage] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setToggleImage((prev) => !prev);
  // };

  // Video Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasPlayedOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video
            .play()
            .catch((error) => console.error("Autoplay failed:", error));

          const timer = setTimeout(() => {
            video.pause();
            setIsPlaying(false);
            setHasPlayedOnce(true);
          }, 5000);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasPlayedOnce]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
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
              {/* <br />
              <Button
                label={!toggleImage ? "Bilder anzeigen" : "Video anzeigen"}
                type="link"
                size="small"
                onClick={handleToggle}
              /> */}
            </div>{" "}
          </div>

          {/* {aboutData?.images?.length && toggleImage && (
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
          )} */}

          {aboutData?.video && (
            <div className="about__video">
              <video
                ref={videoRef}
                controls={false}
                muted
                playsInline
                loop={isPlaying && true}
              >
                <source src={aboutData.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <span className="about__video-playButton">
                  <img
                    src={playButton}
                    alt="play-button"
                    onClick={handlePlay}
                  />
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
