import ReviewSlider from "./ReviewsSlide"

const Reviews = () => {
    return(
        <div className={`h-auto sm:py-7 p-10 sm:px-5 flex flex-col items-center bg-gray-100 text-black md:px-5`}>
            <p className="text-4xl font-bold relative before:absolute before:content-[''] before:h-0.5 before:w-20 before:bg-blue-400 before:-bottom-7 before:left-1/2 before:-translate-x-1/2 sm:text-2xl hidden-animation opacity-0 rotate-x-90 transition-all duration-1000">Customer Testimonial</p>
            <p className={`text-xl mt-10`}>Do not take our words, check out what people says.!</p>   
            <ReviewSlider/>
        </div>
    )
}

export default Reviews