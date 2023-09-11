import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import house from '../../assets/house.svg'
import './hero.css'

export const KWHero = () => {
  return (
    <div className="hero-container">
    <Container className='mt-5'>
        <Row>
            <Col sm={12} lg={6} className='d-flex flex-column align-items-start justify-content-center hero-item animate__animated animate__backInDown'>
                <h1>K-W PROPERTY MANAGEMENT CORP.</h1>
                <h2 className='blue'>Helping you find your home.</h2>
                <div className="d-flex mt-3">
                    <Button variant='primary' className='me-2'>Tanents</Button>
                    <Button variant='outline-primary'>Browse</Button>
                </div>
            </Col>
            <Col sm={12} lg={6} className='d-flex align-items-center hero-item'>
            <img
              src={house}
              className='w-100 animate__animated animate__backInRight'
              alt="React Bootstrap logo"
            />
            </Col>
        </Row>
    </Container>
    </div>
  )
}
