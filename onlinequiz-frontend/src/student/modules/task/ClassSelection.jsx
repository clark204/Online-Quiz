// In parent or ClassSelection component
import { useEffect, useState } from "react";

export default function ClassSelection() {
    const [selectedClass, setSelectedClass] = useState(
        localStorage.getItem("selectedClass") || ""
    );

    const handleChange = (e) => {
        setSelectedClass(e.target.value);
        localStorage.setItem("selectedClass", e.target.value);
    };

    return (
        <select
            name="class"
            id="class"
            className="border w-64 p-4 mb-2"
            value={selectedClass}
            onChange={handleChange}
        >
            <option value="">All classes</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
        </select>
    );
}
