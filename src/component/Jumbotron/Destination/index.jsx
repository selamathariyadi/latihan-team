import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {BsArrowRightCircle} from "react-icons/bs"
import pemandanganbromo from '../../../asset/images/pemandanganbromo.jpg'
import patungborobudur from '../../../asset/images/patungborobudur.jpeg'
import pantai from '../../../asset/images/pantai.jpg'
import './style.css'
function Destinationn() {
  return (
    <div className='hero-destination'>
        <Container>
            <Row>
                <Col lg = {6} md = {12} className='px-5'>
                    <div className='left-side'>
                        <h3>Exploring Wonderful Indonesia</h3>
                        <p>At Wonderful Indonesia, we believe that travel should be an unforgettable experience, and we're dedicated to making sure that every moment you spend with us is one to remember. So why wait? Book your adventure today and discover the magic of Indonesia.</p>
                        <Button variant='Outline'>Explore Now<i className='px-3'><BsArrowRightCircle/></i></Button>
                    </div>
                </Col>
                <Col lg = {6} md = {12}>
                    <div className='right-side'>
                        <div className='border1'>
                            
                        </div>
                        <div className='border2'>
                            <img src= {pemandanganbromo} alt="" />
                        </div>
                        <div className='border3'>
                            <img src={patungborobudur} alt="" />
                        </div>
                        <div className='border4'>
                            <img src={pantai} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Destinationn