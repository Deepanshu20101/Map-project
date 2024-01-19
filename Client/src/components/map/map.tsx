import React, { useEffect, useState } from "react";
import { Map, MapLayerMouseEvent, Marker, Popup } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";
import { Card, CardHeader, Container } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

interface Hotel {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  location: { lng: number; lat: number };
}

const MapView = () => {
  const [viewState, setViewState] = useState({
    longitude: 77.209,
    latitude: 28.6139,
    zoom: 4,
  });
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [currentPopup, setCurrentPopup] = useState<string | null>(null);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const hotelList = await axios.get("http://localhost:5000/hotel");
        setHotels(hotelList.data.result);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    };
    getHotels();
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
        {hotels.map((hotelRoom) => (
          <React.Fragment key={hotelRoom._id}>
            <Marker
              longitude={hotelRoom.location.lng}
              latitude={hotelRoom.location.lat}
            >
              <RoomIcon
                style={{ color: "slateblue" }}
                onClick={() =>
                  handleCurrentPopup(
                    hotelRoom._id,
                    hotelRoom.location.lng,
                    hotelRoom.location.lat
                  )
                }
                cursor="pointer"
              />
            </Marker>
            {hotelRoom._id === currentPopup && (
              <Popup
                longitude={hotelRoom.location.lng}
                latitude={hotelRoom.location.lat}
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
