import "./_footer.styles.scss";
import { FooterTypes } from "./footer.types";

const Footer: React.FC<FooterTypes> = ({
  companyData,
  footerNav,
  socialNetwork,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer  uk-text-center "
      uk-scrollspy="cls: uk-animation-fade; target: .footer__wraper;  repeat: false"
    >
      <div className="uk-container footer__wraper">
        <nav>
          {footerNav?.length && (
            <ul className="uk-subnav uk-flex-center">
              {footerNav?.map((items, i) => (
                <li key={i}>
                  <a href={items?.href} target={items?.blank ? "_blank" : ""}>
                    {items?.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>

        <a
          href="#"
          uk-totop="true"
          uk-scrol="true"
          uk-tooltip="title: Scroll to top"
          className="scrollTop"
        ></a>

        {companyData?.length && (
          <div className="uk-margin footer__company ">
            {companyData?.map((item, i) => (
              <p key={i}>
                <span uk-icon={`icon: ${item?.icon ?? ""}`}></span>
                {item.label}
              </p>
            ))}
          </div>
        )}

        {socialNetwork?.length && (
          <div className="footer__socialNetwork">
            {socialNetwork?.map((items, i) => (
              <a
                key={i}
                href={items?.href}
                className="uk-icon-button "
                uk-icon={`icon: ${items?.name}; ratio: ${items?.size ?? "1"}`}
                target="_blank"
                uk-tooltip={items?.message ?? ""}
              ></a>
            ))}
          </div>
        )}

        <p className="uk-text-meta uk-margin-top">
          © {currentYear} SaidGor Drone Service UG Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
