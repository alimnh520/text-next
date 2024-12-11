import { MdKeyboardArrowRight } from "react-icons/md";

export const BlogDetails = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-5 p-3">
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Blogs <MdKeyboardArrowRight /></a>
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Element <MdKeyboardArrowRight /></a>
            <a href="" className="hover:text-red-500 text-gray-700 text-xs w-full flex items-center justify-between">Blogs Details <MdKeyboardArrowRight /></a>
        </div>
    )
}