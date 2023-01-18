import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

const Galary = () => {

    const [slides, setSlides] = useState(3);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
               if(e.currentTarget.innerWidth < 766){                
                setSlides(1);
               }else if(e.currentTarget.innerWidth > 766){               
                setSlides(3);
               }
        });
    }, []);

    useEffect(() => {
        if(window.innerWidth < 766){
            setSlides(1);
        }
    }, [slides]);

  return (
    <div>
    <div className="heading">
          <p>The</p>
          <h1>Gallery</h1>
      </div>
    <div className='gallery'>
    <div className='photos'>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      Navigation={true}
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: -40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
  </div>
  )
}

export default Galary
