import React from 'react'
import './Title.css';

const Title = (props) => {
  return (
    <div>
        <h1>{props.text}</h1>
    </div>
  )
}

export default Title