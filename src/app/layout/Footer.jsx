import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="h-screen bg-black text-white px-28 pt-12 flex flex-col sm:px-5 sm:pt-8 sm:h-auto">
            <div className="w-full flex gap-x-7 items-center h-60 border-b border-b-[hsla(0,0%,100%,0)] sm:flex-col sm:h-auto sm:gap-x-0 sm:space-y-5 sm:items-start">
                <div className="flex flex-col gap-y-5 sm:justify-start">
                    <p className="text-2xl font-semibold">Subscribe Newsletter</p>
                    <p className="text-sm w-72 font-semibold">Subscribe newsletter to get 5% on all products.</p>
                </div>
                <div className="flex gap-x-2 mb-2 sm:w-full">
                    <input type="text" className="h-16 w-96 px-4 placeholder:text-sm text-black placeholder:text-black outline-none none sm:w-9/12" placeholder="Enter your email" />
                    <button className="bg-red-500 px-10 py-5 font-semibold hover:bg-transparent border border-red-500 hover:text-red-500 sm:px-7">Subscribe</button>
                </div>
                <div className="flex gap-x-3 ml-10 mb-12 sm:ml-0">
                    <Link href="" className="flex items-center justify-center hover:text-blue-800 text-3xl"><FaFacebook /></Link>
                    <Link href="" className="flex items-center justify-center hover:text-orange-600 text-3xl"><FaInstagram /></Link>
                    <Link href="" className="flex items-center justify-center hover:text-red-500 text-4xl"><FaYoutube /></Link>
                </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-1 h-96 pt-12 border-b border-b-[rgba(255,255,255,0.3)] sm:grid-cols-none sm:grid-rows-none sm:h-auto sm:pt-5">
                <div className=" flex items-start sm:py-6">
                    <p className="text-3xl gap-x-2 font-bold flex items-center ">
                        <span className="text-3xl font-bold bg-red-500 rounded-full size-14 flex items-center justify-center">🛍️</span>Capital <span className="font-normal text-2xl">shop</span>
                    </p>
                </div>
                <div className="flex flex-col py-3 pl-10 sm:pl-0">
                    <h4 className="font-semibold mb-5">Shop Men</h4>
                    <ul className="space-y-3 text-gray-300 text-sm flex flex-col">
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Clothing Fashion</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Winter</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Summer</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Formal</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Casual</Link>
                    </ul>
                </div>
                <div className="flex flex-col py-3 pl-10 sm:pl-0">
                    <h4 className="font-semibold mb-5">Shop Women</h4>
                    <ul className="space-y-3 text-gray-300 text-sm flex flex-col">
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Clothing Fashion</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Winter</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Summer</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Formal</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Casual</Link>
                    </ul>
                </div>
                <div className="flex flex-col py-3 pl-10 sm:pl-0">
                    <h4 className="font-semibold mb-5">Baby Collection</h4>
                    <ul className="space-y-3 text-gray-300 text-sm flex flex-col">
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Clothing Fashion</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Winter</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Summer</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Formal</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Casual</Link>
                    </ul>
                </div>
                <div className="flex flex-col py-3 pl-10 sm:pl-0">
                    <h4 className="font-semibold mb-5">Quick Links</h4>
                    <ul className="space-y-3 text-gray-300 text-sm flex flex-col">
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Track Your Order</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Support</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">FAQ</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Carrier</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">About</Link>
                        <Link href="" className="border-b border-b-transparent hover:border-b-white hover:tracking-widest w-fit transition-all duration-300">Contact Us</Link>
                    </ul>
                </div>
            </div>
            <div className="flex text-sm font-light items-center justify-center h-16">
                <p>Copyright ©2024 All rights reserved | This template is made with <span className="text-red-500">❤</span> by <span className="text-red-500">Nahid Hasan</span></p>
            </div>
        </div>
    )
}
export default Footer