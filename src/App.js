import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import MovieComponent from './Components/Movie/movie.component';
import ChartComponent from './Components/Chart/chart.component';
import LoadingComponent from './Components/Loading/loading.component';

// Code
const App = () => {
	const [movies, setMovies] = useState([]);
	const [isChartRendering, setChartRendering] = useState(false);
	useEffect(async () => {
		let results = await Promise.all([
			fetch('https://api.tvmaze.com/shows/1').then((res) => res.json()),
			fetch('https://api.tvmaze.com/shows/2').then((res) => res.json()),
			fetch('https://api.tvmaze.com/shows/3').then((res) => res.json()),
		]);
		setMovies([...results]);
	}, []);

	return (
		<div className='container'>
			{movies.length > 0 ? (
				<>
					<div className='switch-container'>
						<button
							onClick={() => setChartRendering(false)}
							className={`switch-btn ${
								!isChartRendering ? 'selected-btn' : ''
							}`}
						>
							Movies
						</button>
						<button
							onClick={() => setChartRendering(true)}
							className={`switch-btn ${isChartRendering ? 'selected-btn' : ''}`}
						>
							Chart
						</button>
					</div>
					{isChartRendering ? (
						<ChartComponent
							data={movies.map((el) => {
								return { name: el.name, rating: el.rating.average };
							})}
						/>
					) : (
						<div className='movies-wrapper'>
							{movies.map((movie, idx) => (
								<MovieComponent key={idx} {...movie} />
							))}
						</div>
					)}
				</>
			) : (
				<LoadingComponent />
			)}
		</div>
	);
};
export default App;
