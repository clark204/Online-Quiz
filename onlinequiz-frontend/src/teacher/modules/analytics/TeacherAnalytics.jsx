import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function TeacherAnalytics() {
    const barData = [
        { subject: 'Math', score: 85 },
        { subject: 'Science', score: 92 },
        { subject: 'English', score: 78 },
        { subject: 'History', score: 88 },
        { subject: 'Art', score: 95 },
    ];

    return (
        <div className="space-y-4 bg-gray-100 h-full w-full p-4">
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">Reports & Analytics</h1>
                    <p className="text-gray-700">Track performance and insights across all your classes</p>
                </div>
                <div className="">
                    <button className="bg-emerald-600 text-white  py-2 px-4 rounded hover:bg-emerald-700 duration-200 cursor-pointer">
                        Export Report
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Class Performance</h2>
                    <p className="text-gray-600">Average scores per class</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Quiz Analytics</h2>
                    <p className="text-gray-600">Performance trends over time</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Student Progress</h2>
                    <p className="text-gray-600">Individual student performance</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Overall Insights</h2>
                    <p className="text-gray-600">Key metrics and insights</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded">
                    <div className="">
                        <h3 className="text-xl font-semibold">Quiz Trends</h3>
                        <p className='text-gray-700'>Average scores and submission trends over time</p>
                    </div>
                    <BarChart
                        style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
                        data={barData}
                        margin={{
                            top: 20,
                            right: 0,
                            bottom: 5,
                            left: -20,
                        }}
                    >
                        <CartesianGrid strokeDasharray={[3, 3]} />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#10b981" />
                    </BarChart>
                </div>
                <div className="bg-white p-6 rounded">
                    <div className="">
                        <h3 className="text-xl font-semibold">Quiz Trends</h3>
                        <p className='text-gray-700'>Average scores and submission trends over time</p>
                    </div>
                    <BarChart
                        style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
                        data={barData}
                        margin={{
                            top: 20,
                            right: 0,
                            bottom: 5,
                            left: -20,
                        }}
                    >
                        <CartesianGrid strokeDasharray={[3, 3]} />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#10b981" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
}