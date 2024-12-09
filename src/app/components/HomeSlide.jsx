'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Link from 'next/link';

const HomeSlide = () => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay, Navigation]}
            effect="fade"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className='h-screen relative flex justify-center w-full text-white mt-20'
        >
            <p className=' absolute z-10 top-2 w-full py-2 text-center bg-black text-white'>
                Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link href="" className=' underline underline-offset-8 font-semibold decoration-2 text-amber-600 hover:tracking-wider transition-all duration-300'>Shop Now</Link>
            </p>
            <SwiperSlide>
                <div className="relative pl-20 w-full h-full bg-blue-700 bg-cover bg-center flex items-center justify-between">
                    <div className="w-1/2 h-full flex flex-col items-start justify-center gap-y-6 uppercase animate-fadeInUp">
                        <h2 className="flex items-center justify-center text-4xl font-bold text-red-500 animate-fadeLeft">
                            <div className='h-1 w-20 bg-red-500'></div> version 2021
                        </h2>
                        <p className="mt-4 text-6xl leading-normal font-semibold">Man Sunglasses Collection
                        </p>
                        <button className='px-16 py-4 border border-white text-white text-lg hover:border-red-500 hover:bg-red-500 font-bold transition-all duration-300'>Shop Now</button>
                    </div>
                    <img src="/HomePhoto/slider-3.png" alt="" className='h-full w-1/2 object-cover object-center' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative pl-20 w-full h-full bg-blue-950 bg-cover bg-center flex items-center justify-between">
                    <div className="w-1/2 h-full flex flex-col items-start justify-center gap-y-6 uppercase animate-fadeInUp">
                        <h2 className="flex items-center justify-center text-4xl font-bold text-red-500 animate-fadeLeft">
                            <div className='h-1 w-20 bg-red-500'></div> version 2021
                        </h2>
                        <p className="mt-4 text-6xl leading-normal font-semibold">Woman Sunglasses Collection
                        </p>
                        <button className='px-16 py-4 border border-white text-white text-lg hover:border-red-500 hover:bg-red-500 font-bold transition-all duration-300'>Shop Now</button>
                    </div>
                    <img src="/HomePhoto/slider-2.png" alt="" className='h-full w-1/2 object-cover object-center' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative pl-20 w-full h-full bg-rose-600 bg-cover bg-center flex items-center justify-between">
                    <div className="w-1/2 h-full flex flex-col items-start justify-center gap-y-6 uppercase animate-fadeInUp">
                        <h2 className="flex items-center justify-center text-4xl font-bold text-blue-500 animate-fadeLeft">
                            <div className='h-1 w-20 bg-blue-500'></div> version 2021
                        </h2>
                        <p className="mt-4 text-6xl leading-normal font-semibold">Kid Sunglasses Collection
                        </p>
                        <button className='px-16 py-4 border border-white text-white text-lg hover:border-red-500 hover:bg-red-500 font-bold transition-all duration-300'>Shop Now</button>
                    </div>
                    <img src="/HomePhoto/slider-1.png" alt="" className='h-full w-1/2 object-cover object-center' />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeSlide