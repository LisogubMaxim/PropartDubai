import Map__MapPage from "./Sections/Map__MapPage";
import HeaderSecond from "../../components/HeaderSecond";
import { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../store/query/projectsAPI/projectsAPI";
export default function MapPage() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    document.title = "Map";
    window.scrollTo(0, 0);
  }, []);

  const [filterCriteria, setFilterCriteria] = useState({
    projectName: "",
    Type: "",
    Location: "",
    Size: {
      from: "",
      to: "",
    },
    Price: {
      from: "",
      to: "",
    },
  });

  const { data, isLoading, isError } = useGetProjectsQuery(
    `?nameStartsWith=${filterCriteria.projectName}&type=${filterCriteria.Type}&minSize=${filterCriteria.Size.from}&maxSize=${filterCriteria.Size.to}&minPrice=${filterCriteria.Price.from}&maxPrice=${filterCriteria.Price.to}&location=${filterCriteria.Location}`
  );

  return (
    <main className="mapPage">
      <div className={`mapPage__upper-header ${!showMenu ? "active" : ""}`}>
        <HeaderSecond />
      </div>
      {isError || isLoading ? (
        <div className="loaderProjects__wrapper map">
          <span className="loaderProjects"></span>
        </div>
      ) : (
        <Map__MapPage
          state={showMenu}
          handler={setShowMenu}
          filterCriteria={filterCriteria}
          setFilterCriteria={setFilterCriteria}
          data={data}
        />
      )}
    </main>
  );
}
