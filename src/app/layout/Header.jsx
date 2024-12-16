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
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollY, setScrollY] = useState('');
    const [scrollUp, setScrollUp] = useState(0);
    const cart = 0;
    const whiteList = 0;
    const money = 0.04
    const pathName = usePathname();
    const [navbar, setNavbar] = useState(true);

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

    const linkCls = `relative group flex items-center justify-center gap-x-1 font-bold before:absolute before:content-[''] before:h-[3px] before:hover:w-10 before:mr-2 before:bg-red-500 before:bottom-0 before:transition-all before:duration-300 transition-all duration-300 hover:text-red-500 group h-20 uppercase text-sm sm:before:hidden sm:h-10  sm:w-full sm:justify-start ${navbar ? 'sm:-left-40' : 'sm:left-0'}`

    return (
        <div className="w-full flex flex-col items-center justify-center font-josefin">
            <TopHeader />
            <div className={`w-full h-20 flex items-center justify-between border-b px-20 transition-all duration-300 bg-white z-20 ${scrollY ? 'fixed top-0' : ' absolute'} ${scrollUp == 0 ? 'top-8 sm:top-16' : 'top-0 sm:pt-5'} sm:flex-col sm:h-auto sm:items-start sm:px-5`}>
                <button className={`w-28 h-10 bg-gray-600 absolute right-5 ${scrollUp == 0 ? '-top-1' : 'top-5'} z-50 hidden sm:flex items-center justify-between px-2 text-white font-bold`} onClick={() => setNavbar(!navbar)}>
                    MENU 
                    <GiHamburgerMenu className="text-xl"/>
                </button>
                <img src="/logo/nh-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector-removebg-preview.png" alt="" className="w-32 animate-firstAnimate bg-white" />

                <nav className={`flex items-center justify-center gap-x-16 sm:flex-col sm:items-start sm:w-full ${navbar ? 'sm:h-0' : 'sm:h-[360px]'} transition-all duration-300 sm:overflow-hidden sm:mt-5 sm:border-t sm:border-t-gray-400`}>
                    <ul className="flex items-center justify-center gap-x-10 sm:flex-col sm:items-start">

                        <li className={`${linkCls} delay-0 ${pathName == '/' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0 '}`} onClick={() => setNavbar(!navbar)}>
                            <Link href="/">Home</Link >
                        </li>

                        <li className={`${linkCls} delay-75 ${pathName == '/components/men' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0 '}`} onClick={() => setNavbar(!navbar)}>
                            <Link href="/components/men">Men</Link >
                            
                        </li>

                        <li className={`${linkCls} delay-100 ${pathName == '/components/women' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0 '}`} onClick={() => setNavbar(!navbar)}>
                            <Link href="/components/women">Women</Link >
                        </li>

                        <li className={`${linkCls} delay-150 ${pathName == '/' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0 '}`} onClick={() => setNavbar(!navbar)}>
                            <p className=" absolute px-1 rounded-[3px] text-white bg-red-500 top-1 right-5 text-[10px] before:absolute before:-z-10 before:h-2 before:w-4 before:bg-red-500 before:-bottom-0.5 before:left-2 before:-rotate-[30deg] sm:-top-5">New</p>
                            <Link href="">Baby Collections</Link >
                        </li>

                        <li className={`${linkCls} delay-200 ${pathName == '/components/shops' && '/components/checkout' && '/components/cart' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0'}`}>
                            <Link href="">Pages</Link >
                            <MdOutlineKeyboardArrowDown className="-mt-0.5 group-hover:rotate-180 transition-all duration-300 sm:-rotate-90" />
                            <div className={`absolute top-20 h-44 w-40 py-3 group-hover:flex hidden bg-white items-center justify-center sm:-top-1 sm:left-20 sm:border sm:border-gray-400 sm:z-20`}>
                                <BlogMenu navbar={navbar} setNavbar={setNavbar}/>
                            </div>
                        </li>

                        <li className={`${linkCls} delay-300 ${pathName == '/components/blogs' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0 '}`} onClick={() => setNavbar(!navbar)}>
                            <Link href="/components/blogs">Blogs</Link >
                        </li>

                        <li className={`${linkCls} delay-500 ${pathName == '/components/contact' ? 'text-red-500 before:w-10 ' : 'text-black before:w-0 '}`} onClick={() => setNavbar(!navbar)}>
                            <Link href="/components/contact">Contact</Link >
                        </li>
                    </ul>

                    <div className="flex items-center justify-start gap-x-4 text-3xl sm:h-16 sm:w-full sm:border-t sm:border-t-gray-400">
                        <Link href="" className="hover:text-red-500 transition-all duration-300">
                            <IoSearchOutline />
                        </Link>
                        <Link href="" className="relative hover:text-red-500 transition-all duration-300 group flex items-center justify-center" >
                            <CiHeart />
                            <p className=" absolute flex items-center justify-center group-hover:-top-5 transition-all duration-300 -top-3 left-3 text-sm size-5 bg-red-500 rounded-full text-white pt-px">{whiteList}</p>
                        </Link>
                        <Link href="" className="relative hover:text-red-500 transition-all duration-300 flex items-center justify-center group">
                            <IoMdCart />
                            <p className=" absolute flex items-center justify-center group-hover:-top-5 transition-all duration-300 -top-3 left-3 text-sm size-5 bg-red-500 rounded-full text-white pt-px">{cart}</p>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header