import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

export const TopHeader = ({country, currencySymbol, setCountry}) => {
    return (
        <div className="w-full h-8 px-20 flex items-center justify-between bg-white border-b text-sm sm:hidden">
            <div className="flex items-center justify-center gap-x-5 text-sm">
                <Link href="">About Us</Link>
                <Link href="">Privacy</Link>
                <Link href="">FAQ</Link>
            </div>
            <div className="w-5/12 grid grid-cols-3 divide-x divide-gray-300 gap-x-5 text-sm">
                <Link href="" className="w-full text-center">My Wishlist</Link>
                <Link href="" className="w-full text-center">Track Your Order</Link>
                <div className="flex items-center justify-center space-x-4 text-gray-500">
                    <Link href=""><FaFacebook/></Link>
                    <Link href=""><FaInstagram/></Link>
                    <Link href=""><FaTwitter/></Link>
                    <Link href=""><FaLinkedin/></Link>
                    <Link href=""><FaYoutube/></Link>
                </div>
            </div>
        </div>
    )
}