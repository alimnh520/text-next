import Link from 'next/link'
import React from 'react'

const LatestNews = () => {
    return (
        <div className='h-auto px-20 py-10 flex flex-col items-center mt-10 bg-gray-100 sm:px-10'>
            <p className='text-3xl font-semibold'>Latest News</p>
            <div className="w-full h-[550px] mt-3 py-5 grid gap-x-6 grid-cols-3 sm:h-auto sm:grid-cols-1 sm:grid-rows-3 sm:gap-y-5 sm:gap-x-0">
                <div className="flex flex-col group gap-y-5 sm:gap-y-3">
                    <img src="/news/blog1.jpg" alt="" />
                    <p className='text-sm text-gray-500'>Fashion Tips</p>
                    <p className='text-2xl transition-all group-hover:text-red-500 duration-300 font-semibold  text-gray-800'>What Curling Irons Are The Best Ones</p>
                    <p className='text-sm text-gray-500'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                    <Link href="/components/shops" className='font-semibold border-b border-b-black hover:tracking-widest transition-all duration-300 w-fit mt-5'>Read More</Link>
                </div>
                <div className="flex flex-col group gap-y-5">
                    <img src="/news/blog2.jpg.webp" alt="" />
                    <p className='text-sm text-gray-500'>Fashion Tips</p>
                    <p className='text-2xl transition-all group-hover:text-red-500 duration-300 font-semibold text-gray-800'>What Curling Irons Are The Best Ones</p>
                    <p className='text-sm text-gray-500'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                    <Link href="/components/shops" className='font-semibold border-b border-b-black hover:tracking-widest transition-all duration-300 w-fit mt-5'>Read More</Link>
                </div>
                <div className="flex flex-col group gap-y-5">
                    <img src="/news/blog3.jpg.webp" alt="" />
                    <p className='text-sm text-gray-500'>Fashion Tips</p>
                    <p className='text-2xl transition-all group-hover:text-red-500 duration-300 font-semibold text-gray-800'>What Curling Irons Are The Best Ones</p>
                    <p className='text-sm text-gray-500'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                    <Link href="/components/shops" className='font-semibold border-b border-b-black hover:tracking-widest transition-all duration-300 w-fit mt-5'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default LatestNews