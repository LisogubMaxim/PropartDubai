import { useParams } from "react-router-dom";
import ProjectProperty from "../components/ProjectProperty/ProjectProperty";

const ProjectPropertyPage = () => {
  const { id } = useParams();
  return <ProjectProperty projectId={id} />;
};

export default ProjectPropertyPage;
