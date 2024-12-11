import { MdKeyboardArrowRight } from "react-icons/md";

export const BlogMenu = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-5 p-3">
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Login <MdKeyboardArrowRight /></a>
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Cart <MdKeyboardArrowRight /></a>
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Product Details <MdKeyboardArrowRight /></a>
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Product Checkout <MdKeyboardArrowRight /></a>
        </div>
    )
}