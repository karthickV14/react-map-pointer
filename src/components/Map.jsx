import React from "react";
import Styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={Styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        position: {lat}, {lng}
      </h1>

      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        change
      </button>
    </div>
  );
};

export default Map;
