import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
 const resultData=[
    {
      "id": 1,
      "name": "Rahim",
      "physics": 85,
      "chemistry": 78,
      "biology": 88,
      "total": 251,
      "average": 83.67,
      "grade": "A"
    },
    {
      "id": 2,
      "name": "Karim",
      "physics": 72,
      "chemistry": 70,
      "biology": 68,
      "total": 210,
      "average": 70,
      "grade": "B"
    },
    {
      "id": 3,
      "name": "Ayesha",
      "physics": 90,
      "chemistry": 92,
      "biology": 95,
      "total": 277,
      "average": 92.33,
      "grade": "A+"
    },
    {
      "id": 4,
      "name": "Nusrat",
      "physics": 65,
      "chemistry": 60,
      "biology": 70,
      "total": 195,
      "average": 65,
      "grade": "C"
    },
    {
      "id": 5,
      "name": "Sohan",
      "physics": 80,
      "chemistry": 85,
      "biology": 82,
      "total": 247,
      "average": 82.33,
      "grade": "A"
    },
    {
      "id": 6,
      "name": "Tanvir",
      "physics": 55,
      "chemistry": 58,
      "biology": 60,
      "total": 173,
      "average": 57.67,
      "grade": "D"
    },
    {
      "id": 7,
      "name": "Mim",
      "physics": 88,
      "chemistry": 84,
      "biology": 90,
      "total": 262,
      "average": 87.33,
      "grade": "A"
    },
    {
      "id": 8,
      "name": "Arif",
      "physics": 70,
      "chemistry": 75,
      "biology": 72,
      "total": 217,
      "average": 72.33,
      "grade": "B"
    },
    {
      "id": 9,
      "name": "Jannat",
      "physics": 95,
      "chemistry": 93,
      "biology": 97,
      "total": 285,
      "average": 95,
      "grade": "A+"
    },
    {
      "id": 10,
      "name": "Rafi",
      "physics": 60,
      "chemistry": 65,
      "biology": 62,
      "total": 187,
      "average": 62.33,
      "grade": "C"
    }
 ]

const ResultChart = () => {
    return (
        <div className='mr-5'>
            <LineChart width={1000} height= {800}  data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"physics"} stroke='green'></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
                <Line dataKey={"biology"} stroke='yellow'></Line>

            </LineChart>
           
        </div>
    );
};

export default ResultChart;