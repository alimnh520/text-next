import React from 'react'
import Collection from './Collection'
import ProductCol from './ProductCol'
import Products from './Products'
import StoreData from './StoreData'

const page = () => {
    return (
        <div className='w-full h-auto flex flex-col mt-20'>
            <Collection />
            <div className="w-full mt-10 px-28 py-10 flex space-x-10 justify-between">
                <StoreData>
                    <ProductCol />
                    <Products />
                </StoreData>
            </div>
        </div>
    )
}

export default page