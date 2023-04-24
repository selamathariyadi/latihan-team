import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import aboutusimage from '../../../asset/images/register_login.png'

import './style.css'
import { BsArrowRightCircle } from 'react-icons/bs'
function Aboutus() {
  return (
    <div className='aboutus'>
        <Container>
            <Row>
                <Col lg = {6} className='px-5'>
                <div className='left-side'>
                    <h3>Travelark</h3>
                    <p>Travelark is a technology company that provides a comprehensive suite of services and solutions to travel agents and tour operators. Based in Indonesia, the company was founded with the mission of revolutionizing the travel industry by leveraging the latest technologies and innovative ideas.</p>
                    <Button variant='Outline'>Find out who we are<i className='px-3'><BsArrowRightCircle/></i></Button>
                </div>
                </Col>
                <Col lg = {6}>
                    <div className='right-side'>
                        <div className='border1'></div>
                        <div className='border2'>
                            <img src={aboutusimage} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Aboutus