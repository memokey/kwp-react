import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './card.css'
import 'animate.css'

const TWCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`card-container mb-5 mx-2 p-4 ${isHovered ? 'animate__animated animate__pulse bg-primary' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <div className={`icon-bg p-2 ${isHovered ? 'bg-light' : ''} `}>{props.icon}</div>
        <h2 className={`blue my-2 ${isHovered ? 'text-light' : ''} `}>{props.heading}</h2>
        <p className={`${isHovered ? 'text-light' : ''} `}>{props.paragraph}</p>
        <Button variant={`${isHovered ? 'outline-light' : 'outline-primary'}`}>Learn More </Button>
    </div>
  )
}

export default TWCard