'use client'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { act, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { MegaMenu } from "./headerDetails/Megamenu";
import { BlogMenu, } from "./headerDetails/BlogMenu";
import { TopHeader } from "./headerDetails/TopHeader";
import { BlogDetails } from "./headerDetails/BlogDetails";
import Link from "next/link";

const Header = () => {
    const [country, setCountry] = useState('US');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollY, setScrollY] = useState('');
    const [scrollUp, setScrollUp] = useState(0);
    const currencySymbol = {
        US: "$",
        BD: "৳",
        IN: "₹",
        PK: "Rs",
        SA: "﷼",
    }
    const cart = 0;
    const whiteList = 0;
    const money = 0.04

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrollUp(scrollTop)

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
            setScrollY(scrollTop < lastScrollTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const linkCls = "relative group flex items-center justify-center gap-x-1 font-bold before:absolute before:content-[''] before:h-[3px] before:w-0 before:hover:w-10 before:mr-2 before:bg-red-500 before:bottom-0 before:transition-all before:duration-300 group h-20 uppercase text-sm"

    return (
        <div className="w-full flex flex-col items-center justify-center font-josefin">
            <TopHeader country={country} currencySymbol={currencySymbol} setCountry={setCountry} />
            <div className={`w-full h-20 flex items-center justify-between border-b px-20 transition-all duration-300 bg-white z-20 ${scrollY ? 'fixed top-0' : ' absolute'} ${scrollUp == 0 ? 'top-8' : 'top-0'}`}>
                <img src="/logo/nh-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector-removebg-preview.png" alt="" className="w-32 animate-firstAnimate bg-white" />

                <nav className="flex items-center justify-center gap-x-16">
                    <ul className="flex items-center justify-center gap-x-10">

                        <li className={`${linkCls}`}>
                            <Link href="/">Home</Link >
                        </li>

                        <li className={`${linkCls}`}>
                            <Link href="/components/men">Men</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300" />
                            <div className={`absolute top-20 -left-[390px] h-96 w-screen px-10 py-3 group-hover:block hidden bg-white animate-animateOver`}>
                                <MegaMenu />
                            </div>
                        </li>

                        <li className={`${linkCls}`}>
                            <Link href="">Women</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300" />
                            <div className={`absolute top-20 h-32 w-44 group-hover:block hidden bg-white animate-animateOver`}>

                            </div>
                        </li>

                        <li className={`${linkCls}`}>
                            <p className=" absolute px-1 rounded-[3px] text-white bg-red-500 top-1 right-5 text-[10px] before:absolute before:h-2 before:w-4 before:bg-red-500 before:-bottom-0.5 before:left-2 before:-rotate-[30deg]">New</p>
                            <Link href="">Baby Collections</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300" />
                        </li>

                        <li className={`${linkCls}`}>
                            <Link href="">Pages</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300" />
                            <div className={`absolute top-20 h-44 w-40 py-3 group-hover:flex hidden bg-white items-center justify-center animate-animateOver `}>
                                <BlogMenu />
                            </div>
                        </li>

                        <li className={`${linkCls}`}>
                            <Link href="">Blogs</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300" />
                            <div className={`absolute top-20 h-36 w-40 py-3 group-hover:flex hidden bg-white items-center justify-center animate-animateOver`}>
                                <BlogDetails/>
                            </div>
                        </li>

                        <li className={`${linkCls}`}>
                            <Link href="">Contact</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300" />
                        </li>
                    </ul>

                    <div className="flex items-center justify-center gap-x-4 text-3xl">
                        <button>
                            <IoSearchOutline />
                        </button>
                        <button className="relative group flex items-center justify-center" >
                            <CiHeart />
                            <p className=" absolute group-hover:-top-5 transition-all duration-300 -top-3 left-3 text-sm size-5 bg-red-500 rounded-full text-white pt-px">{whiteList}</p>
                        </button>
                        <button className="relative flex items-center justify-center group">
                            <IoMdCart />
                            <p className=" absolute group-hover:-top-5 transition-all duration-300 -top-3 left-3 text-sm size-5 bg-red-500 rounded-full text-white pt-px">{cart}</p>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header