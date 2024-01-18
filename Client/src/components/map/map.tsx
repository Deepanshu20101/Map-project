import React, { useEffect, useState } from "react";
import { Map, MapLayerMouseEvent, Marker, Popup } from "react-map-gl";
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
  const [pins, setPins] = useState<Pin[]>([]);
  const [currentPopup, setCurrentPopup] = useState<string | null>(null);

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

  const handleCurrentPopup = (id: string, long: number, lat: number) => {
    setCurrentPopup(id);
    setViewState({ ...viewState, longitude: long, latitude: lat });
  };

  return (
    <Container sx={{ height: "25rem" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        {...viewState}
        style={{ width: "100%", height: "100%" }}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {pins.map((pinItem) => (
          <React.Fragment key={pinItem._id}>
            <Marker longitude={pinItem.long} latitude={pinItem.lat}>
              <RoomIcon
                style={{ color: "slateblue" }}
                onClick={() =>
                  handleCurrentPopup(pinItem._id, pinItem.long, pinItem.lat)
                }
                cursor="pointer"
              />
            </Marker>
            {pinItem._id === currentPopup && (
              <Popup
                longitude={pinItem.long}
                latitude={pinItem.lat}
                anchor="bottom-left"
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPopup(null)}
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
