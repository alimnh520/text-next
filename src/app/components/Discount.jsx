import Link from "next/link";
import { MdOutlineDiscount } from "react-icons/md";
const Discount = () => {
    return(
        <div className="w-full h-24 bg-red-300 flex items-center justify-center gap-x-5 my-6 sm:h-auto sm:flex-col sm:py-5 sm:space-y-5 md:h-auto md:flex-col md:py-5 md:space-y-5 hidden-animation opacity-0 -translate-x-[200px] sm:translate-x-0 transition-all duration-1000">
            <MdOutlineDiscount className="text-4xl"/>
            <p className="font-light text-3xl text-black sm:text-center">Super discount for your first purchase</p>
            <Link href="" className="px-5 py-2 bg-white font-medium uppercase text-lg border-2 border-gray-800 border-dashed hover:bg-gray-800 hover:text-white transition-all duration-300">free 15 first</Link>
            <p>Use discount code in checkout!</p>
        </div>
    )
}

export default Discount