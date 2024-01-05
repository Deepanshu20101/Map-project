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
import { useNavigate } from "react-router-dom";

const Content = () => {
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

  return (
    <>
      <Container>
        <ImageList gap={20} cols={3}>
          {imgList.map((item) => (
            <Card key={item.id} sx={{ borderRadius: 3 }}>
              <Grow in>
                <CardActionArea onClick={() => navigate(`/hotel/${item.id}`)}>
                  <ImageListItem>
                    <ImageListItemBar
                      title="$1"
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                      }}
                      position="top"
                    />
                    <img src={item.src} loading="lazy" />
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
