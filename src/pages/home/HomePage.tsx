import About from "../../block/about/About";
import { AboutTypes } from "../../block/about/about.types";
import Benifits from "../../block/benifits/Benifits";
import { BenifitsType } from "../../block/benifits/benifits.types";
import Footer from "../../block/footer/Footer";
import { FooterTypes } from "../../block/footer/footer.types";
import Form from "../../block/Form/Form";
import Stage from "../../block/stage/Stage";
import { StageTypes } from "../../block/stage/stage.types";
import Steps from "../../block/steps/Steps";
import { StepsTypes } from "../../block/steps/steps.types";
import { homePageData } from "./homePage.data";

const HomePage: React.FC = () => {
  const stageData: StageTypes = homePageData?.stage;
  const benifitsData: BenifitsType = homePageData?.benifits;
  const stepsData: StepsTypes = homePageData?.steps;
  const aboutData: AboutTypes = homePageData?.about;
  const footerData: FooterTypes = homePageData?.footer;

  return (
    <div>
      <Stage stageData={stageData} />
      <Benifits benifitsData={benifitsData} />
      <About aboutData={aboutData} />
      <Steps stepData={stepsData?.stepData} />
      <Form />
      <Footer
        companyData={footerData.companyData}
        footerNav={footerData.footerNav}
        socialNetwork={footerData.socialNetwork}
      />
    </div>
  );
};

export default HomePage;
