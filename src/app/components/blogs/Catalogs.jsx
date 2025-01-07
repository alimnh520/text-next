import Link from 'next/link'
import React from 'react'
import blogsDetails from '../../api/blogsPost.json'

const Catalogs = () => {
    return (
        <div className='h-screen w-5/12 sm:w-full sm:h-auto sm:pb-5'>
            <div className="w-full p-8 md:p-4 bg-gray-100 flex items-center justify-center hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <input type="text" className='h-14 w-8/12 outline-none px-5 placeholder:text-gray-500 text-sm' placeholder='Search Keyword' />
                <button className='w-4/12 h-14 bg-red-500 hover:bg-white border border-red-500 hover:text-red-500 font-medium text-lg text-white transition-all duration-300'>Search</button>
            </div>
            <div className="w-full mt-8 p-8 md:p-4 flex flex-col items-start bg-gray-100 hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <h3 className='text-xl font-semibold border-b border-b-gray-300 w-full pb-5'>Category</h3>

                <div className="w-full mt-8 grid grid-cols-1 grid-rows-6 divide-y divide-gray-300">
                    <Link href="" className='py-3 hover:text-red-500 transition-all duration-300'>Resaurant food(37)</Link>
                    <Link href="" className='py-3 hover:text-red-500 transition-all duration-300'>Travel news(10)</Link>
                    <Link href="" className='py-3 hover:text-red-500 transition-all duration-300'>Modern technology(03)</Link>
                    <Link href="" className='py-3 hover:text-red-500 transition-all duration-300'>Product(11)</Link>
                    <Link href="" className='py-3 hover:text-red-500 transition-all duration-300'>Inspiration21</Link>
                    <Link href="" className='py-3 hover:text-red-500 transition-all duration-300'>Health Care (21)09</Link>
                </div>
            </div>

            <div className="w-full mt-8 p-8 md:p-4 flex flex-col items-start bg-gray-100 hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <h3 className='text-xl font-semibold border-b border-b-gray-300 w-full pb-5'>Recent Post</h3>

                <div className="w-full h-96 overflow-y-scroll mt-8 grid space-y-5 grid-cols-1">
                    {
                        blogsDetails.map((currElm) => {
                            return (
                                <div className="blogs w-full h-20 flex items-center justify-start space-x-2" key={currElm.id}>
                                    <img src={currElm.img} alt="" className='w-28 h-full object-cover object-center' />
                                    <div className="flex space-y-1.5 flex-col items-start justify-center">
                                        <Link href="" className='font-semibold hover:text-red-500 transition-all duration-300 truncate'>{currElm.title}</Link>
                                        <p>{currElm.date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="w-full mt-8 p-8 md:p-4 flex flex-col items-start bg-gray-100 hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <h3 className='text-xl font-semibold border-b border-b-gray-300 w-full pb-5'>Tag Clouds</h3>

                <div className="w-full mt-8 flex flex-wrap text-sm gap-2 text-gray-600">
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>project</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>Love</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>Technology</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>Travel</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>Restaurant</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>Life Style</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>Design</Link>
                    <Link href="" className='border border-gray-300 px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 '>illustration</Link>
                </div>
            </div>

            <div className="w-full mt-8 p-8 md:p-4 flex flex-col items-start bg-gray-100 hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <h3 className='text-xl font-semibold border-b border-b-gray-300 w-full pb-5'>Instagram Feeds</h3>

                <div className="w-full h-48 mt-8 grid gap-2 grid-cols-3 grid-rows-2 ">
                    <img src="/blogs/post_4.jpg.webp" alt="" className='w-full h-full object-cover object-center' />
                    <img src="/blogs/post_5.jpg.webp" alt="" className='w-full h-full object-cover object-center' />
                    <img src="/blogs/post_6.jpg.webp" alt="" className='w-full h-full object-cover object-center' />
                    <img src="/blogs/post_7.jpg.webp" alt="" className='w-full h-full object-cover object-center' />
                    <img src="/blogs/post_8.jpg.webp" alt="" className='w-full h-full object-cover object-center' />
                    <img src="/blogs/post_9.jpg.webp" alt="" className='w-full h-full object-cover object-center' />
                </div>
            </div>


            <div className="w-full mt-8 p-8 md:p-4 flex flex-col items-start bg-gray-100 hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <h3 className='text-xl font-semibold border-b border-b-gray-300 w-full pb-5'>Newsletter</h3>

                <div className="w-full mt-8 flex space-y-5 flex-col items-center justify-center">
                    <input type="text" className='h-14 w-full outline-none px-5 placeholder:text-gray-500 text-sm' placeholder='Enter Email'/>
                    <Link href="" className='w-full h-14 flex items-center justify-center uppercase border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300'>Subscribe</Link>
                </div>
            </div>
        </div>
    )
}

export default Catalogs