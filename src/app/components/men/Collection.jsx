'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Collection = () => {
    const route = usePathname();
    return (
        <div className="flex flex-col w-full hidden-animation opacity-0 rotate-x-90 transition-all duration-500">
            <p className='w-full py-2 text-center bg-black text-white sm:text-sm'>
                Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link href="" className=' underline underline-offset-8 font-semibold decoration-2 text-amber-500 hover:tracking-wider transition-all duration-300'>Shop Now</Link>
            </p>
            <div className="w-full h-40 gap-y-5 bg-red-100 flex flex-col items-center justify-center sm:h-28">
                <p className="text-3xl font-bold text-black">{route == '/components/men' && "Men's" || route == '/components/women' && "Women's" || route == '/components/babys' && "Baby's"} Collection</p>
                <div className="grid grid-cols-2 text-sm text-gray-600 divide-x-2 divide-gray-600 mr-16">
                    <Link href="/" className="w-32 text-end pr-2">Home</Link>
                    <Link href="/" className="w-32 text-center">Product details</Link>
                </div>
            </div>
        </div>
    )
}

export default Collection