'use client'
import React, { useState } from 'react'
import TradingColl from './TradingColl';

const Trading = () => {
    const [content, setContent] = useState("men");
    return (
        <div className="flex flex-col px-28 py-10 w-full h-[700px] sm:h-auto sm:px-5 md:px-5 md:h-auto">
            <nav className="space-x-4 mb-8 flex items-center justify-between border-b border-b-gray-200 sm:flex-col md:flex-col md:mb-4">
                <p className='text-4xl font-semibold hidden-animation opacity-0 -translate-x-[200px] sm:transform-none transition-all duration-1000'>Trending This Week</p>
                <div className="flex items-center justify-center gap-x-5 hidden-animation opacity-0 translate-x-[200px] sm:transform-none transition-all duration-1000">
                    <button
                        onClick={() => setContent("men")}
                        className={`px-4 py-5 font-semibold relative flex items-center justify-center before:absolute before:content-[''] before:h-1 hover:before:w-full before:bg-red-500 before:bottom-0 before:transition-all before:duration-300 before:left-0 ${content == "men" ? "before:w-full text-red-500" : "before:w-0 text-black"} rounded`}
                    >
                        Men
                    </button>
                    <button
                        onClick={() => setContent("women")}
                        className={`px-4 py-5 font-semibold relative flex items-center justify-center before:absolute before:content-[''] before:h-1 hover:before:w-full before:bg-red-500 before:bottom-0 before:transition-all before:duration-300 before:left-0 ${content == "women" ? "before:w-full text-red-500" : "before:w-0 text-black"} rounded`}
                    >
                        Women
                    </button>
                    <button
                        onClick={() => setContent("baby")}
                        className={`px-4 py-5 font-semibold relative flex items-center justify-center before:absolute before:content-[''] before:h-1 hover:before:w-full before:bg-red-500 before:bottom-0 before:transition-all before:duration-300 before:left-0 ${content == "baby" ? "before:w-full text-red-500" : "before:w-0 text-black"} rounded`}
                    >
                        Baby
                    </button>
                    <button
                        onClick={() => setContent("fashion")}
                        className={`px-4 py-5 font-semibold relative flex items-center justify-center before:absolute before:content-[''] before:h-1 hover:before:w-full before:bg-red-500 before:bottom-0 before:transition-all before:duration-300 before:left-0 ${content == "fashion" ? "before:w-full text-red-500" : "before:w-0 text-black"} rounded`}
                    >
                        Fashion
                    </button>
                </div>
            </nav>

            <div className="p-6 rounded shadow-lg w-full hidden-animation opacity-0 -translate-y-[100px] transition-all duration-1000">
                {content === "men" && (
                    <div>
                        <h2 className="text-2xl py-5 font-semibold">Men</h2>
                        <div className="h-96 sm:h-auto md:h-auto  w-full">
                            <TradingColl />
                        </div>
                    </div>
                )}
                {content === "women" && (
                    <div>
                        <h2 className="text-2xl py-5 font-semibold">Women</h2>
                        <div className="h-96 sm:h-auto md:h-auto w-full">
                            <TradingColl />
                        </div>
                    </div>
                )}
                {content === "baby" && (
                    <div>
                        <h2 className="text-2xl py-5 font-semibold">Baby</h2>
                        <div className="h-96 sm:h-auto md:h-auto w-full">
                            <TradingColl />
                        </div>
                    </div>
                )}
                {content === "fashion" && (
                    <div>
                        <h2 className="text-2xl py-5 font-semibold">Fashion</h2>
                        <div className="h-96 sm:h-auto md:h-auto w-full">
                            <TradingColl />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Trading