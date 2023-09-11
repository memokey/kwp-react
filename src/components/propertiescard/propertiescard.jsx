import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaBed, FaCalendar, FaCar, FaChartArea, FaChevronRight, FaSquare } from 'react-icons/fa'

export const Propertiescard = () => {
  return (
    <Card className='my-3'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Card image" />
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <div className='text-primary d-flex align-items-center'>
            <FaBed /> 100
          </div>
          <div className='text-primary d-flex align-items-center'>
            <FaChartArea /> 100
          </div>
          <div className='text-primary d-flex align-items-center'>
            <FaCar /> 100
          </div>
          <div className='text-primary d-flex align-items-center'>
            <FaCalendar /> 100
          </div>
          
        </div>
        <Card.Text>
          <span className="text-primary fs-5">$99</span>/month
        </Card.Text>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Text>
        <Button variant="outline-primary" size='sm'>View on Map</Button>{' '}
        <Button variant="primary" size='sm'>Details</Button>
      </Card.Body>
    </Card>
  )
}
