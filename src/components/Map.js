import React from "react";
import GoogleMapReact from "google-map-react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import Image from "next/image";
const AnyReactComponent = ({ text }) => (
  <div className="flex    flex-col items-center">
    <p className="w-40 text-center text-2xl font-black text-white ">{text}</p>
    <RoomOutlinedIcon color="error" />
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
    <div className="mx-auto mb-3 h-[80vh] w-full overflow-hidden rounded-md px-5 sm:w-10/12">
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
