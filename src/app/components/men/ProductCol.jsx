import React from 'react'
import RangeSlider from './RangeSlider'
import Genres from './Genres'
import Brand from './Brand'

const ProductCol = () => {
    return (
        <div className="w-64 flex flex-col items-center border border-gray-300 space-y-4 p-4 sm:w-10/12">
            <div className="relative w-full hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                    <option value="">Category</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

            <div className="relative w-full hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                    <option value="">Type</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

            <div className="relative w-full hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                    <option value="">Size</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="relative w-full hidden-animation opacity-0 translate-x-[100px] transition-all duration-500">
                <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                    <option value="">Color</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <p className="w-full text-left font-bold text-sm py-3">Filter by Price</p>
            <RangeSlider />

            <p className="w-full text-left font-bold text-sm py-3">Filter by Genres</p>
            <Genres/>

            <p className="w-full text-left font-bold text-sm py-3">Filter by Brand</p>
            <Brand/>
            
        </div>
    )
}

export default ProductCol