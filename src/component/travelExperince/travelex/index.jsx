import React from 'react'
import '../travelex/index.css'
import { Col, Container, Row } from 'react-bootstrap'
function Travelex() {
  return (
    <>
    <div className='travel mt-5'>
    <Container className='mt-5'>
        <Row>
           <Col className='flex-column custom-margin' md={6}>
           <h1>The Best Early</h1>
           <h2>Travel Experience</h2>
            <p>We offer a wide range of services and have many choices of travel packages to accompany your trip.
                 In addition, we also uphold corporate values.</p>
           </Col>
           <Col>
           <Row>
            <Col className='custom-marginbox d-flex justify-content-between align-items-center ms-5' xs={12} md={6}>
                <Col xs={6} md={3} className=''>
                <div className='travel-box'>
                <span><i></i>Our Ethics</span>
                <p>Prioritizing Happy Traveling, Upholding Culture</p>
                </div>
                </Col>
                <Col xs={6} md={3} className='ps-5'>
                <div className='travel-box'>
                <span><i></i>Our Ethics</span>
                <p>Prioritizing Happy Traveling, Upholding Culture</p>
                </div>
                <div className='travel-box mt-5'>
                <span><i></i>Our Ethics</span>
                <p>Prioritizing Happy Traveling, Upholding Culture</p>
                </div>
                </Col>
            </Col>
           </Row>
           </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Travelex