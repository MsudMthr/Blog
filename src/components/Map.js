import React from "react";
import GoogleMapReact from "google-map-react";
import mapMarker from '../assets/map-marker-svgrepo-com.svg'
import Image from "next/image";
const AnyReactComponent = ({ text }) => (
  <div className="w-full  flex flex-col items-center">
    <p className="font-black text-xl text-dark ">{text}</p>
    <Image src={mapMarker} alt={text} width={50} height={50} />
  </div>
);

export default function SimpleMap({ lng, lat, text }) {
  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={lat} lng={lng} text={text} />
      </GoogleMapReact>
    </div>
  );
}
