'use client'
import React, { createContext, useState } from 'react'
export const BioContext = createContext();

const StoreData = ({children}) => {
    const [minValue, setMinValue] = useState(10); // Default minimum value
    const [maxValue, setMaxValue] = useState(300); // Default maximum value
    return (
        <BioContext.Provider value={{minValue, setMinValue, maxValue, setMaxValue,}}>
            {children}
        </BioContext.Provider>
    )
}

export default StoreData