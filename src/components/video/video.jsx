import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './video.css'

const KWVideo = () => {
  return (
    <Container>
        <Row>
            <Col sm={12} lg={6} className='py-5 video-item'>
            <div className="video"><iframe width="100%" height="355"src="https://www.youtube.com/embed/D0UnqGm_miA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </Col>
            <Col sm={12} lg={6} className='d-none d-lg-flex flex-column align-items-start py-5 justify-content-center video-item'>
            <h1>Selling different <span className='blue fw-light'>Properties</span></h1>
            <p className='pe-lg-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa inventore veritatis. Ut cum blanditiis esse aut aliquid, voluptatibus laudantium aspernatur nostrum molestiae ad magnam eaque quidem, a sunt adipisci?</p>
            <Button variant='primary'>Learn More</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default KWVideo