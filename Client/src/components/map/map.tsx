import React, { useEffect, useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";
import { Card, CardHeader, Container } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

interface Pin {
  _id: string;
  title: string;
  description: string;
  long: number;
  lat: number;
}

const MapView = () => {
  const [viewState, setViewState] = useState({
    longitude: 77.209,
    latitude: 28.6139,
    zoom: 4,
  });
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    const getAllPins = async () => {
      try {
        const pins = await axios.get("http://localhost:5000/pin");
        setPins(pins.data.result);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    };
    getAllPins();
  }, []);

  return (
    <Container sx={{ height: "25rem", bgcolor: "burlywood" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        {...viewState}
        style={{ width: "100%", height: "100%" }}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {pins.map((pinItem) => (
          <React.Fragment key={pinItem._id}>
            <Marker longitude={77.209} latitude={28.6139}>
              <RoomIcon sx={{ color: "slateblue" }} />
            </Marker>
            {showPopup && (
              <Popup
                longitude={pinItem.long}
                latitude={pinItem.lat}
                anchor="bottom-left"
                onClose={() => setShowPopup(false)}
              >
                <Card>
                  <CardHeader title="You are here" />
                </Card>
              </Popup>
            )}
          </React.Fragment>
        ))}
      </Map>
    </Container>
  );
};

export default MapView;
