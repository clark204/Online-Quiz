import { useEffect, useState } from "react";
import { FaBars, FaBell, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import TeacherOverview from "./contents/TeacherOverview";
import TeacherNavigationBar from "./TeacherNavigationBar";

export default function TeacherDashboard() {
    const [themeColor, setThemeColor] = useState('light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
        const savedState = localStorage.getItem('isSidebarOpen');
        return savedState ? JSON.parse(savedState) : true;
    });

    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
    }, [isSidebarOpen]);

    return (
        <div className={`h-screen grid grid-rows-[auto_1fr] ${isSidebarOpen ? 'md:grid-cols-[230px_1fr]' : 'md:grid-cols-[70px_1fr]'} transition-all ease-out duration-300`}>
            {/* SIDEBAR NAVIGATION*/}
            <aside className="hidden md:grid row-span-2 bg-gray-800 text-white">
                <TeacherNavigationBar isSidebarOpen={isSidebarOpen} />
            </aside>

            {/* MOBILE SIDEBAR OVERLAY */}
            {isMobileSidebarOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* BACKDROP */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    />

                    {/* SIDEBAR */}
                    <aside className="absolute left-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg">
                        <TeacherNavigationBar isSidebarOpen={true} />
                    </aside>
                </div>
            )}

            {/* HEADER */}
            <header className="h-14 w-full flex items-center justify-between px-6">
            
                {/* MOBILE SIDEBAR OVERLAY */}
                <FaBars
                    className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:hidden"
                    onClick={() => setIsMobileSidebarOpen(true)}
                />

                <FaBars
                    className="hidden md:block text-gray-600 text-lg hover:text-gray-800 cursor-pointer"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                />

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
            <main className="">
                <TeacherOverview />
            </main>
        </div>
    );
}