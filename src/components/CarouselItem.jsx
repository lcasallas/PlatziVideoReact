import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
	<div className='carousel-item'>
		<img className='carousel-item__img' src={cover} alt={title} />
		<div className='carousel-item__details'>
			<div>
				<img
					className='carousel-item__details--icon'
					src={playIcon}
					alt='reproducir'
				/>
				<img
					className='carousel-item__details--icon'
					src={plusIcon}
					alt='agregar'
				/>
			</div>
			<p className='carousel-item__details--title'>{title}</p>
			<p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
		</div>
	</div>
);

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};

export default CarouselItem;
