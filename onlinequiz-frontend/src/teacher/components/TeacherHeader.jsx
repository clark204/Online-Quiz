import { FaBars, FaBell, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";

export default function TeacherHeader({ themeColor, setThemeColor, isSidebarOpen, setIsSidebarOpen, isMobileSidebarOpen, setIsMobileSidebarOpen }) {
    return (
        <div className="h-14 w-full flex items-center justify-between">

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
        </div>
    );
}