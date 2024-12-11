'use client'
import Link from "next/link";
import { useRouter } from "next/navigation"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";

const page = () => {
    const textData = `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

    It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.`

    const router = useRouter();
    const [content, setContent] = useState("descriptions");
    return (
        <div className="h-auto py-20 w-full flex flex-col items-center text-white">
            <p className='w-full py-2 text-center bg-black '>
                Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link href="" className=' underline underline-offset-8 font-semibold decoration-2 text-amber-500 hover:tracking-wider transition-all duration-300'>Shop Now</Link>
            </p>
            <div className="w-full h-40 gap-y-5 bg-red-100 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-black">Product Details</p>
                <div className="grid grid-cols-2 text-sm text-gray-600 divide-x-2 divide-gray-600 mr-16">
                    <Link href="/" className="w-32 text-end pr-2">Home</Link>
                    <Link href="/" className="w-32 text-center">Product details</Link>
                </div>
            </div>
            <div className="w-10/12 h-[450px] mt-10 py-9 px-16 bg-red-500 grid gap-x-10 grid-cols-3 items-center justify-center">
                <img src="/likeproduct/latest7.jpg.webp" alt="" className="h-full" />
                <div className="col-span-2 ">
                    <p className="text-4xl font-normal">The Rage of Dragons</p>
                    <p className="text-sm mt-3">By Evan Winter</p>
                    <p className="text-4xl font-semibold mt-7">$50.00</p>
                    <div className="flex items-center mt-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        <p>(120 Review)</p>
                    </div>
                    <div className="flex items-center my-9 gap-x-3">
                        <Link href="" className="px-10 py-3 font-semibold bg-white text-black rounded-full hover:bg-red-500 border hover:text-white transition-all duration-300 ">Add To Cart</Link>
                        <Link href="" className="bg-red-500 text-white rounded-full border border-white p-3 hover:text-red-500 hover:bg-white transition-all duration-300"><FaShareAlt /></Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-28 py-10 w-full">
                <nav className="space-x-4 mb-8">
                    <button
                        onClick={() => setContent("descriptions")}
                        className={`px-4 py-2  ${content == "descriptions" ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                    >
                        Descriptions
                    </button>
                    <button
                        onClick={() => setContent("author")}
                        className={`px-4 py-2 ${content == "author" ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                    >
                        Author
                    </button>
                    <button
                        onClick={() => setContent("comments")}
                        className={`px-4 py-2 ${content == "comments" ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                    >
                        Comments
                    </button>
                    <button
                        onClick={() => setContent("review")}
                        className={`px-4 py-2 ${content == "review" ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                    >
                        Review
                    </button>
                </nav>

                <div className="p-6 bg-gray-900 rounded shadow-lg w-full">
                    {content === "descriptions" && (
                        <div>
                            <h2 className="text-2xl py-5 font-semibold">Descriptions</h2>
                            <p>{textData}</p>
                        </div>
                    )}
                    {content === "author" && (
                        <div>
                            <h2 className="text-2xl py-5 font-semibold">Author</h2>
                            <p>{textData}</p>
                        </div>
                    )}
                    {content === "comments" && (
                        <div>
                            <h2 className="text-2xl py-5 font-semibold">Comments</h2>
                            <p>{textData}</p>
                        </div>
                    )}
                    {content === "review" && (
                        <div>
                            <h2 className="text-2xl py-5 font-semibold">Reviews</h2>
                            <p>{textData}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
export default page