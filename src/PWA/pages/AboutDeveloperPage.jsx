import { useParams } from "react-router-dom";
import AboutDeveloper from "../components/developer/AboutDeveloper/AboutDeveloper";

const AboutDeveloperPage = () => {
  const { id } = useParams("id");
  return <AboutDeveloper developerName={id} />;
};

export default AboutDeveloperPage;
