import React from 'react';
import './chart.style.css';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
// Components

// Code
const ChartComponent = ({ data }) => {
	return (
		<div className='chart-container'>
			<BarChart
				width={1000}
				height={500}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='rating' fill='#AF0326' />
			</BarChart>
		</div>
	);
};

export default ChartComponent;
