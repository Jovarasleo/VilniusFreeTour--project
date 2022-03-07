import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./index.module.css";
const options = {
  // gestureHandling: "greedy",
  zoomControl: true,
  scaleControl: true,
};
const center = {
  lat: 54.68533476309642,
  lng: 25.288634638956637,
};
const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};
const marker = {
  lat: 54.68533476309642,
  lng: 25.288634638956637,
};
function GMaps() {
  const [libraries] = useState(["places"]);
  const [markers, setMarker] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCNttY97KNnGY9_CaAU8YEOW4ICWbavfbI",
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className={styles.mapWrapper}>
      <GoogleMap
        options={options}
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        markers={marker}
      >
        <Marker key={center} position={center} placeId={center} />
      </GoogleMap>
    </div>
  );
}
export default GMaps;
