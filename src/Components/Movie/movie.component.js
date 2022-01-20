import React from 'react';
import './movie.style.css';

// Code
const MovieComponent = ({ image: { original }, name, genres, summary }) => {
	const removeTagsFromSummary = (summaryText = '') => {
		return summaryText.replace(/<[^>]+>/g, '');
	};

	return (
		<div className='movie-container'>
			<img src={original} className='movie-poster' alt={name} />
			<p className='movie-title'>{name}</p>
			<div className='movie-genres'>
				{genres.map((genre, idx) => (
					<label className='genre' key={idx}>
						{genre}
					</label>
				))}
			</div>
			<div className='movie-description'>{removeTagsFromSummary(summary)}</div>
		</div>
	);
};

export default MovieComponent;
