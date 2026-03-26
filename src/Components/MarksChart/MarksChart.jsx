import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({MarksPromise}) => {
    const MarksDataRes=use(MarksPromise)
    const markData=MarksDataRes.data;
     const marksChartData=markData.map(studentData=>{
        const student={
            id:studentData.id,
            name:studentData.name,
            physics:studentData.marks.physics,
            chemistry:studentData.marks.chemistry,
            biology:studentData.marks.biology
        }
        const avg=(student.physics+student.chemistry+student.biology)/3
        student.avg=avg;
    return student;
    })
    console.log(marksChartData)
    return (
        <div>
            <BarChart width={500} height={500} data={marksChartData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"avg"} stroke='yellow'></Bar>
                <Bar dataKey={"physics"} stroke='red'></Bar>
                <Bar dataKey={"biology"} stroke='cyan'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;