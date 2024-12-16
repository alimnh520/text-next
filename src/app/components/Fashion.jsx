import Link from "next/link"

const Fashion = () => {
    return (
        <div className="w-full px-20 my-8 flex gap-x-10 items-center justify-center z-10 sm:px-10 sm:flex-col sm:space-y-8">
            <div className="size-80 flex flex-col items-center justify-end text-xl font-bold text-white overflow-hidden bg-gray-800 group">

                <div className="flex flex-col items-center justify-center relative top-7 gap-y-5 group-hover:-top-5 transition-all duration-300 group-hover:gap-y-1">
                    <img src="/HomePhoto/Img_15_2x_f6077430-c5de-436d-9958-4cec98d0c012.webp" alt="" className="" />
                    <p>Men's Fashion</p>
                    <Link href="/components/shops" className=' underline underline-offset-8 font-semibold decoration-2 text-amber-600 hover:tracking-wider transition-all duration-300'>Shop Now</Link>
                </div>
            </div>
            <div className="size-80 flex flex-col items-center justify-end text-xl font-bold text-white overflow-hidden bg-gray-800 group">
                <div className="flex flex-col items-center justify-center relative top-7 gap-y-5 group-hover:-top-5 transition-all duration-300 group-hover:gap-y-1">
                    <img className="" src="/HomePhoto/Img_14_2x_d15c9167-f8ae-4939-9753-59c881fe988f.webp" alt="" />
                    <p className="z-10">Women's Fashion</p>
                    <Link href="/components/shops" className=' underline underline-offset-8 font-semibold decoration-2 text-amber-600 hover:tracking-wider transition-all duration-300'>Shop Now</Link>
                </div>
            </div>
            <div className="size-80 flex flex-col items-center justify-end text-xl font-bold text-white overflow-hidden bg-gray-800 group">
                <div className="flex flex-col items-center justify-center relative top-7 gap-y-5 group-hover:-top-5 transition-all duration-300 group-hover:gap-y-1">
                    <img className=" h-full" src="/HomePhoto/Img_13_2x_579eddce-b9b2-42d0-a629-482a8e9ba288.webp" alt="" />
                    <p>Baby's Fashion</p>
                    <Link href="/components/shops" className=' underline underline-offset-8 font-semibold decoration-2 text-amber-600 hover:tracking-wider transition-all duration-300'>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}
export default Fashion