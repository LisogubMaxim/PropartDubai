import { useParams } from "react-router-dom";
import AreaProperties from "../components/area/AreaProperties/AreaProperties";

const AreaPropertiesPage = () => {
  const { id } = useParams();
  return (
    <>
      <AreaProperties areaTitle={id} />
    </>
  );
};

export default AreaPropertiesPage;
