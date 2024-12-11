'use client'
import React, { useState } from "react";

const RangeSlider = () => {
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(500);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    return (
        <div className="flex flex-col items-center p-4 relative right-5 h-screen w-full">
            {/* Range Track */}
            <div className="mt-72 relative w-48 h-1 bg-gray-200 rounded-full">
                <div
                    className="absolute h-1 bg-red-500 rounded-full"
                    style={{
                        left: `${(minValue / 1000) * 100}%`,
                        right: `${100 - (maxValue / 1000) * 100}%`,
                    }}
                ></div>

                {/* Lower Thumb */}
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute w-full -top-1.5 appearance-none bg-transparent pointer-events-none"
                    style={{
                        zIndex: minValue > 900 ? 5 : 3,
                    }}
                />

                {/* Upper Thumb */}
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute w-full -top-1.5 appearance-none bg-transparent pointer-events-none"
                    style={{
                        zIndex: maxValue < 100 ? 5 : 3,
                    }}
                />
            </div>

            {/* Display selected range */}
            <div className="mt-4 text-lg">
                <span>{minValue}</span> to <span>{maxValue}</span>
            </div>
        </div>
    );
};

export default RangeSlider;
