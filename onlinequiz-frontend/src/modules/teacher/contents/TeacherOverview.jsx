import { useState } from "react";

export default function Overview() {

    const [themeColor, setThemeColor] = useState('light');

    const recentQuiz = [
        { id: 1, quiz: 'Sample Quiz 1', code: 'MATH101', date: '2024-06-01', participants: 25 },
        { id: 2, quiz: 'Sample Quiz 2', code: 'MATH101', date: '2024-06-02', participants: 30 },
        { id: 3, quiz: 'Sample Quiz 3', code: 'MATH101', date: '2024-06-03', participants: 20 },
        { id: 4, quiz: 'Sample Quiz 4', code: 'MATH101', date: '2024-06-04', participants: 15 },
        { id: 5, quiz: 'Sample Quiz 5', code: 'MATH101', date: '2024-06-05', participants: 22 }
    ]

    function timeAgo(date) {
        const now = new Date();
        const past = new Date(date);
        const diffInSeconds = Math.floor((now - past) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };

        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(diffInSeconds / secondsInUnit);

            if (interval >= 1) {
                return interval === 1
                    ? `${interval} ${unit} ago`
                    : `${interval} ${unit}s ago`;
            }
        }

        return 'just now';
    }

    return (
        <div className="bg-gray-100 h-full w-full space-y-4">
            <div className="p-4 flex max-md:flex-col md:items-center justify-between">
                {/* BREAD CRUMBS */}
                <div className="">
                    <h1 className="md:text-xl text-lg font-semibold">Dashboard</h1>
                </div>

                {/* QUICK ACTIONS BUTTONS */}
                <div className="space-x-4  font-medium text-sm ">
                    <button className="border border-gray-400 bg-white py-2 px-4 rounded hover:bg-gray-200 duration-200 cursor-pointer">
                        Schedule Quiz
                    </button>
                    <button className="bg-emerald-600 text-white  py-2 px-4 rounded hover:bg-emerald-700 duration-200 cursor-pointer">
                        Create New Quiz
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 px-4">
                <div className="border border-gray-300 h-36 bg-white p-4 rounded-lg shadow-md">

                </div>
                <div className="border border-gray-300 h-36 bg-white p-4 rounded-lg shadow-md">

                </div>
                <div className="border border-gray-300 h-36 bg-white p-4 rounded-lg shadow-md">

                </div>
                <div className="border border-gray-300 h-36 bg-white p-4 rounded-lg shadow-md">

                </div>
            </div>

            {/* CONTENTS */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                {/* CLASSES */}
                <div className="bg-white p-4 rounded-lg border border-gray-300">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 mb-4">
                        <h2 className="md:text-lg text-md font-semibold">Classes</h2>
                        <button className="md:text-lg text-md cursor-pointer hover:bg-gray-200 py-1 px-2 rounded duration-200">
                            View All
                        </button>
                    </div>
                    <div className="min-h-64 space-y-4">

                        {/* Class cards */}
                        <div className="p-4 border border-gray-300 bg-gray-50 hover:bg-gray-100 space-y-2 rounded">
                            <div className="flex items-center justify-between font-medium">
                                <div className="">
                                    <h3 className="">Course Description</h3>
                                    <p className="text-sm text-gray-800">Course Code</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                                        # Students
                                    </span>
                                    <button className="text-sm py-1 px-2 rounded border border-gray-200 cursor-pointer">
                                        Manage
                                    </button>
                                </div>
                            </div>
                            <div className="p-1 bg-linear-to-r from-emerald-800 to-emerald-600 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* TO DO LIST */}
                <div className="bg-white p-4 rounded-lg border border-gray-300">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 mb-4">
                        <h2 className="md:text-lg text-md font-semibold">To Do List</h2>
                        <button className="md:text-lg text-md cursor-pointer hover:bg-gray-200 py-1 px-2 rounded duration-200">
                            View All
                        </button>
                    </div>
                    <div className="min-h-64 space-y-4">
                        {/* To Do Items */}
                        <div className="p-4 border border-gray-300 bg-gray-50 hover:bg-gray-100 rounded flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <input type="checkbox" className="h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
                                <span className="text-sm">Create a new quiz</span>
                            </div>
                            <button className="text-sm text-emerald-600 hover:text-emerald-800">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                {/* RECENT QUIZ ACTIVITIES */}
                <div className="md:col-span-2 bg-white rounded-lg p-4 border border-gray-300">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 mb-4">
                        <h2 className="md:text-lg text-md font-semibold">Recent Quiz Activity</h2>
                        <button className="md:text-lg text-md cursor-pointer hover:bg-gray-200 py-1 px-2 rounded duration-200">
                            View All
                        </button>
                    </div>

                    {/* RECENT QUIZ TABLE*/}
                    <div className="overflow-x-auto rounded-lg">
                        <table className="w-full">
                            <thead className="bg-gray-400 border border-gray-300 md:text-md text-sm">
                                <tr>
                                    <th className="text-left p-2 min-w-25">Quiz</th>
                                    <th className="text-left p-2">Code</th>
                                    <th className="text-left p-2 min-w-20">Date</th>
                                    <th className="text-left p-2">Participants</th>
                                    <th className="text-left p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {recentQuiz.map((quiz) => (
                                    <tr key={quiz.id} className="border-b border-gray-300 hover:bg-gray-200 md:text-sm text-xs">
                                        <td className="p-2">{quiz.quiz}</td>
                                        <td className="p-2">{quiz.code}</td>
                                        <td className="p-2">{timeAgo(quiz.date)}</td>
                                        <td className="p-2">{quiz.participants}</td>
                                        <td className="p-2">
                                            <button className="text-sm text-emerald-600 hover:bg-gray-300 py-1 px-2 rounded cursor-pointer">
                                                View Results
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}