import Stage from "../../block/stage/Stage";
import { StageTypes } from "../../block/stage/stage.types";
import { homePageData } from "./homePage.data";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const stageData: StageTypes = homePageData?.stage;

  return (
    <div>
      <Stage stageData={stageData} />
    </div>
  );
};

export default HomePage;
