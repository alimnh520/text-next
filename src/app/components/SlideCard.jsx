const SliderCard = ({ img, profileName, reviewText, }) => {

    return (
        <div className="flex flex-col h-42 w-full p-12 sm:p-0 sm:mt-5">
            <div className="h-2/3 flex p-4 relative bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <img src="/blockquote.svg" alt="" className="h-7 mr-3" />
                <div className="flex h-full flex-col overflow-hidden">
                    <p className="h-2/3 text-xl my-3 text-gray-700 line-clamp-4 z-20 hidden-animation opacity-0 -translate-x-[100px] transition-all duration-500">{reviewText}</p>
                    <div className="flex items-center">
                        <div className="flex mt-3">
                            <img src={img} alt="" className="h-16 rounded-full hidden-animation opacity-0 move-rotate transition-all duration-500" />
                            <div className="flex flex-col mt-2 px-5">
                                <p className="text-gray- line-clamp-3 font-black text-black">{profileName.name}</p>
                                <p className="text-sm text-gray-700"></p>
                                <div className="flex items-center -ml-1">
                                    <img src="/reviews/rating.avif" alt="" className="w-6 mx-0.5" />
                                    <img src="/reviews/rating.avif" alt="" className="w-6 mx-0.5" />
                                    <img src="/reviews/rating.avif" alt="" className="w-6 mx-0.5" />
                                    <img src="/reviews/rating.avif" alt="" className="w-6 mx-0.5" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SliderCard