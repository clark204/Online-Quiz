import { useState } from "react";
import { FaBookOpen, FaChevronCircleDown, FaEllipsisV, FaSearch } from "react-icons/fa";

export default function TeacherClass() {

    const [switchTab, setSwitchTab] = useState('classes');
    const [selectedSemester, setSelectedSemester] = useState({
        value: 'all',
        isOpen: false
    });
    const [filterOptions, setFilterOptions] = useState([
        {
            id: 1, label: 'All Semester',
            value: 'all'
        },
        {
            id: 2, label: 'First Semester',
            value: 'first'
        }
        ,
        {
            id: 3, label: 'Second Semester',
            value: 'second'
        }
    ])

    const classCards = [
        { id: 1, courseCode: 'Math 101', description: 'Mathematics', students: 30, semester: 'first', year: 2024 },
        { id: 2, courseCode: 'Science 201', description: 'Science', students: 25, semester: 'second', year: 2024 },
        { id: 3, courseCode: 'History 301', description: 'History', students: 28, semester: 'first', year: 2024 },
        { id: 4, courseCode: 'English 101', description: 'English', students: 32, semester: 'second', year: 2024 },
        { id: 5, courseCode: 'Art 201', description: 'Art', students: 20, semester: 'first', year: 2024 },
    ]

    return (
        <div className="space-y-4 bg-gray-100 h-full w-full p-4">
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">My Classes</h1>
                    <p className="text-gray-700">Manage your classes here.</p>
                </div>
                <div className="">
                    <button className="bg-emerald-600 text-white  py-2 px-4 rounded hover:bg-emerald-700 duration-200 cursor-pointer">
                        Create New class
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
                    <button
                        className="md:px-4 md:py-2 px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-200 duration-200 cursor-pointer flex items-center gap-2"
                        onClick={() => setSelectedSemester({ ...selectedSemester, isOpen: !selectedSemester.isOpen })}
                    >
                        {selectedSemester.value === 'all' ? 'All Semester' : selectedSemester.value === 'first' ? 'First Semester' : 'Second Semester'}
                        <span className={`transition-transform duration-200 ${selectedSemester.isOpen ? 'rotate-180' : ''}`}>
                            <FaChevronCircleDown />
                        </span>
                    </button>

                    {selectedSemester.isOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-full">
                            {filterOptions.map((option, index) => (
                                <button
                                    key={index}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 duration-200 cursor-pointer first:rounded-t last:rounded-b"
                                    onClick={() => setSelectedSemester({ value: option.value, isOpen: false })}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <button
                        className="md:px-4 md:py-2 px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-200 duration-200 cursor-pointer flex items-center gap-2"
                        onClick={() => setSelectedSemester({ ...selectedSemester, isOpen: !selectedSemester.isOpen })}
                    >
                        {selectedSemester.value === 'all' ? 'All Semester' : selectedSemester.value === 'first' ? 'First Semester' : 'Second Semester'}
                        <span className={`transition-transform duration-200 ${selectedSemester.isOpen ? 'rotate-180' : ''}`}>
                            <FaChevronCircleDown />
                        </span>
                    </button>

                    {selectedSemester.isOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-full">
                            {filterOptions.map((option, index) => (
                                <button
                                    key={index}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 duration-200 cursor-pointer first:rounded-t last:rounded-b"
                                    onClick={() => setSelectedSemester({ value: option.value, isOpen: false })}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-300 grid grid-rows-[40px_auto_50px]">
                <div className="font-medium text-center flex relative">
                    <button
                        className={`
                            ${switchTab === 'classes' ?
                                'w-[60%] bg-gray-500 text-white rounded-tl-lg rounded-r-2xl outline p-2 relative' :
                                'w-[50%] bg-gray-300 rounded-tl-lg p-2 -mr-6'
                            } cursor-pointer`}
                        onClick={() => setSwitchTab('classes')}
                    >
                        Classes
                    </button>
                    <button
                        className={`
                            ${switchTab === 'classes' ?
                                'w-[50%] bg-gray-300 rounded-tr-lg p-2 -ml-6' :
                                'w-[60%] bg-gray-500 text-white rounded-tr-lg rounded-l-2xl outline p-2 relative'
                            } cursor-pointer`}
                        onClick={() => setSwitchTab('archived')}
                    >
                        Archived Classes
                    </button>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4 p-4">
                    {classCards.map((classCard) => (
                        <div key={classCard.id} className="bg-gray-50 rounded-lg border border-gray-300">
                            <div className="flex justify-between p-4">
                                <div className="flex">
                                    <span className="mr-4 flex items-start justify-center text-4xl">
                                        <FaBookOpen className="" />
                                    </span>
                                    <div className="">
                                        <h2 className="text-md font-semibold">{classCard.courseCode}</h2>
                                        <p className="text-gray-700 text-sm">{classCard.description}</p>
                                        <p className="text-gray-700 text-sm">{classCard.students} students</p>
                                        <p className="text-gray-700 text-sm">{classCard.semester} {classCard.year}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <FaEllipsisV className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center text-sm gap-2">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 duration-200 cursor-pointer">
                                    View Details
                                </button>
                                <button className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200 duration-200 cursor-pointer">
                                    Manage Student
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