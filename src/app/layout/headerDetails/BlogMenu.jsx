'use client'
import { MdKeyboardArrowRight } from "react-icons/md";

export const BlogMenu = ({ navbar, setNavbar }) => {
    const handleNavigation = (locate) => {
        window.location.href = locate;
    };
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-5 p-3">
            <button className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => {
                setNavbar(!navbar);
                handleNavigation('/components/login-form');
            }}>Login <MdKeyboardArrowRight /></button>
            <button className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => {
                setNavbar(!navbar);
                handleNavigation('/components/men');
            }}>Cart <MdKeyboardArrowRight /></button>
            <button className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => {
                setNavbar(!navbar);
                handleNavigation('/components/shops');
            }}>Product Details <MdKeyboardArrowRight /></button>
            <button className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => {
                setNavbar(!navbar);
                handleNavigation('/components/men');
            }}>Product Checkout <MdKeyboardArrowRight /></button>
        </div>
    )
}