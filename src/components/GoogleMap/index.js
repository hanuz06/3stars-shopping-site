import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMaps = ({ latitude, longitude }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: "Our main office is here",
    });
    return marker;
  };

  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        boxShadow: "10px 0 10px -2px #888",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
