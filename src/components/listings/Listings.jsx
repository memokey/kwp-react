import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import "./listings.css"

export const Listings = ({heading,description,price,img}) => {
  return (

    <Container className='p-5'>
        <Row className='main-container'>
            <Col sm={12} lg={4}>
                <Image src={img} fluid/>
            </Col>
            <Col sm={12} lg={8}>
                <h3>{heading}</h3>
                <p>{description}</p>
                <div className='d-flex justify-content-end align-items-end button-container'>
                    <h5 className="text-primary me-3 price-container">${price}/mo</h5>
                    <Button className='btn btn-primary view-button'>View</Button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
