import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

interface Hotel {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const HotelRoom = () => {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const getHotel = async () => {
      try {
        const hotel = await axios.get(`http://localhost:5000/hotel/${id}`);
        setHotel(hotel.data.result);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    };
    getHotel();
  }, []);

  return (
    <Container>
      <Swiper
        effect="coverflow"
        centeredSlides
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination
        modules={[Navigation, Pagination, EffectCoverflow]}
        className="mySwiper"
      >
        {hotel?.images?.map((url) => (
          <SwiperSlide key={url}>
            <img src={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default HotelRoom;
