import ClassSelection from "./ClassSelection";

export default function AssignedTask() {

    const EmptyTask = () => {
        return (
            <div className="w-full h-fit mt-14 flex flex-col justify-center items-center text-center gap-2" >
                <img
                    src="/day-dreaming.svg"
                    alt="Daydreaming"
                    className="w-64 h-40 object-contain"
                />
                <p className="text-gray-700 font-medium">
                    Nothing on your to-do list right now
                </p>
                <p className="text-gray-500 text-sm">
                    Check back later for new assignments
                </p>
            </div >
        )
    };

    return (
        <div className="h-[calc(100svh-104px)] mx-64 p-6">
            <ClassSelection />
            <EmptyTask />
        </div>
    );
}
