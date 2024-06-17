import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useTranslation } from "react-i18next";
import "./map__ProjectP.scss";

const MapProject = ({ item, floorPopupActive }) => {
  const { t } = useTranslation();
  const [zoom, setZoom] = useState(16);
  const map = useRef(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/abiespana/cltfmyy4800pr01qn2r78be0e",
        center: [
          item.generalInfo.coordinates.lng,
          item.generalInfo.coordinates.lat,
        ],
        zoom: zoom,
        scrollZoom: true,
      });

      map.current.scrollZoom.disable();

      const el = document.createElement("div");
      el.className = "mapProject__content-marker";

      new mapboxgl.Marker(el)
        .setLngLat([
          item.generalInfo.coordinates.lng,
          item.generalInfo.coordinates.lat,
        ])
        .addTo(map.current);
    }

    const handleKeyDown = (event) => {
      if (event.key === "Alt") {
        map.current.scrollZoom.enable();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Alt") {
        map.current.scrollZoom.disable();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    item.generalInfo.coordinates.lng,
    item.generalInfo.coordinates.lat,
    zoom,
  ]);

  useEffect(() => {
    if (map.current) {
      map.current.on("load", () => {
        if (item.generalInfo.polygon) {
          const coordinates = item.generalInfo.polygon.map((coord) => [
            parseFloat(coord.lng),
            parseFloat(coord.lat),
          ]);

          const polygonGeoJSON = {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [coordinates],
            },
          };

          if (map.current.getLayer("polygon-layer")) {
            map.current.removeLayer("polygon-layer");
          }

          if (map.current.getSource("polygon-source")) {
            map.current.removeSource("polygon-source");
          }

          map.current.addSource("polygon-source", {
            type: "geojson",
            data: polygonGeoJSON,
          });

          map.current.addLayer({
            id: "polygon-fill",
            type: "fill",
            source: "polygon-source",
            paint: {
              "fill-color": "#4E6AFF",
              "fill-opacity": 0.5,
            },
          });

          map.current.addLayer({
            id: "polygon-outline",
            type: "line",
            source: "polygon-source",
            paint: {
              "line-color": "#4e6aff",
              "line-width": 3,
            },
          });
        }
      });
    }
  }, [item.generalInfo.polygon, map.current]);

  return (
    <section
      className={`mapProject ${floorPopupActive ? "floorPopupActive" : ""}`}
    >
      <div className="mapProject__content">
        <h4 className="mapProject__content-title">
          {t("Sorting__LocationBtn")}
        </h4>
        <div ref={mapContainer} className="mapProject__content-map" />
      </div>
    </section>
  );
};

export default MapProject;
