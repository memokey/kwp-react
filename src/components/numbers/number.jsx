import React, { useState } from 'react'
import './number.css'
const KWNumber = (props) => {
  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`outer p-4 mb-2 ${isHovered ? 'animate__animated animate__pulse bg-primary' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className={`text-center ${isHovered ? 'text-light' : 'text-primary'}`}>{props.number}+</h1>
      <p className={`lead text-center ${isHovered ? 'text-light' : 'text-primary'}`}>{props.name}</p>
    </div>
  )
}

export default KWNumber