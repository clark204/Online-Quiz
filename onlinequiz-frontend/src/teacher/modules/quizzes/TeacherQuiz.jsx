import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function TeacherQuiz() {
    const [quizTab, setQuizTab] = useState(() => {
        const savedState = localStorage.getItem('quizTab');
        return savedState ? savedState : 'quiz';
    });

    useEffect(() => {
        localStorage.setItem('quizTab', quizTab);
    }, [quizTab]);

    const tabs = [
        { name: 'Today Quiz', id: 'quiz' },
        { name: 'Drafts', id: 'drafts' },
        { name: 'Schedule', id: 'schedule' },
        { name: 'History', id: 'history' },
    ]

    const examplesCards = [
        { title: 'Math Quiz 1', courseCode: 'IT101', description: 'Basic Algebra and Geometry', date: '2024-06-01', timeStart: '10:00 AM', timeEnd: '11:00 AM' },
        { title: 'Science Quiz 1', courseCode: 'IT102', description: 'Introduction to Physics', date: '2024-06-02', timeStart: '10:00 AM', timeEnd: '11:00 AM' },
        { title: 'History Quiz 1', courseCode: 'IT103', description: 'World War II Overview', date: '2024-06-03', timeStart: '10:00 AM', timeEnd: '11:00 AM' },
        { title: 'English Quiz 1', courseCode: 'IT104', description: 'English Grammar and Composition', date: '2024-06-04', timeStart: '10:00 AM', timeEnd: '11:00 AM' },
    ];

    return (
        <div className="space-y-4 bg-gray-100 h-full w-full p-4">
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">Quizzes</h1>
                    <p className="text-gray-700">Create and Manage your quizzes here.</p>
                </div>
                <div className="">
                    <button className="bg-emerald-600 text-white  py-2 px-4 rounded hover:bg-emerald-700 duration-200 cursor-pointer">
                        Create New Quiz
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-300 px-6 h-20 flex items-center justify-between">
                <div className="relative md:w-1/2">
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-400 border-r">
                        <FaSearch />
                    </span>
                    <input type="search" name="search" id="search" placeholder="Search"
                        className="px-12 py-1 w-full bg-gray-200 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                </div>
                <div className="relative flex md:gap-4 gap-2">

                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-300 grid grid-rows-[40px_1fr_50px]">
                <div className="flex justify-around font-medium">
                    {/* TABS */}
                    {tabs.map((tab, index) => (
                        <button key={index}
                            className={`cursor-pointer w-full px-4 py-2 border-b-3 ${index === 3 ? 'rounded-tr-lg' : ''} ${index === 0 ? 'rounded-tl-lg' : ''} ${quizTab === tab.id ? 'border-emerald-400 text-white font-semibold bg-gray-800' : 'border-transparent bg-gray-400 hover:bg-gray-300 text-gray-600 hover:text-black'} `}
                            onClick={() => setQuizTab(tab.id)}
                        >{tab.name}</button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {examplesCards.map((card, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-lg font-semibold">{card.title}</h2>
                                    <p className="text-sm text-gray-600">{card.courseCode}</p>
                                </div>
                                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">
                                    {card.date}
                                </span>
                            </div>
                            <p className="mt-2 text-sm">{card.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm">{card.timeStart} - {card.timeEnd}</span>
                                <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="flex items-center justify-between px-4 py-2 border-t border-gray-300 bg-amber-400 rounded-b-lg font-medium"
                >
                    <p>Showing 1 to 10 of 100 results</p>
                    <div className="">
                        <button className="px-3 py-1 border border-gray-400 rounded-l hover:bg-gray-200 duration-200 cursor-pointer">
                            Previous
                        </button>
                        <button className="px-3 py-1 border border-gray-400 rounded-r hover:bg-gray-200 duration-200 cursor-pointer">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}