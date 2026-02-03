import { useEffect, useState } from "react";
import { FaBars, FaBell, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import StudentNavigationBar from "./StudentNavigationBar";
import { Outlet } from "react-router-dom";
import StudentHeader from "./StudentHeader";

export default function StudentDashboard() {
    const [themeColor, setThemeColor] = useState(() => {
        const savedState = localStorage.getItem('themeColor');
        return savedState ? savedState : 'light';
    });

    useEffect(() => {
        localStorage.setItem('themeColor', themeColor);
    }, [themeColor]);

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
                <StudentNavigationBar isSidebarOpen={isSidebarOpen} />
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
                        <StudentNavigationBar isSidebarOpen={true} />
                    </aside>
                </div>
            )}

            {/* HEADER */}
            <header className="">
                <StudentHeader
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    setIsMobileSidebarOpen={setIsMobileSidebarOpen}
                    themeColor={themeColor}
                    setThemeColor={setThemeColor}
                />
            </header>


            {/* CONTENTS */}
            <main className="bg-gray-100">
                <Outlet />
            </main>
        </div>
    );
}