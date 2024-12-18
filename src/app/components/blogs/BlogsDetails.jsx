import React from 'react'
import blogsDetails from '../../api/blogsDetails.json'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa6'
import { FaComments } from "react-icons/fa";

const BlogsDetails = () => {
    return (
        <div className='w-7/12 flex flex-col space-y-10 sm:w-full'>
            {
                blogsDetails.map((currElm) => {
                    return (
                        <div className="pb-8 w-full shadow-[0_0_10px_rgba(0,0,0,0.2)] relative" key={currElm.id}>
                            <img src={currElm.img} alt="" className='w-full h-80 object-cover' />
                            <Link href="" className='size-24 bg-red-500 absolute left-10 top-60 flex flex-col items-center justify-center rounded-lg text-white hover:text-red-500 hover:bg-transparent transition-all duration-300 sm:top-64 sm:left-5'>
                                <p className='text-4xl font-bold'>{currElm.date}</p>
                                <p className='text-lg font-semibold'>{currElm.month}</p>
                            </Link>
                            <div className="w-full px-9 mt-10 flex space-y-3 flex-col items-start sm:px-5">
                                <Link href="" className='text-2xl font-bold transition-all duration-300 hover:text-red-500'>{currElm.title}</Link>
                                <p className=''>{currElm.details}</p>
                                <div className="grid grid-cols-2 divide-x divide-gray-400 text-gray-600 font-bold text-sm">
                                    <Link href="" className=' transition-all duration-300 hover:text-red-500 flex items-center justify-center space-x-2 w-fit px-5'>
                                        <FaUser />
                                        <p className='mt-1'>{currElm.catalog}</p>
                                    </Link>
                                    <Link href="" className='mt-1 transition-all duration-300 hover:text-red-500 flex items-center justify-center space-x-2 w-fit px-5'>
                                        <FaComments />
                                        <p>{currElm.comment <= 9 ? `0${currElm.comment}` : currElm.comment} Comments</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogsDetails