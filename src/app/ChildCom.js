'use client'
import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { usePathname } from 'next/navigation';

const ChildCom = ({ children }) => {
    const pathName = usePathname();
    const hideHeaderFooterOn = ['/components/login-form'];
    const shouldHide = hideHeaderFooterOn.includes(pathName);

    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    if (loader) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center">
                {/* <img src='' className='w-60' /> */}
                <h1>Loading.......</h1>
            </div>
        )
    }
    return (
        <div>
            {!shouldHide && <Header />}
            {children}
            {!shouldHide && <Footer />}
        </div>
    )
}

export default ChildCom