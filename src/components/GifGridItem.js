import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, titulo, url}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt={titulo}></img>
        <p>{titulo}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.any.isRequired,
  id: PropTypes.string
}

export default GifGridItem;