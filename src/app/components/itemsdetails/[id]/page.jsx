'use client'
import { use } from 'react';
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react'
import RecentColl from '../../../api/Recent.json'
import { useRouter } from 'next/navigation';

const page = ({ params }) => {

    const router = useRouter();

    const { id } = use(params);
    const tiltRef = useRef(null);
    const tiltRef2 = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                scale: 1.1,
                speed: 1000,
                max: 15,
            });
        }
        if (tiltRef2.current) {
            VanillaTilt.init(tiltRef2.current, {
                scale: 1.1,
                speed: 1000,
                max: 15,
            });
        }

        return () => {
            if (tiltRef.current) {
                tiltRef.current.vanillaTilt.destroy();
            }
            if (tiltRef2.current) {
                tiltRef2.current.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <div className='w-full text-white pt-28 flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 via-blue-800 to-purple-900'>
            <div className='flex gap-x-5 items-center justify-center uppercase text-4xl font-semibold'>
                <div className='w-52 h-px bg-gray-400 font-josefin'></div>
                Items Details
                <div className='w-52 h-px bg-gray-400'></div>
            </div>
            <div className="flex flex-col pt-10 items-center justify-center">
                {
                    RecentColl.filter((allElm) => allElm.id == id).map((currElm) => {
                        return (
                            <div className="flex flex-col items-center justify-center" key={currElm.id}>
                                <div className='flex items-center justify-center gap-x-10'>
                                    <div className='w-72 h-96 p-5 rounded-md bg-gradient-to-tr from-red-500 via-blue-500 to-green-500 flex items-center justify-center '>
                                        <div ref={tiltRef} className='w-full h-full overflow-hidden rounded-md'>
                                            <img
                                                src={currElm.img2}
                                                alt="3D Tilt Effect"
                                                className='w-full h-full object-cover cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='w-72 h-96 p-5 rounded-md bg-gradient-to-tr from-red-500 via-blue-500 to-green-500 flex items-center justify-center '>
                                        <div ref={tiltRef2} className='w-full h-full overflow-hidden rounded-md'>
                                            <img
                                                src={currElm.img1}
                                                alt="3D Tilt Effect"
                                                className='w-full h-full object-cover cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                <p className='pt-5'>{currElm.company}</p>
                                <p className=' text-xl font-semibold'>{currElm.name}</p>
                                <div className="flex text-2xl font-bold items-center justify-center font-roboto">
                                    <p className=''>${currElm.price}</p>
                                    <p className='mx-4 line-through  decoration-4'>{currElm.discount !== 0 ? `$${currElm.price + ((currElm.discount * currElm.price) / 100)}` : ''}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <button className='w-32 px-4 py-1 bg-blue-500 text-lg font-semibold text-white rounded-md mt-5' onClick={() => router.back()}>Go back</button>

            </div>
        </div>
    )
}

export default page