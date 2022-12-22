import React from 'react';

export default function Travel(props) {
  return (
    <section>
      <img src={props.img} alt='lucknow' />
      <div className='card--element'>
        <div className='card--location'>
          <i className='fas'></i>
          <h4>{props.location}</h4>
          <a href={props.map} className='card-map' target='_blank'>
            view on google map
          </a>
        </div>
        <h2 className='card--title'>{props.title}</h2>
        <p className='card--date'>
          {props.dateStart} - {props.dateEnd}
        </p>
        <p className='card--description'>{props.description}</p>
      </div>
    </section>
  );
}
