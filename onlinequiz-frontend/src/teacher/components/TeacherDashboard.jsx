import { useEffect, useState } from "react";
import { FaBars, FaBell, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import TeacherOverview from "../modules/dashboard/TeacherOverview";
import TeacherNavigationBar from "./TeacherNavigationBar";
import { Outlet } from "react-router-dom";
import TeacherHeader from "./TeacherHeader";

export default function TeacherDashboard() {
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
            <aside className="bg-gray-800 text-white fixed h-svh hidden md:block">
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

            <header className="col-start-2  px-6">
                <TeacherHeader 
                themeColor={themeColor} 
                setThemeColor={setThemeColor}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                setIsMobileSidebarOpen={setIsMobileSidebarOpen}
                />
            </header>


            {/* CONTENTS */}
            <main className="col-start-2">
                <Outlet />
            </main>
        </div>
    );
}