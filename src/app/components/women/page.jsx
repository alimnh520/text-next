import React from 'react'
import Collection from '../men/Collection'
import StoreData from '../men/StoreData'
import ProductCol from '../men/ProductCol'
import Products from '../men/Products'

const page = () => {
    return (
        <div className='w-full h-auto flex flex-col mt-20'>
            <Collection />
            <div className="w-full mt-10 px-28 py-10 flex space-x-10 justify-between sm:px-5 sm:flex-col sm:items-center sm:mt-0 sm:space-x-0">
                <StoreData>
                    <ProductCol />
                    <Products />
                </StoreData>
            </div>
        </div>
    )
}

export default page