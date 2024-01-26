"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cls from './Banner.module.scss'
import Image from "next/image";
import Promo from "@/shared/assets/promo/promo.jpg"


export const Banner = ({}) => {
    return (
        <div className={cls.banner}>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <Image className={cls.image} src={Promo} alt="promo" />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}