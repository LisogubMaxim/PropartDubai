import { useParams } from "react-router-dom";
import AboutArea from "../components/area/AboutArea/AboutArea";

const AboutAreaPage = () => {
  const { id } = useParams("id");
  return <AboutArea areaTitle={id} />;
};

export default AboutAreaPage;
