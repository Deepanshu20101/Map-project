import { Card, CardHeader, Container } from "@mui/material";
import { useState } from "react";
import { Map, MapLayerMouseEvent, Marker, Popup } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";

interface NewHotelPlace {
  long: number;
  lat: number;
}

const AddLocation = () => {
  const [viewState, setViewState] = useState({
    longitude: 77.209,
    latitude: 28.6139,
    zoom: 4,
  });
  const [newHotelPlace, setNewHotelPlace] = useState<NewHotelPlace | null>(
    null
  );

  const handleHotelAdd = (e: MapLayerMouseEvent) => {
    const { lng, lat } = e.lngLat;
    setNewHotelPlace({
      long: lng,
      lat: lat,
    });
  };

  return (
    <Container sx={{ height: "25rem" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        {...viewState}
        style={{ width: "100%", height: "100%" }}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onDblClick={handleHotelAdd}
      >
        {newHotelPlace && (
          <>
            <Marker longitude={newHotelPlace.long} latitude={newHotelPlace.lat}>
              <RoomIcon style={{ color: "slateblue" }} cursor="pointer" />
            </Marker>
            <Popup
              longitude={newHotelPlace.long}
              latitude={newHotelPlace.lat}
              anchor="bottom-left"
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewHotelPlace(null)}
            >
              <Card>
                <CardHeader title="You are here" />
              </Card>
            </Popup>
          </>
        )}
      </Map>
    </Container>
  );
};
export default AddLocation;
