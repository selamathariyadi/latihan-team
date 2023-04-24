import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

import '../ourPackage/index.css'
import { Link } from 'react-router-dom'


function ourPackage() {
  return (
    <>
    <Container>
        <Row>
            <Col className='mt-5 text-center'>
                <div className='our-tittle'>
                    <h1>Our Package</h1>
                    <p className='color-text'>More than one destination you will visit</p>       
                </div>
            </Col>
        </Row>
        <Row className='g-4'>
            <Col xs={12} md={6}>
            <Link to={'/Privatetrip'} >
                <div className='box-package color-bg px-5 py-3'>
                    <div className='title-package'>
                    <span className='color-text'>1st Package</span>
                    <h3>Private Trip</h3>
                    </div>
                    <p className='mt-5'>Enjoy the luxury of having your own private guide, who will take you to hidden 
                        gems and off-the-beaten-path locations that you won't find in any guidebook.
                    </p>
                </div>
                </Link>
            </Col>
            <Col xs={12} md={6}>
                <Link to='/OpenTrip'>
                <div className='box-package color-bg-2 px-5 py-3'>
                    <div className='title-package'>
                    <span>2nd Package</span>
                    <h3 className='color-text'>Open Trip</h3>
                    </div>
                    <p className='mt-5'>With an open trip, you'll have the opportunity to connect with 
                        travelers from all over the world, creating lifelong friendships and unforgettable memories. 
                    </p>
                </div>
                </Link>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ourPackage