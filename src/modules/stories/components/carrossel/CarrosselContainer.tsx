import React from 'react';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCoverflow, } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { StoriesArrowButton } from '../StoriesArrowButton';

type CarrosselProps = {
    children: React.ReactNode;
}
export const CarrosselContainer = ({ children }: CarrosselProps) => {
    const [swiper, setSwiper] = React.useState<SwiperClass>();
    const changeActiveIndex = (index: number) => {
        if (swiper) {
            swiper.slideTo(3);
        }
    };
    changeActiveIndex(3)

    return (
        <div className="relative">
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={80}
                simulateTouch={false}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.1,
                    slideShadows: false,
                }}
                keyboard={false}
                navigation={false /* arrows are custom */}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
                modules={[EffectCoverflow]}
            >
                {children}
            </Swiper>
            <StoriesArrowButton onClick={() => swiper?.slidePrev()} isLeft={true} className=" !left-1/3  z-10" />

            <StoriesArrowButton onClick={() => swiper?.slideNext()} isLeft={false} className=" !right-1/3  z-10" />
        </div>
    )
}
