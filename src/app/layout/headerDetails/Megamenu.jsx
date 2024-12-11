export const MegaMenu = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-1/3 h-full grid grid-cols-2 grid-rows-2 gap-2">
                <div className=" row-span-2 ">
                    <p className="text-lg font-bold uppercase">Sunglasses</p>

                    <div className="flex flex-col gap-y-5 mt-4">
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Featured Products</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">New Arrivals</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Best Selling</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Top Rating</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Sport Performance</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Designer Sale – 50% Off</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Frames Under $150</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Frames Between $150-$249</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Frames Above $250</a>
                    </div>
                </div>
                <div className="">
                    <p className="text-lg font-bold uppercase">Accessories</p>

                    <div className="flex flex-col gap-y-5 mt-4">
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">
                            Replacement Frame</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">
                            Replacement Lenses</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Cleaning Kits
                        </a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Cases & Microbags</a>
                    </div>
                </div>
                <div className="mt-9">
                    <p className="text-lg font-bold uppercase">Lens Technology</p>

                    <div className="flex flex-col gap-y-5 mt-4">
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">
                        Polarized</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">
                        Prizm™</a>
                        <a href="" className="hover:text-red-500 text-gray-700 text-xs">Prizm™ Polarized
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-2/3 h-full grid grid-cols-3 gap-5 py-10 px-5">
                <div className="relative megaParent flex items-center justify-center cursor-pointer">
                    <img src="/headerphoto/mega-1.jpg" alt="" className=" size-full object-cover object-center"/>
                    <p className="h-9 w-40 megaChild flex items-center justify-center bg-white transition-all duration-300 absolute bottom-5">Man's</p>
                </div>
                <div className="relative megaParent flex items-center justify-center cursor-pointer">
                    <img src="/headerphoto/mega-2.jpg" alt="" className=" size-full object-cover object-center"/>
                    <p className="h-9 w-40 megaChild flex items-center justify-center bg-white transition-all duration-300 absolute bottom-5">Woman's</p>
                </div>
                <div className="relative megaParent flex items-center justify-center cursor-pointer">
                    <img src="/headerphoto/mega-3.jpg" alt="" className=" size-full object-cover object-center"/>
                    <p className="h-9 w-40 megaChild flex items-center justify-center bg-white transition-all duration-300 absolute bottom-5">Kid's</p>
                </div>
            </div>
        </div>
    )
}