import { FaEnvelope, FaKey, FaGoogle, FaUser, FaEyeSlash, FaEye, FaRegSquare, FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useState } from "react";

export default function SignUp() {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student'
    });
    const [error, setError] = useState({
        status: false,
        message: ""
    });
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });
    const [passwordRulesVisible, setPasswordRulesVisible] = useState(false);

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    }

    const signUp = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/register', {
                name: signUpData.name,
                email: signUpData.email,
                password: signUpData.password,
                confirmPassword: signUpData.confirmPassword,
                role: signUpData.role
            });

            console.log(response.data);
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            console.error('Error details:', error.response);
            if (isPasswordRulesValid) {
                setError({
                    status: true,
                    message: error.response ? error.response.data.errors.password[0] : error.response.data.message || error.message
                });
            }
        }
    }

    const rules = {
        length: signUpData.password.length >= 8,
        uppercase: /[A-Z]/.test(signUpData.password),
        lowercase: /[a-z]/.test(signUpData.password),
        number: /[0-9]/.test(signUpData.password),
        specialChar: /[!@#$%^&*()\-_=+]/.test(signUpData.password)
    }

    const passwordRules = () => {
        return (
            <div className="text-xs text-gray-600 mb-4">
                <p>password should contains:</p>
                <ul className="pl-4">
                    <li className={`${rules.length ? "text-green-500" : "text-red-500"} flex items-center gap-2`}>
                        {rules.length ? <FaCheckSquare /> : <FaRegSquare />} At least 8 characters
                    </li>
                    <li className={`${rules.uppercase ? "text-green-500" : "text-red-500"} flex items-center gap-2`}>
                        {rules.uppercase ? <FaCheckSquare /> : <FaRegSquare />} At least one uppercase letter
                    </li>
                    <li className={`${rules.lowercase ? "text-green-500" : "text-red-500"} flex items-center gap-2`}>
                        {rules.lowercase ? <FaCheckSquare /> : <FaRegSquare />} At least one lowercase letter
                    </li>
                    <li className={`${rules.number ? "text-green-500" : "text-red-500"} flex items-center gap-2`}>
                        {rules.number ? <FaCheckSquare /> : <FaRegSquare />} At least one number
                    </li>
                    <li className={`${rules.specialChar ? "text-green-500" : "text-red-500"} flex items-center gap-2`}>
                        {rules.specialChar ? <FaCheckSquare /> : <FaRegSquare />} At least one special character
                    </li>
                </ul>
            </div>
        );
    }

    const renderErrorMessage = () => {
        if (!error.status) return null;

        return <p className="text-red-400 text-xs">{error.message}</p>;
    }

    const isPasswordRulesValid =
        rules.length &&
        rules.lowercase &&
        rules.specialChar &&
        rules.number &&
        rules.uppercase;

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
                <p className='text-center mt-2'>Sign up to start your session</p>

                {/* Form */}
                <form className='p-4' aria-label="Sign up Form" onSubmit={signUp}>
                    <div className="flex h-10 mb-4">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <span className='flex items-center justify-center w-[13%] text-xl border border-gray-400 rounded-l bg-gray-200'>
                            <FaUser aria-hidden="true" />
                        </span>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            name="name"
                            value={signUpData.name}
                            onChange={handleChange}
                            className="h-full w-[calc(100%-13%)] px-2 border border-gray-400 focus:outline-none rounded-r"
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="flex h-10 mb-4">
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <span className='flex items-center justify-center w-[13%] text-xl border border-gray-400 rounded-l bg-gray-200'>
                            <FaEnvelope aria-hidden="true" />
                        </span>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            name="email"
                            value={signUpData.email}
                            onChange={handleChange}
                            className="h-full w-[calc(100%-13%)] px-2 border border-gray-400 focus:outline-none rounded-r"
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className={`flex h-10 ${passwordRulesVisible ? "" : "mb-4"}`}>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <span className='flex items-center justify-center w-[13%] text-xl border border-gray-400 rounded-l bg-gray-200'>
                            <FaKey aria-hidden="true" />
                        </span>
                        <input
                            type={showPassword.password ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={signUpData.password}
                            onChange={handleChange}
                            onFocus={() => setPasswordRulesVisible(true)}
                            className={`h-full w-[calc(100%-26%)] px-2 border border-gray-400 focus:outline-none`}
                            required
                            aria-required="true"
                        />
                        <span
                            className="w-[13%] flex items-center justify-center text-xl border border-gray-400 bg-gray-200 rounded-r cursor-pointer"
                            onClick={() => setShowPassword({ ...showPassword, password: !showPassword.password })}
                        >
                            {showPassword.password ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
                        </span>
                    </div>

                    {passwordRulesVisible && passwordRules()}

                    <div className={`${isPasswordRulesValid && error.status ? "mb-2" : "mb-4"}`}>
                        <div className="flex h-10">
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirm Password
                            </label>
                            <span className='flex items-center justify-center w-[13%] text-xl border border-gray-400 rounded-l bg-gray-200'>
                                <FaKey aria-hidden="true" />
                            </span>
                            <input
                                type={showPassword.confirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={signUpData.confirmPassword}
                                onChange={handleChange}
                                className={`h-full w-[calc(100%-26%)] px-2 border ${isPasswordRulesValid && error.status ? "border-red-500" : "border-gray-400"} focus:outline-none`}
                            />
                            <span
                                className="w-[13%] flex items-center justify-center text-xl border border-gray-400 bg-gray-200 rounded-r cursor-pointer"
                                onClick={() => setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword })}
                            >
                                {showPassword.confirmPassword ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
                            </span>
                        </div>
                        {isPasswordRulesValid && error.status && (
                            <div className="py-1">
                                {renderErrorMessage()}
                            </div>
                        )}
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            className="py-2 w-full bg-teal-500 text-white rounded hover:bg-teal-600 font-medium cursor-pointer"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <div className="px-5 space-y-2 pb-2">
                    <button
                        className='flex items-center justify-center w-full p-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white font-medium cursor-pointer'
                        aria-label="Sign up with Google"
                    >
                        <span>
                            <FaGoogle className="w-5 h-5 mr-2" aria-hidden="true" />
                        </span> Sign up with Google
                    </button>

                    <p className="text-sm text-center">
                        Already have an account?
                        <Link to="/login" className="text-sky-500 hover:underline hover:text-sky-700">
                            sign in
                        </Link>
                    </p>
                </div>
            </div >
        </div >
    );
}
