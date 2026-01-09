import { FaEnvelope, FaKey, FaGoogle, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white rounded-lg shadow-md w-96">
                <div className="w-full h-24 flex items-center justify-center p-2 border-b border-gray-300">
                    <div
                        className="w-full h-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: "url('/onlinequiz.png')" }}
                    ></div>
                </div>
                <p className='text-center mt-2'>Sign in to start your session</p>

                {/* Form */}
                <form className='space-y-4 p-4'>
                    <div className="flex h-10">
                        <span className='h-full w-10 p-2 border border-gray-400 rounded-l bg-gray-200'>
                            <FaEnvelope className="w-full h-full" />
                        </span>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="h-full w-full px-2 border border-gray-400 focus:outline-none rounded-r"
                        />
                    </div>

                    <div className="flex h-10">
                        <span className='h-full w-10 p-2 border border-gray-400 rounded-l bg-gray-200'>
                            <FaKey className="w-full h-full" />
                        </span>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="h-full w-full px-2 border border-gray-400 focus:outline-none rounded-r"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="text-sm text-sky-500 hover:underline hover:text-sky-700 cursor-pointer"
                        >
                            <FaUnlockAlt className="inline mr-1" />
                            Forgot your password?
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600 font-medium cursor-pointer"
                        >
                            Sign in
                        </button>
                    </div>


                </form>

                <div className="px-5 space-y-2 pb-2">
                    <button className='flex items-center justify-center w-full p-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white font-medium cursor-pointer'>
                        <span>
                            <FaGoogle className="w-5 h-5 mr-2" />
                        </span> Sign in with Google
                    </button>

                    <p className="text-sm text-center">Don't have an account? <Link to="/signup" className="text-sky-500 hover:underline hover:text-sky-700">sign up</Link></p>
                </div>
            </div >
        </div >
    );
}
