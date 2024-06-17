import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const Map = ({ coordinates, polygon }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/abiespana/cltfmyy4800pr01qn2r78be0e",
      center: [coordinates.lng, coordinates.lat],
      zoom: 14,
      attributionControl: false,
      scrollZoom: true,
    });

    map.scrollZoom.disable();

    map.on("load", function () {
      const formatedPolygon = polygon.map((coord) => [
        parseFloat(coord.lng),
        parseFloat(coord.lat),
      ]);

      map.addSource("polygon", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [formatedPolygon],
          },
        },
      });

      map.addLayer({
        id: "polygon",
        type: "fill",
        source: "polygon",
        layout: {},
        paint: {
          "fill-color": "#d6dcfc",
        },
      });

      map.addLayer({
        id: "polygon-border",
        type: "line",
        source: "polygon",
        paint: {
          "line-color": "#4e6aff",
          "line-width": 4,
        },
      });
    });

    const handleKeyDown = (event) => {
      if (event.key === "Alt") {
        map.scrollZoom.enable();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Alt") {
        map.scrollZoom.disable();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      map.remove()
    }
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "260px" }} />;
};
