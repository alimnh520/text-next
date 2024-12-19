'use client'
import React, { useEffect, useRef, useState } from 'react';
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

const RecentCollection = () => {
    const [imgChange, setImageChange] = useState(null);
    const [getWidth, setGetWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (getWidth > 768 && getWidth < 1024) {
            setGetWidth(2);
        } else if (getWidth < 768) {
            setGetWidth(1);
        } else {
            setGetWidth(4);
        }
    }, []);

    return (
        <div className="w-full h-auto flex gap-y-4 flex-col items-center p-5 md:px-10">
            <div className='flex gap-x-5 items-center justify-center uppercase text-4xl font-semibold sm:text-2xl'>
                <div className='w-52 h-px bg-gray-400 sm:w-10 md:w-28'></div>
                Recent Collection
                <div className='w-52 h-px bg-gray-400 sm:w-10 md:w-28'></div>
            </div>
            <p className=' uppercase font-semibold'>Collect your loves with our newest arrivals</p>
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
                slidesPerView={getWidth}
                spaceBetween={30}
                loop
                className=" w-full h-[450px] relative flex items-center justify-center sm:h-auto"
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
                                    <p className='mx-4 line-through decoration-gray-600 decoration-2'>{allEml.discount !== 0 ? `$${allEml.price + ((allEml.discount * allEml.price) / 100)}` : ''}</p>
                                </div>

                                <div className="flex flex-col gap-y-2 absolute top-10 left-5">
                                    <p className={`bg-red-500 ${allEml.discount !== 0 && 'px-2 py-1'} text-white`}>{allEml.discount !== 0 && `-${allEml.discount}%`}</p>
                                    <p className={`bg-blue-500 text-sm px-2 py-1 text-white`}>{allEml.price > 100 ? `HOT` : 'Sell'}</p>
                                </div>

                                <div className="h-10 w-32 absolute top-1/2 left-1/2 -translate-x-1/2 hidden grid-cols-3 divide-x divide-gray-400 rounded-md group-hover:grid" onMouseOver={() => setImageChange(allEml.id)}>
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
                <div className="custom-next flex size-10 rounded-full text-2xl text-red-500 items-center justify-center border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg absolute right-0 top-1/2 z-10 cursor-pointer"><IoIosArrowForward /></div>
                <div className="custom-prev flex size-10 rounded-full text-2xl text-red-500 items-center justify-center border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg absolute left-0 top-1/2 z-10 cursor-pointer"><IoIosArrowBack /></div>
            </Swiper>
        </div>
    )
}

export default RecentCollection