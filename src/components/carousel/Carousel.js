import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../images/profile.jpg";
import style from "./styles.module.css"

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

const Carousel = () => {

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

    const speakers = [
      {
          name:"Rahul Singh",
          photo:`${profile}`,
          designation:"CEO,Venus",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
      },
      {
          name:"Vikram Shukla",
          photo:`${profile}`,
          designation:"Youtuber",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
      },
      {
          name:"Narendra Patil",
          photo:`${profile}`,
          designation:"IPS",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
      },
      {
          name:"Mahesh Singh",
          photo:`${profile}`,
          designation:"Motivational Speaker",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
      },
      {
          name:"Narayan Kumar",
          photo:`${profile}`,
          designation:"Crickter",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
      },
      {
          name:"Yash Kumar",
          photo:`${profile}`,
          designation:"Researcher",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
      },
  ]

  return (
    <div id='speakers'>
    <div className="heading">
          <p>Our</p>
          <h1>Speakers</h1>
      </div>
    <div className='gallery'>
    <div className='photos'>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      Navigation={true}
      slidesPerView={slides}
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
      {
        speakers.map((item,i)=>{
          return(
            <SwiperSlide key={i}>
            <div className={style.member} >
              <div className={style.details}>
                <p style={{fontWeight:"600"}}>{item.name}</p>
                <p><i>{item.designation}</i></p>
              </div>
              {/* <img className={style.profile} src={item.profile} alt="" /> */}
              
                <img className={style.profile} src={item.photo} alt="" />
              
            </div>
            </SwiperSlide>
          )
        })
      }
      
      {/* <SwiperSlide>
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
      </SwiperSlide> */}
    </Swiper>
    </div>
  </div>
  </div>
  )
}

export default Carousel;
