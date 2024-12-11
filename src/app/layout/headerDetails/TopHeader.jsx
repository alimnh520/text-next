import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

export const TopHeader = ({country, currencySymbol, setCountry}) => {
    return (
        <div className="w-full h-8 px-20 flex items-center justify-between bg-white border-b text-sm">
            <div className="flex items-center justify-center gap-x-5 text-sm">
                <Link href="">About Us</Link>
                <Link href="">Privacy</Link>
                <Link href="">FAQ</Link>
            </div>
            <div className="flex items-center justify-center gap-x-5">
                <img src={`https://flagsapi.com/${country}/flat/64.png`} className="h-10" />
                <select name="" className="outline-none uppercase cursor-pointer" onChange={(e) => setCountry(e.target.value)}>
                    <option value="US">USA</option>
                    <option value="BD">bangladesh</option>
                    <option value="IN">india</option>
                    <option value="PK">pakistan</option>
                    <option value="SA">saudi arab</option>
                </select>
                <p className="flex items-center justify-center ">Currency :<span className="font-semibold ml-1">{currencySymbol[country]}</span></p>
                <div className="flex items-center justify-center gap-x-3 cursor-pointer">
                    <IoMdLogIn className="text-2xl" />
                    <p className="text-sm">login</p>
                </div>
            </div>
        </div>
    )
}