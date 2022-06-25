import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/assets/5466944-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/abundance_agriculture_background_bunch_carotene_603010-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/sheep_lamb_new_zealand-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/grass_514917-min.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
