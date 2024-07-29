import React from 'react'
import PropTypes, { string } from 'prop-types'
import './Cards.css'
import 'animate.css/animate.min.css';

function Card({title, imageSource, url, text}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__zoomIn'>
        <div className='overflow'>
            <img src={imageSource} alt='' className='card-img-top'/>
        </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                {
                    text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam possimus et necessitatibus, impedit incidunt nemo nisi in recusandae nam laudantium velit earum, quam suscipit cupiditate, cumque accusantium. Fugiat, velit numquam'
                }
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank'>
                Go to this website
            </a>
        </div>
    </div>
  )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}
export default Card