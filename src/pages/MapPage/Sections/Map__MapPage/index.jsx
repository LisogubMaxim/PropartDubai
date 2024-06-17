import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import WidthContainer from "../../../../components/UI/WidthContainer";
import Select from "../../../../components/UI/Select";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/UI/Button";
import { useTranslation } from "react-i18next";
import "./Map__MainPage.scss";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function Map__MapPage({
  state,
  handler,
  filterCriteria,
  setFilterCriteria,
  data,
}) {
  const { t } = useTranslation();

  const map = useRef(null);
  const [lng, setLng] = useState(55.296249);
  const [lat, setLat] = useState(25.12);
  const [zoom, setZoom] = useState(10.2);
  const mapContainer = useRef(null);
  const navigate = useNavigate();

  const filteredData = data.filter((item) => {
    if (
      filterCriteria.projectName &&
      item.projectName &&
      !item.projectName
        .toLowerCase()
        .includes(filterCriteria.projectName.toLowerCase())
    ) {
      return false;
    }

    if (filterCriteria.Size.from && filterCriteria.Size.to) {
      const sizeFrom = parseInt(filterCriteria.Size.from);
      const sizeTo = parseInt(filterCriteria.Size.to);
      const itemSize = parseInt(item.sizeFrom);
      if (itemSize < sizeFrom || itemSize > sizeTo) {
        return false;
      }
    }

    if (filterCriteria.Price.from && filterCriteria.Price.to) {
      const priceFrom = parseInt(filterCriteria.Price.from);
      const priceTo = parseInt(filterCriteria.Price.to);
      const itemPrice = parseInt(item.priceFrom);
      if (itemPrice < priceFrom || itemPrice > priceTo) {
        return false;
      }
    }

    return true;
  });

  const updateMarkersAndClusters = (data, mapInstance) => {
    const sourceId = "points";

    if (mapInstance.getSource(sourceId)) {
      mapInstance.removeLayer("clusters");
      mapInstance.removeLayer("cluster-count");
      mapInstance.removeLayer("unclustered-point");
      mapInstance.removeSource(sourceId);
    }

    mapInstance.addSource(sourceId, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: data.map((point) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              point.generalInfo.coordinates.lng,
              point.generalInfo.coordinates.lat,
            ],
          },
          properties: {
            ...point,
          },
        })),
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    });

    mapInstance.addLayer({
      id: "clusters",
      type: "circle",
      source: sourceId,
      filter: ["has", "point_count"],
      paint: {
        "circle-color": [
          "step",
          ["get", "point_count"],
          "#4E6AFF",
          100,
          "#4E6AFF",
          750,
          "#4E6AFF",
        ],
        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
      },
    });
    mapInstance.addLayer({
      id: "cluster-count",
      type: "symbol",
      source: sourceId,
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12,
      },
      paint: {
        "text-color": "#fff",
      },
    });
    mapInstance.addLayer({
      id: "unclustered-point",
      type: "circle",
      source: sourceId,
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-color": "#4E6AFF",
        "circle-radius": 10,
      },
    });

    map.current.on("click", "unclustered-point", (e) => {
      const features = e.features;
      if (!features || features.length === 0) {
        return;
      }

      const coordinates = features[0].geometry.coordinates;
      const generalInfo = JSON.parse(features[0].properties.generalInfo);
      if (!generalInfo) {
        return;
      }

      const images = generalInfo.images;
      let image = "";
      if (images && images.length > 0) {
        const photos = images[0].photos;
        if (photos && photos.length > 0) {
          image = photos[0];
        }
      }

      const name = generalInfo.name;
      const price = generalInfo.priceFrom;
      const _id = features[0].properties._id;
      const formattedPrice = (price / 3.6)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/\.\d{2}$/, "");

      const popupContent = `
        <div class="mapPage__popUp">
          ${
            image
              ? `<img src="${image}" alt="popupImg" width="123" height="63"/>`
              : `<img src="/assets/tempImgs/addPhoto.svg" alt="popupImg" width="100" height="50" class="mapPage__popUp-addImg" />`
          }
          <span>
            <span class="popup-title">${name}</span>
            <strong>$${formattedPrice}</strong>
          </span>
        </div>
      `;

      const popup = new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map.current);

      const popupNode = popup._content;

      function handleClick() {
        navigate(`/project/${_id}`);
      }

      popupNode.addEventListener("click", handleClick);

      popup.on("close", () => {
        popupNode.removeEventListener("click", handleClick);
      });
    });

    map.current.on("mouseenter", "clusters", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });
    map.current.on("mouseleave", "clusters", () => {
      map.current.getCanvas().style.cursor = "";
    });
    map.current.on("mouseenter", "unclustered-point", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });
    map.current.on("mouseleave", "unclustered-point", () => {
      map.current.getCanvas().style.cursor = "";
    });
    map.current.on("click", "clusters", (e) => {
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ["clusters"],
      });
      const clusterId = features[0].properties.cluster_id;
      map.current
        .getSource("points")
        .getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;

          map.current.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom + 1,
          });
        });
    });
  };

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/abiespana/cltantp6a00ut01pj4v9h0srk",
        center: [lng, lat],
        zoom: zoom,
      });
    }
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [state, filteredData]);

  useEffect(() => {
    const handleMapLoad = () => {
      updateMarkersAndClusters(filteredData, map.current);
    };

    if (map.current.isStyleLoaded()) {
      handleMapLoad();
    } else {
      map.current.off("style.load", handleMapLoad);
      map.current.on("style.load", handleMapLoad);
    }
  }, [filteredData]);

  return (
    <section className={`mapPage ${!state ? "active" : ""}`}>
      <div className={`mapPage__upper ${!state ? "active" : ""}`}>
        {" "}
        <WidthContainer>
          <div className="mapPage__dataHandlers">
            <input
              type="text"
              placeholder={t("Sorting__InputPlaceHolder")}
              className="mapPage__searchInput"
              value={filterCriteria.projectName}
              onChange={(e) => {
                setFilterCriteria((prevFilterCriteria) => ({
                  ...prevFilterCriteria,
                  projectName: e.target.value,
                }));
              }}
            />
            <Select
              placeholder={t("Sorting__TypeBtn")}
              img={"/assets/UI/arrowDownGrey.svg"}
              items={data
                .map((project) => project.generalInfo.projectMainInfo.type)
                .filter((value, index, self) => self.indexOf(value) === index)}
              setState={setFilterCriteria}
              state={filterCriteria}
              valueToChange="Type"
            />
            <Select
              img={"/assets/UI/arrowDownGrey.svg"}
              placeholder={t("Sorting__SizeBtn")}
              setState={setFilterCriteria}
              state={filterCriteria}
              valute="ft"
              valueToChange="Size"
            />
            <Select
              img={"/assets/UI/arrowDownGrey.svg"}
              placeholder={t("Sorting__PriceBtn")}
              setState={setFilterCriteria}
              state={filterCriteria}
              valute="€"
              valueToChange="Price"
            />
            <Select
              img={"/assets/UI/arrowDownGrey.svg"}
              placeholder={t("Sorting__LocationBtn")}
              setState={setFilterCriteria}
              state={filterCriteria}
              items={data
                .map((project) => project.generalInfo.location)
                .filter((value, index, self) => self.indexOf(value) === index)}
              valueToChange="Location"
            />
            <button
              className="mapPage__clearBtn"
              onClick={() => {
                setFilterCriteria({
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
              }}
            >
              <img
                src="/assets/UI/clearBtnIcon.svg"
                alt="clearBtnIcon"
                width={20}
                height={20}
              />
              {t("Sorting__ClearBtn")}
            </button>
          </div>
        </WidthContainer>
      </div>
      <div className={`mapPage__mapBox ${!state ? "active" : ""}`}>
        <div
          className={`mapPage__buttonShow ${state ? "active" : ""}`}
          onClick={() => handler(!state)}
        >
          <img
            className={`mapPage__buttonShow-img ${state ? "" : "hidden"}`}
            src="/assets/PropertiesPage/arrowBtnShow.svg"
            alt="Image arrow"
            width={15}
            height={10}
          />
        </div>
        <div
          ref={mapContainer}
          className={`mapPage__map ${!state ? "active" : ""}`}
        />
        <Link to={`/properties`}>
          <Button className="button--orange">{t("MapPage__ListBtn")}</Button>
        </Link>
      </div>
    </section>
  );
}
