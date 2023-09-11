import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TWCard from '../card/card'
import { FaHome, FaHouseDamage } from 'react-icons/fa';

const KWServices = () => {
  return (
    <Container>
        <Row>
            <Col sm={12} lg={4}>
                <h1>OUR <span className="blue">SERVICES</span></h1>
                <h4>QUALITY, TRUST, EASY</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos in molestias quibusdam explicabo nulla porro? Accusamus vel ea, neque voluptates sed quae est illo impedit sapiente, vitae, eaque odit?</p>
                <Button variant='primary'>Consultation</Button>
            </Col>
            <Col sm={12} lg={8} className='mt-5 mt-lg-0'>
                <Row>
                    <Col sm={12} lg={6}>
                        <TWCard icon={<FaHouseDamage size={50} color='#044dac'/>} heading="Consultant" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos in molestias quibusdam explicabo nulla porro?"/>

                        <TWCard icon={<FaHome size={50} color='#044dac'/> }heading="Rental" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos in molestias quibusdam explicabo nulla porro?"/>
                    </Col>
                    <Col sm={12} lg={6} className='mt-lg-5'>
                         <TWCard  icon={<FaHouseDamage size={50} color='#044dac'/>}heading="Consultant" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos in molestias quibusdam explicabo nulla porro?"/>

                        <TWCard  icon={<FaHome size={50} color='#044dac'/>}heading="Tenant" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos in molestias quibusdam explicabo nulla porro?"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default KWServices