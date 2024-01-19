import {
  Card,
  CardActionArea,
  Container,
  Grow,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Hotel {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const Content = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const navigate = useNavigate();

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

  return (
    <>
      <Container>
        <ImageList gap={20} cols={3}>
          {hotels.map((hotel) => (
            <Card key={hotel._id} sx={{ borderRadius: 3 }}>
              <Grow in>
                <CardActionArea onClick={() => navigate(`/hotel/${hotel._id}`)}>
                  <ImageListItem
                    style={{
                      height: "200px",
                    }}
                  >
                    <ImageListItemBar
                      title={`${hotel.price}$`}
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                      }}
                      position="top"
                    />
                    <img
                      src={hotel.images[0]}
                      alt={hotel.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <ImageListItemBar
                      title={hotel.title}
                      subtitle="asknajsn"
                      actionIcon={
                        <Rating
                          sx={{ color: "white", mr: "5px" }}
                          name="room-rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />
                      }
                    />
                  </ImageListItem>
                </CardActionArea>
              </Grow>
            </Card>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Content;
