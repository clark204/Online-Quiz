import { useState } from "react";
import { FaBars, FaBell, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";

export default function TeacherDashboard() {
    const [themeColor, setThemeColor] = useState('light');

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-[230px_1fr]">
            {/* SIDEBAR NAVIGATION*/}
            <aside className="grid row-span-2 bg-gray-800 text-white p-4">

            </aside>

            {/* HEADER */}
            <header className="h-14 w-full flex items-center justify-between px-6">
                <FaBars className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
                <div className="space-x-6 text-md">
                    {themeColor === 'light' ? (
                        <FaMoon className="inline-block cursor-pointer"
                            onClick={() => setThemeColor('dark')}
                        />
                    ) : (
                        <FaSun className="inline-block cursor-pointer"
                            onClick={() => setThemeColor('light')}
                        />
                    )}
                    <FaBell className="inline-block text-gray-600 cursor-pointer" />
                    <FaUserAlt className="inline-block text-gray-600 cursor-pointer" />
                </div>
            </header>


            {/* CONTENTS */}
            <main className="bg-red-500">

            </main>
        </div>
    );
}