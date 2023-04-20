import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import imageb1 from '../../../asset/images/b1.jpg'
import { BsArrowRightCircle } from 'react-icons/bs'
import './style.css'
function Discovery() {
  return (
    <div className='hero'>
        <Container className='mt-5'>
              <Row>
                <Col md={8} className='left-hero'>
                  <div className="content-box">
                  <h1>Exploring Wonderful Indonesia</h1>
                          <p>
                              At Wonderful Indonesia, we believe that travel should be an unforgettable experience, and we're dedicated to making sure that every moment you spend with us is one to remember. So why wait? Book your adventure today and discover the magic of Indonesia.
                          </p>
                          <Button variant='outline'>Explore Now<i className='px-3'><BsArrowRightCircle/></i></Button>
                  </div>
                </Col>
                <Col md={4} className='right-hero'>
                  <div className='banner'>
                    <img src={imageb1} alt="" />
                  </div>
                  <div className='banner1'>
                  <img src={imageb1} alt="" />
                  </div>
                </Col>
              </Row>
            
        </Container>
    </div>
  )
}

export default Discovery