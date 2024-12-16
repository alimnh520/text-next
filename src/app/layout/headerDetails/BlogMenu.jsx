import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const BlogMenu = ({navbar,setNavbar}) => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-5 p-3">
            <Link href="/components/login-form" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => setNavbar(!navbar)}>Login <MdKeyboardArrowRight /></Link>
            <Link href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => setNavbar(!navbar)}>Cart <MdKeyboardArrowRight /></Link>
            <Link href="/components/shops" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => setNavbar(!navbar)}>Product Details <MdKeyboardArrowRight /></Link>
            <Link href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between" onClick={() => setNavbar(!navbar)}>Product Checkout <MdKeyboardArrowRight /></Link>
        </div>
    )
}