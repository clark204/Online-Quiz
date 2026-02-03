import { FaChevronDown, FaChevronUp, FaClipboardList } from "react-icons/fa";
import ClassSelection from "./ClassSelection";

/* Empty state should be a real component */
function EmptyTask() {
    return (
        <div className="w-full mt-14 flex flex-col items-center text-center gap-2">
            <img
                src="/done.svg"
                alt="No completed tasks"
                className="w-64 h-40 object-contain"
            />
            <p className="text-gray-700 font-medium">
                Nothing on your to-do list right now
            </p>
            <p className="text-gray-500 text-sm">
                Check back later for new assignments
            </p>
        </div>
    );
}

export default function DoneTask() {
    const sections = [
        { label: "This week", count: 0, expanded: false },
        { label: "Last week", count: 0, expanded: false },
        { label: "Earlier", count: 1, expanded: true }
    ];

    const hasTasks = sections.some(section => section.count > 0);

    return (
        <div className="h-[calc(100svh-104px)] py-6 space-y-4">
            <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
                <ClassSelection />

                {sections.map(({ label, count, expanded }) => (
                    <div key={label}>
                        <div className="flex items-center justify-between h-12">
                            <p className="font-semibold text-xl text-gray-600">
                                {label}
                            </p>
                            <div className="flex items-center gap-4">
                                <span className={count ? "text-blue-500 font-medium" : ""}>
                                    {count}
                                </span>
                                <span className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                                    {expanded ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                        </div>

                        {expanded && label === "Earlier" && (
                            <div className="flex items-center p-4 rounded-xl hover:shadow-lg border border-transparent hover:border-gray-300 cursor-pointer">
                                <span className="flex items-center justify-center text-2xl mr-4 h-10 w-10 bg-gray-300 rounded-full">
                                    <FaClipboardList />
                                </span>

                                <div className="flex justify-between w-full gap-4">
                                    <div className="text-gray-700 truncate">
                                        <p className="text-gray-900 font-medium truncate">
                                            Group Final Requirements
                                        </p>
                                        <p className="text-sm">
                                            IT 108 Data Structure and Algorithm
                                        </p>
                                    </div>

                                    <div className="text-gray-700 text-right text-sm whitespace-nowrap">
                                        <p className="text-gray-500 font-medium">
                                            Wednesday, Dec 3, 2025
                                        </p>
                                        <i>Not accepting work</i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {!hasTasks && <EmptyTask />}
            </div>
        </div>
    );
}
