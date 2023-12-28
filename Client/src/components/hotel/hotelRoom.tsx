import { useParams } from "react-router-dom";

const HotelRoom = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default HotelRoom;
