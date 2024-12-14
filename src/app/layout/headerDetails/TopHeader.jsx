import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

export const TopHeader = ({country, currencySymbol, setCountry}) => {
    return (
        <div className="w-full h-8 px-20 flex items-center justify-between bg-white border-b text-sm sm:justify-center sm:px-0">
            <div className="flex items-center justify-center gap-x-5 text-sm sm:hidden">
                <Link href="">About Us</Link>
                <Link href="">Privacy</Link>
                <Link href="">FAQ</Link>
            </div>
            <div className="w-5/12 grid grid-cols-3 divide-x divide-gray-300 gap-x-5 text-sm sm:w-full">
                <Link href="" className="w-full text-center">My Wishlist</Link>
                <Link href="" className="w-full text-center">Track Your Order</Link>
                <div className="flex items-center justify-center space-x-4 text-gray-500 sm:px-5">
                    <Link href="" className="hover:text-red-500 transition-all duration-300"><FaFacebook/></Link>
                    <Link href="" className="hover:text-red-500 transition-all duration-300"><FaInstagram/></Link>
                    <Link href="" className="hover:text-red-500 transition-all duration-300"><FaTwitter/></Link>
                    <Link href="" className="hover:text-red-500 transition-all duration-300"><FaLinkedin/></Link>
                    <Link href="" className="hover:text-red-500 transition-all duration-300"><FaYoutube/></Link>
                </div>
            </div>
        </div>
    )
}