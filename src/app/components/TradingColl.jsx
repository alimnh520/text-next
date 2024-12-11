'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import recentItems from '../api/Recent.json'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';

const TradingColl = () => {
    const [imgChange, setImageChange] = useState(null);
    return (
        <Swiper
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            loop
            className=" w-full h-full relative flex items-center justify-center"
        >
            {
                recentItems.map((allEml) => {
                    return (
                        <SwiperSlide className='flex flex-col items-center justify-center relative group' key={allEml.id}>
                            <img src={allEml.id === imgChange ? allEml.img1 : allEml.img2} alt="" className='w-full text-gray-800' onMouseOver={() => setImageChange(allEml.id)} onMouseOut={() => setImageChange(null)} />
                            <p className='uppercase text-center mt-4 hover:text-red-500 transition-all'>{allEml.company}</p>
                            <p className='font-semibold text-center text-lg my-1 hover:text-red-500 transition-all'>{allEml.name}</p>
                            <div className="flex items-center justify-center font-roboto font-semibold">
                                <p>${allEml.price}</p>
                            </div>

                            <div className="h-10 w-32 absolute sm:grid top-1/2 left-1/2 -translate-x-1/2 hidden grid-cols-3 divide-x divide-gray-400 rounded-md group-hover:grid" onMouseOver={() => setImageChange(allEml.id)}>
                                <Link href="" className='flex items-center justify-center rounded-tl-md rounded-bl-md text-2xl bg-white hover:bg-black hover:text-white transition-all duration-300 relative'>
                                    <MdOutlineShoppingCart />
                                </Link>
                                <Link href="" className='flex items-center justify-center text-2xl bg-white hover:bg-black hover:text-white transition-all duration-300 relative'>
                                    <CiHeart />
                                </Link>
                                <Link href={`/components/itemsdetails/${allEml.id}`} className='flex items-center justify-center rounded-tr-md rounded-br-md text-2xl bg-white hover:bg-black hover:text-white transition-all duration-300 relative peer/search'>
                                    <p className='bg-black text-white py-1.5 rounded-md absolute -top-10 text-xs w-24 hidden items-center justify-center before:absolute before:size-3 before:bg-black before:-bottom-1.5 before:rotate-45 peer-hover/search:flex'>Search Items</p>
                                    <IoSearchOutline />
                                </Link>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            <div className="custom-next flex size-10 rounded-full text-2xl text-red-500 items-center justify-center border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg absolute right-0 z-10 top-1/3 cursor-pointer"><IoIosArrowForward /></div>
            <div className="custom-prev flex size-10 rounded-full text-2xl text-red-500 items-center justify-center border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg absolute left-0 z-10 top-1/3 cursor-pointer"><IoIosArrowBack /></div>
        </Swiper>
    )
}

export default TradingColl