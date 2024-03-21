import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip, Legend,
    PieChart, Pie,  } from 'recharts';



const Chart = () => {

    const studentData = [
        { name: 'Alice', physics: 85, chemistry: 90, biology: 80, math: 75 },
        { name: 'Bob', physics: 78, chemistry: 85, biology: 70, math: 82 },
        { name: 'Charlie', physics: 92, chemistry: 88, biology: 95, math: 90 },
        { name: 'David', physics: 68, chemistry: 72, biology: 65, math: 70 },
        { name: 'Emma', physics: 75, chemistry: 80, biology: 72, math: 78 },
        { name: 'Frank', physics: 80, chemistry: 85, biology: 78, math: 83 },
        { name: 'Grace', physics: 88, chemistry: 92, biology: 85, math: 88 },
        { name: 'Hannah', physics: 77, chemistry: 80, biology: 75, math: 79 },
        { name: 'Isaac', physics: 90, chemistry: 85, biology: 92, math: 88 },
        { name: 'Jack', physics: 72, chemistry: 75, biology: 68, math: 70 },
        { name: 'Lily', physics: 85, chemistry: 90, biology: 80, math: 75 },
        { name: 'Michael', physics: 78, chemistry: 85, biology: 70, math: 82 },
        { name: 'Natalie', physics: 92, chemistry: 88, biology: 95, math: 90 },
        { name: 'Olivia', physics: 68, chemistry: 72, biology: 65, math: 70 },
        { name: 'Peter', physics: 75, chemistry: 80, biology: 72, math: 78 },
        { name: 'Quinn', physics: 80, chemistry: 85, biology: 78, math: 83 },
        { name: 'Rachel', physics: 88, chemistry: 92, biology: 85, math: 88 },
        { name: 'Samantha', physics: 77, chemistry: 80, biology: 75, math: 79 },
        { name: 'Tyler', physics: 90, chemistry: 85, biology: 92, math: 88 },
        { name: 'Uma', physics: 72, chemistry: 75, biology: 68, math: 70 }
    ];

    return (
        <div>

            <LineChart width={1200} height={400} data={studentData}>
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line type="monotone" dataKey="chemistry" stroke="#732889" />
                <Line type="monotone" dataKey="biology" stroke="#545452" />
                <Line type="monotone" dataKey="math" stroke="#965455" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>


            <br />
            <br />
            <br />
            <br />
            <br />

            <BarChart width={1800} height={400} data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="physics" fill="#F4538A" />
                <Bar dataKey="chemistry" fill="#FAA300" />
                <Bar dataKey="biology" fill="#F5DD61" />
                <Bar dataKey="math" fill="#59D5E0" />
            </BarChart>


            <br />
            <br />
            <br />
            <br />
            <br />

            <PieChart width={1800} height={1250}>
                <Pie data={studentData} dataKey="physics" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#FAEF5D" />
                <Pie data={studentData} dataKey="chemistry" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#FF004D" label />
                <Pie data={studentData} dataKey="biology" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#7E2553" />
                <Pie data={studentData} dataKey="math" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#1D2B53" label />
            </PieChart>

        </div>
    );
};

export default Chart;