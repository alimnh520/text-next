'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import apiGlass from '../api/Glasses.json';
import { useEffect, useState } from 'react';

const ProductSlide = () => {
    const [windowWidth, setWindowWidth] = useState(6);
    useEffect(() => {
        if (window.innerWidth <= 767) {
            setWindowWidth(3);
        } else {
            setWindowWidth(6);
        }
    });
    console.log(windowWidth);
    
    
    return (
        <div className="w-full flex flex-col items-center px-10 -mt-20 relative z-10 sm:-mt-5 sm:px-5">
            <div className="w-full h-full flex gap-y-4 flex-col items-center bg-white shadow-[1px_1px_5px_rgba(0,0,0,0.4)] p-7 sm:px-2 sm:py-5 ">
                <p className=' uppercase text-xl font-bold'>Our Best Seller Icons</p>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    slidesPerView={windowWidth}
                    spaceBetween={30}
                    loop
                    className=" w-full bg-white relative flex items-center justify-center"
                >
                    {
                        apiGlass.map((allEml) => {
                            return (
                                <SwiperSlide className='flex flex-col items-center gap-y-2 cursor-pointer' key={allEml.id}>
                                    <img src={allEml.photo} alt="" className='border w-full' />
                                    <p className='font-semibold sm:text-sm'>{allEml.name}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ProductSlide