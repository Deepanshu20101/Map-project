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
  const imgList = [
    {
      id: 1,
      src: "/img1.png",
    },
    {
      id: 2,
      src: "/img1.png",
    },
    {
      id: 3,
      src: "/img1.png",
    },
    {
      id: 4,
      src: "/img1.png",
    },
    {
      id: 5,
      src: "/img1.png",
    },
    {
      id: 6,
      src: "/img1.png",
    },
    {
      id: 7,
      src: "/img1.png",
    },
    {
      id: 8,
      src: "/img1.png",
    },
    {
      id: 9,
      src: "/img1.png",
    },
    {
      id: 10,
      src: "/img1.png",
    },
  ];

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
                  <ImageListItem>
                    <ImageListItemBar
                      title="$1"
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                      }}
                      position="top"
                    />
                    <img src={hotel.images[0]} loading="lazy" />
                    <ImageListItemBar
                      title="aslkas"
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
