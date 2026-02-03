import { useEffect, useState } from "react";
import AssignedTask from "./AssignedTask";
import MissingTask from "./MissingTask";
import DoneTask from "./DoneTask";

export default function StudentTask() {
    const [selectTask, setSelectTask] = useState(() => {
        const savedState = localStorage.getItem("selectedTask");
        return savedState ? JSON.parse(savedState) : "assigned";
    });

    useEffect(() => {
        localStorage.setItem("selectedTask", JSON.stringify(selectTask));
    }, [selectTask]);

    return (
        <div>
            <nav className="h-12 bg-white border-b border-gray-300">
                <ul className="flex items-center px-6 h-full font-medium text-gray-800">
                    <li
                        onClick={() => setSelectTask("assigned")}
                        className="relative cursor-pointer flex items-center justify-center p-4 h-full"
                    >
                        <span
                            className={`font-medium ${selectTask === "assigned" ? "text-blue-500" : "text-gray-800"
                                }`}
                        >
                            Assigned
                        </span>

                        {selectTask === "assigned" && (
                            <div className="absolute bottom-0 h-1 w-full bg-blue-500 rounded-t-full" />
                        )}
                    </li>

                    <li
                        onClick={() => setSelectTask("missing")}
                        className="relative cursor-pointer flex items-center justify-center p-4 h-full"
                    >
                        <span
                            className={`font-medium ${selectTask === "missing" ? "text-blue-500" : "text-gray-800"
                                }`}
                        >
                            Missing
                        </span>

                        {selectTask === "missing" && (
                            <div className="absolute bottom-0 h-1 w-full bg-blue-500 rounded-t-full" />
                        )}
                    </li>

                    <li
                        onClick={() => setSelectTask("done")}
                        className="relative cursor-pointer flex items-center justify-center p-4 h-full"
                    >
                        <span
                            className={`font-medium ${selectTask === "done" ? "text-blue-500" : "text-gray-800"
                                }`}
                        >
                            Done
                        </span>

                        {selectTask === "done" && (
                            <div className="absolute bottom-0 h-1 w-full bg-blue-500 rounded-t-full" />
                        )}
                    </li>
                </ul>
            </nav>
            {
                selectTask === "assigned" ? (
                    <AssignedTask />
                ) : selectTask === "missing" ? (
                    <MissingTask />
                ) : selectTask === "done" ? (
                    <DoneTask />
                ) :
                    null
            }
        </div>
    );
}
