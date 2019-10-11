import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';
import removeIcon from '../assets/static/removeIcon.png';

const CarouselItem = props => {
	const { id, cover, title, year, contentRating, duration, isList } = props;

	const handleSetFavorite = () => {
		props.setFavorite({
			id,
			cover,
			title,
			year,
			contentRating,
			duration,
		});
	};

	const handleDeleteFavorite = itemId => {
		props.deleteFavorite(itemId);
	};

	return (
		<div className='carousel-item'>
			<img className='carousel-item__img' src={cover} alt={title} />
			<div className='carousel-item__details'>
				<div>
					<Link to={`/player/${id}`}>
						<img
							className='carousel-item__details--icon'
							src={playIcon}
							alt='reproducir'
						/>
					</Link>

					{isList ? (
						<img
							className='carousel-item__details--icon'
							src={removeIcon}
							alt='eliminar'
							onClick={() => handleDeleteFavorite(id)}
						/>
					) : (
						<img
							className='carousel-item__details--icon'
							src={plusIcon}
							alt='agregar'
							onClick={handleSetFavorite}
						/>
					)}
				</div>
				<p className='carousel-item__details--title'>{title}</p>
				<p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</div>
	);
};

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
};

export default connect(
	null,
	mapDispatchToProps
)(CarouselItem);
