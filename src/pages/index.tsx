import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {useRef, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const swiperRef = useRef(null);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };


  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h1>qeweqw</h1>
      </div>
        <div className="mt-16 bg-black text-blue-700 w-1/2 h-24 ">
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.activeIndex)
                    console.log(swiper.activeIndex)
                }}
                onSwiper={(swiper) => console.log()}
            >
                <SwiperSlide>
                    <div className="h-24 bg-red-500">
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
        <div>
            <button
                onClick={() => {
                goToSlide(currentSlide - 1)
                setCurrentSlide(currentSlide -1)
            }}>
                -1
            </button>
            <button onClick={() => {
                goToSlide(currentSlide + 1)
                setCurrentSlide(currentSlide + 1)
            }}>
                +1
            </button>
        </div>
    </main>
  )
}
