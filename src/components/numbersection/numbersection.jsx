import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import KWNumber from '../numbers/number'

const KWNumberSection = () => {
  return (
    <Container className='mb-5'>
        <Row>
            <Col sm={12} lg={3}><KWNumber number={2000} name='Properties Sold' /> </Col>
            <Col sm={12} lg={3}><KWNumber number={20} name='Office Locations' /> </Col>
            <Col sm={12} lg={3}><KWNumber number={3000} name='Properties Sold' /> </Col>
            <Col sm={12} lg={3}><KWNumber number={5500} name='Properties Managed' /> </Col>
        </Row>
    </Container>
  )
}

export default KWNumberSection