import { FaBook, FaChartLine, FaFileExport, FaHome, FaUserFriends } from "react-icons/fa";

export default function StudentNavigationBar({ isSidebarOpen }) {

    const navigationItems = [
        {
            label: 'Overview', items: [
                { name: 'Dashboard', link: '/teacher-dashboard', icon: <FaHome /> },
            ]
        },
        {
            label: 'Quiz Management', items: [
                { name: 'Quizzes', link: '/teacher-quizzes', icon: <FaBook /> },
            ]
        },
        {
            label: 'Class Management', items: [
                { name: 'My Classes', link: '/teacher-students', icon: <FaUserFriends /> },
            ]
        },
        {
            label: 'Reports', items: [
                { name: 'Results & Analytics', link: '/teacher-profile', icon: <FaChartLine /> },
                { name: 'Reports & Export', link: '/teacher-settings', icon: <FaFileExport /> },
            ]
        },
    ]

    return (
        <div className="space-y-4">
            {/* LOGO & STUDENT NAME */}
            <div className="flex flex-col border-y border-gray-700">
                <div className="p-2 h-14  flex items-center border-b border-gray-700">
                    <div className="w-15 h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/quiz-logo.png')" }}>
                    </div>
                    <h1 className={`font-bold text-md text-gray-300 tracking-wide ${!isSidebarOpen ? "hidden" : ""}`}>Quiz Time</h1>
                </div>
                <div className="flex items-center px-2 py-4">
                    <div className="w-1/4">
                        <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                            ST
                        </span>
                    </div>
                    <div className="">
                        <h2 className="text-lg text-gray-300">Student Name</h2>
                        <p className="text-sm text-gray-400">email</p>
                    </div>
                </div>
            </div>

            {/* NAVIGATIONS BAR */}
            <nav className={`${!isSidebarOpen ? "" : "px-2"}`}>
                {navigationItems.map((section, index) => (
                    <div key={index} className="mb-6">
                        {!isSidebarOpen ? "" : (
                            <h2 className="text-gray-300 uppercase text-sm mb-2">
                                {section.label}
                            </h2>
                        )}
                        <ul className="list-disc list-inside">
                            {section.items.map((item, itemIndex) => (
                                <ul key={itemIndex} className="">
                                    <a
                                        key={itemIndex}
                                        href={item.link}
                                        className={`
                                    group relative
                                    text-gray-400 hover:text-white
                                    hover:bg-gray-600
                                    flex items-center
                                    p-2 rounded
                                    ${isSidebarOpen ? "gap-2" : "justify-center"}
                                `}
                                    >
                                        {/* ICON */}
                                        <span className="text-2xl">
                                            {item.icon}
                                        </span>

                                        {/* SECTION */}
                                        {isSidebarOpen && (
                                            <span>{item.name}</span>
                                        )}

                                        {/* TOOLTIP */}
                                        {!isSidebarOpen && (
                                            <span
                                                className="
                                            pointer-events-none
                                            absolute left-full ml-3
                                            top-1/2 -translate-y-1/2
                                            whitespace-nowrap
                                            bg-gray-900 text-white text-sm
                                            px-3 py-1 rounded-md
                                            opacity-0 group-hover:opacity-100
                                            transition-opacity duration-200
                                            shadow-lg
                                            z-50
                                        "
                                            >
                                                {item.name}
                                            </span>
                                        )}
                                    </a>
                                </ul>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </div>
    );

}