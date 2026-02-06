import { FaEnvelope, FaKey, FaGoogle, FaUnlockAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        status: false,
        statusText: "",
        message: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.token);
        } catch (error) {
            setError({
                status: true,
                statusText: error.response ? error.response.data.status : 'Network Error',
                message: error.response ? error.response.data.message : error.message
            });
        }
    };

    const renderErrorMessage = () => {
        if (!error.status) return null;

        if (error.statusText === 'emailError') {
            return <p className="text-red-400 text-xs">{error.message}</p>;
        }

        if (error.statusText === 'passwordError') {
            return <p className="text-red-400 text-xs">{error.message}</p>;
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white rounded-lg shadow-md w-96">
                <div className="w-full h-24 flex items-center justify-center p-2 border-b border-gray-300">
                    <div
                        className="w-full h-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: "url('/onlinequiz.png')" }}
                        role="img"
                        aria-label="Online Quiz application logo"
                    ></div>
                </div>
                <p className='text-center mt-2'>Sign in to start your session</p>

                {/* Form */}
                <form className="p-4" aria-label="Login Form" onSubmit={login}>
                    <div className={`${error.statusText === "emailError" ? "mb-1" : "mb-4"}`}>
                        <div className="flex h-10 w-full">
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <span className='w-[13%] flex items-center justify-center text-xl border border-gray-400 rounded-l bg-gray-200'>
                                <FaEnvelope aria-hidden="true" />
                            </span>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError({ status: false, statusText: "", message: ""});
                                }}
                                className={`h-full w-[calc(100%-13%)] px-2 border ${error.statusText === "emailError" ? "border-red-500" : "border-gray-400 focus:border-blue-300"} focus:outline-none rounded-r`}
                            />
                        </div>

                        {error.status && error.statusText === 'emailError' && (
                            <div className="py-1">
                                {renderErrorMessage()}
                            </div>
                        )}
                    </div>

                    <div className={`${error.statusText === "passwordError" ? "mb-2" : "mb-4"}`}>
                        <div className="flex h-10 w-full">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <span className='w-[13%] flex items-center justify-center text-xl border border-gray-400 rounded-l bg-gray-200'>
                                <FaKey aria-hidden="true" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError({ status: false, statusText: "", message: ""});
                                }}
                                className={`h-full w-[calc(100%-26%)] px-2 border ${error.statusText === "passwordError" ? "border-red-500" : "border-gray-400 focus:border-blue-300"} focus:outline-none`}
                            />
                            <span
                                className="w-[13%] flex items-center justify-center text-xl border border-gray-400 bg-gray-200 rounded-r cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
                            </span>
                        </div>
                        {error.status && error.statusText === 'passwordError' && (
                            <div className="py-1">
                                {renderErrorMessage()}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <Link
                            className="text-sm text-sky-500 hover:underline hover:text-sky-700 cursor-pointer"
                        >
                            <FaUnlockAlt className="inline mr-1" aria-hidden="true" />
                            Forgot your password?
                        </Link>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600 font-medium cursor-pointer"
                        >
                            Sign in
                        </button>
                    </div>


                </form>

                <div className="px-5 space-y-2 pb-2">
                    <button
                        className='flex items-center justify-center w-full p-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white font-medium cursor-pointer'
                        aria-label="Sign in with Google"
                    >
                        <span>
                            <FaGoogle className="w-5 h-5 mr-2" aria-hidden="true" />
                        </span> Sign in with Google
                    </button>

                    <p className="text-sm text-center">
                        Don't have an account?
                        <Link to="/signup" className="text-sky-500 hover:underline hover:text-sky-700">
                            sign up
                        </Link>
                    </p>
                </div>
            </div >
        </div >
    );
}
