'use client'

import React, { useContext } from 'react'
import products from '../../api/Recent.json'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { CiHeart } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'
import { BioContext } from './StoreData'


const Products = () => {
    const {minValue, maxValue} = useContext(BioContext);
    console.log(minValue, maxValue);
    
    return (
        <div className='w-full grid grid-cols-3 grid-rows-3 gap-5'>
            {
                products.filter((currElm) => {
                    return maxValue >= currElm.price && minValue <= currElm.price
                }).map((allEml) => {
                    return (
                        <div className='flex flex-col items-center justify-center relative group' key={allEml.id}>
                            <img src={allEml.img1} alt="" className='w-full text-gray-800' />
                            <p className='uppercase text-center mt-4 hover:text-red-500 transition-all'>{allEml.company}</p>
                            <p className='font-semibold text-center text-lg my-1 hover:text-red-500 transition-all'>{allEml.name}</p>
                            <div className="flex items-center justify-center font-roboto font-semibold">
                                <p>${allEml.price}</p>
                            </div>

                            <div className="flex flex-col gap-y-2 absolute top-10 left-5">
                                <p className={`bg-red-500 ${allEml.discount !== 0 && 'px-2 py-1'} text-white`}>{allEml.discount !== 0 && `-${allEml.discount}%`}</p>
                                <p className={`bg-blue-500 text-sm px-2 py-1 text-white`}>{allEml.price > 100 ? `HOT` : 'Sell'}</p>
                            </div>

                            <div className="h-10 w-32 absolute top-1/2 left-1/2 -translate-x-1/2 hidden grid-cols-3 divide-x divide-gray-400 rounded-md group-hover:grid">
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products