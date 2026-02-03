import { FaClipboardUser, FaEllipsis } from "react-icons/fa6";;
import { Link } from "react-router-dom";

export default function StudentArchivedClass() {

    const cards = [
        { className: "Event-Driven Programming", section: "B", subject: "IT101", room: "Lab2", name: "Clark Angelo" },
        { className: "Event-Driven Programming", section: "B", subject: "IT102", room: "Lab2", name: "Clark Angelo" },
        { className: "Event-Driven Programming", section: "B", subject: "IT103", room: "Lab2", name: "Clark Angelo" },
        { className: "Event-Driven Programming", section: "B", subject: "IT104", room: "Lab2", name: "Clark Angelo" },
        { className: "Event-Driven Programming", section: "B", subject: "IT105", room: "Lab2", name: "Clark Angelo" },
    ]

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 p-4 gap-6">
            {cards.map((card) => {
                return (
                    <div className="bg-white min-h-64 flex flex-col justify-between hover:shadow-xl rounded-xl">
                        <div className="h-[40%] w-full bg-accent rounded-t-xl px-4 pt-4">
                            <div className="hover:underline text-gray-50 truncate">
                                <Link className=" text-xl font-semibold whitespace-nowrap hover:underline">{card.className}</Link>
                                <p className="text-md">{card.section}</p>
                            </div>

                            <div className="flex justify-between mt-1">
                                <p className="text-sm text-gray-100">{card.name}</p>
                                <div className="h-16 w-16 border bg-amber-400 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="h-24 px-4">
                            <a href="" className="text-blue-500 font-medium hover:bg-blue-100 p-2 rounded-full">See your assignments</a>
                        </div>
                        <div className="w-full bg-amber-200 h-8 rounded-b-xl">
                            <ul className="float-right text-xl flex items-center p-1 mr-4 gap-4">
                                <li className="cursor-pointer"><FaClipboardUser /></li>
                                <li className="cursor-pointer"><FaEllipsis /></li>
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}