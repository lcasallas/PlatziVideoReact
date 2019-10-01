import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/1107666/pexels-photo-1107666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
      alt='film'
    />
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
      <p className='carousel-item__details--title'>Titulo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114minutos</p>
    </div>
  </div>
);

export default CarouselItem;
