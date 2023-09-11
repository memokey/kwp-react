import React from 'react'
import { Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/logo_white.png'
import './footer.css'

const KWFooter = () => {
    return (
        <div className='footer'>
            <Container>
                <img src={logo} className='img' alt="" />
                <Row>
                    <Col sm={12} lg={3} className='mb-5 mb-lg-0'>
                        <h1 className='text-primary'>___</h1>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link eventKey="link-1" className='text-dark'>Link 1</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-dark'>Link 2</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-dark'>Link 3</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-dark'>Link 4</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-dark'>Link 4</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-dark'>Link 4</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} lg={6} className='mt-2 mt-lg-5 mb-5 mb-lg-0'>
                        <h4 className='text-primary'>Leave your message for us</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-dark'>Enter your email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-dark'>Enter your message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <button className="btn btn-primary">Submit</button>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col sm={12} lg={3}>
                        <Nav defaultActiveKey="/home" className='mt-2 mt-lg-5'>
                            <Nav.Link eventKey="link-1" className='text-primary'><FaFacebook size={25}/></Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-primary'><FaTwitter size={25}/></Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-primary'><FaInstagram size={25}/></Nav.Link>
                        </Nav>
                        <p className="text-dark lead mb-5 ms-3 mt-1">Copyright © 2023 KWProperty Inc.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KWFooter