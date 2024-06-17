import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import marker from "../../assets/images/marker.png";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Map = ({ markers, onData }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [55.296249, 25.12],
      zoom: 9,
      attributionControl: false,
    });

    const geojson = {
      type: "FeatureCollection",
      features: markers.map((marker) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            marker.generalInfo.coordinates.lng,
            marker.generalInfo.coordinates.lat,
          ],
        },
        properties: {
          title: marker.shortPrice,
          lng: marker.generalInfo.coordinates.lng,
          lat: marker.generalInfo.coordinates.lat,
        },
      })),
    };

    map.on("load", () => {
      map.addSource("markers", {
        type: "geojson",
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.loadImage(marker, (error, image) => {
        if (error) throw error;
        map.addImage("my-image", image);
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "markers",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#333863",
          "circle-opacity": 0.5,
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "markers",
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

      map.addLayer({
        id: "my-layer",
        type: "symbol",
        source: "markers",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "icon-image": "my-image",
          "text-field": ["get", "title"],
          "text-font": ["Open Sans Regular", "Arial Unicode MS Bold"],
          "text-size": 12,
          "text-justify": "center",
        },
        paint: {
          "text-color": "#fff",
        },
      });

      map.on("click", "clusters", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });

        const clusterId = features[0].properties.cluster_id;

        map
          .getSource("markers")
          .getClusterLeaves(clusterId, 10, 0, function (err, aFeatures) {
            onData(aFeatures);
          });

        map
          .getSource("markers")
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            map.setPaintProperty("clusters", "circle-opacity", [
              "case",
              ["==", ["get", "cluster_id"], clusterId],
              1,
              0.5,
            ]);
          });
      });

      map.on("click", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });

        if (map.getLayer("clicked")) {
          map.removeLayer("clicked");
          map.removeSource("clicked");
        }

        if (!features.length) {
          map.setPaintProperty("clusters", "circle-opacity", 0.5);
          onData([]);
        }
      });

      map.on("click", "my-layer", (e) => {
        const feature = e.features[0];
        onData([feature]);
      });

      map.on("click", "my-layer", function (e) {
        let features = map.queryRenderedFeatures(e.point, {
          layers: ["my-layer"],
        });

        if (!features.length) {
          return;
        }

        let feature = features[0];

        if (map.getLayer("clicked")) {
          map.removeLayer("clicked");
          map.removeSource("clicked");
        }

        map.addSource("clicked", {
          type: "geojson",
          data: feature.toJSON(),
        });

        map.addLayer({
          id: "clicked",
          type: "symbol",
          source: "clicked",
          layout: {
            "icon-image": "my-image",
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Regular", "Arial Unicode MS Bold"],
            "text-size": 14,
            "text-justify": "center",
          },
          paint: {
            "text-color": "#333863",
          },
        });
      });

      map.on("mouseenter", "clusters", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "clusters", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    return () => map.remove();
  }, [markers]);

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "100vh" }}></div>
  );
};

export default Map;
