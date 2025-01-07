'use client';

const page = () => {
    
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-50 ">
            <div className="w-[700px] h-5/6 p-6 rounded-md shadow-2xl md:w-10/12">
                {/* Title */}
                <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
                <p className="text-center text-gray-500 mt-2">
                    Enter Login details to get access
                </p>

                <form className="mt-6">
                    {/* Username or Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block font-medium text-indigo-950 text-lg"
                        >
                            Username Or Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Username / Email address"
                            className="w-full mt-1 px-4 py-2 border border-gray-200 placeholder:text-xs outline-none "
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block font-medium text-indigo-950 text-lg"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="w-full mt-1 px-4 py-2 border border-gray-200 placeholder:text-xs outline-none"
                        />
                    </div>

                    {/* Keep me logged in */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="text-red-500 focus:ring-red-500 h-4 w-4 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-700"
                            >
                                Keep Me Logged In
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-red-500 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full mt-10 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Sign up link */}
                <p className="mt-4 text-center text-sm text-gray-500">
                    Don’t have an account?{' '}
                    <a
                        href="#"
                        className="text-red-500 hover:underline"
                    >
                        Sign Up here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default page;
