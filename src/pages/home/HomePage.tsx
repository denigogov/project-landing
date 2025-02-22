import Benifits from "../../block/benifits/Benifits";
import { BenifitsType } from "../../block/benifits/benifits.types";
import Stage from "../../block/stage/Stage";
import { StageTypes } from "../../block/stage/stage.types";
import { homePageData } from "./homePage.data";

const HomePage: React.FC = () => {
  const stageData: StageTypes = homePageData?.stage;
  const benifitsData: BenifitsType = homePageData?.benifits;

  return (
    <div>
      <Stage stageData={stageData} />
      <Benifits benifitsData={benifitsData} />
    </div>
  );
};

export default HomePage;
