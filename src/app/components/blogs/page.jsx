import Link from 'next/link'
import React from 'react'
import BlogsDetails from './BlogsDetails'
import Catalogs from './Catalogs'

const page = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="w-full mt-20 h-40 gap-y-5 bg-red-100 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-black">Blogs</p>
                <div className="grid grid-cols-2 text-sm text-gray-600 divide-x-2 divide-gray-600">
                    <Link href="/" className="w-32 text-end pr-2">Home</Link>
                    <p className="text-start px-3">Blogs</p>
                </div>
            </div>
            <div className="px-20 mt-10 flex items-start justify-center space-x-5">
                <BlogsDetails />
                <Catalogs />
            </div>
        </div>
    )
}

export default page