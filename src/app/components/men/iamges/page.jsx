import React from 'react'
import RangeSlider from '../range/RangeSlider'

const page = () => {
    return (
        <div className="w-full h-auto px-20 py-10 flex items-start">
            <div className="flex flex-col space-y-4 p-4">
                <div className="relative w-48">
                    <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                        <option value="">Category</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="relative w-48">
                    <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                        <option value="">Type</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="relative w-48">
                    <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                        <option value="">Size</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="relative w-48">
                    <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:border-gray-500 custom-select">
                        <option value="">Color</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <p className="font-bold text-sm">Filter by Price</p>
                <RangeSlider />
            </div>
        </div>
    )
}

export default page