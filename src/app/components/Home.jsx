import React from 'react'
import HomeSlide from './HomeSlide'
import Fashion from './Fashion'
import ProductSlide from './ProductSlide'
import Discount from './Discount'
import RecentCollection from './RecentColl'
import Reviews from './Reviews'
import Facilities from './Facilities'
import LatestNews from './LatestNews'
import Trading from './Trading'
import ContextAnimation from './ContextAnimation'

const Home = () => {
    
    return (
        <ContextAnimation>
            <HomeSlide />
            <ProductSlide />
            <Fashion />
            <Discount />
            <RecentCollection />
            <Trading />
            <Reviews />
            <LatestNews />
            <Facilities />
        </ContextAnimation>
    )
}

export default Home