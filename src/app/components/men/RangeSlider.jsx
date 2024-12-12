'use client'
import React, { useContext, useState } from "react";
import { BioContext } from "./StoreData";

const RangeSlider = () => {
    const {minValue, setMinValue, maxValue, setMaxValue} = useContext(BioContext);
    
    // const [minValue, setMinValue] = useState(10); // Default minimum value
    // const [maxValue, setMaxValue] = useState(300); // Default maximum value

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    return (
        <div className="flex flex-col items-center p-4 relative right-5 w-full">
            {/* Range Track */}
            <div className="relative w-48 h-1 bg-gray-200 rounded-full">
                <div
                    className="absolute h-1 bg-red-500 rounded-full"
                    style={{
                        left: `${((minValue - 10) / 490) * 100}%`, // Normalize for range 10 to 500
                        right: `${100 - ((maxValue - 10) / 490) * 100}%`,
                    }}
                ></div>

                {/* Lower Thumb */}
                <input
                    type="range"
                    min="10"
                    max="500"
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute w-full -top-1.5 appearance-none bg-transparent pointer-events-none"
                    style={{
                        zIndex: minValue > 490 ? 5 : 3,
                    }}
                />

                {/* Upper Thumb */}
                <input
                    type="range"
                    min="10"
                    max="500"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute w-full -top-1.5 appearance-none bg-transparent pointer-events-none"
                    style={{
                        zIndex: maxValue < 20 ? 5 : 3,
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
