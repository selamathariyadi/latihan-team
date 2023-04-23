import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../MostDestination/index.css'
import nusaImage from '../../../asset/images/nusa.png'
import borobudurImage from '../../../asset/images/borobudur.png'
import bromoImage from '../../../asset/images/bromo.png'
import komodoImage from '../../../asset/images/komodo.png'

function Mostpick() {
  return (
    <>
    <Container>
        <Row className='justify-content-between align-items-center'>
            <Col>
            <div className='most-title'>
            <p>Recommend</p>
            <h1>Most Picked Destination</h1>
            </div>
            </Col>
            <Col>
            <div className='most-button'>
            <Link className='float-end'>
            <button className='btn-normal'>See all</button>
            </Link>
            </div>
            </Col>
        </Row>
        <Row className='justify-content-center align-items-center mt-3 mx-auto'>
       <Col xs={6} lg={3} md={6}>
        <div className='img-box mt-2 px-3'>
            <img src={nusaImage} alt="Nusa" />
            <h2>Nusa Penida</h2>
            <p>Kelungkung, Bali</p>
        </div>
        </Col>
        <Col xs={6} lg={3} md={6}>
        <div className='img-box mt-2 px-3'>
            <img src={borobudurImage} alt="Borobudur" />
            <h2>Candi Bodobudur</h2>
            <p>Magelang, Jawa Tengah</p>
        </div>
        </Col>
        <Col xs={6} lg={3} md={6}>
        <div className='img-box mt-2 px-3'>
            <img src={bromoImage} alt="Bromo" />
            <h2>Gunung Bromo</h2>
            <p>Tengger, Jawa Timur</p>
        </div>
        </Col>
        <Col xs={6} lg={3} md={6}>
        <div className='img-box mt-2 px-3'>
            <img src={komodoImage} alt="Komodo" />
            <h2>Pulau Komodo</h2>
            <p>Nusa Tenggara Timur</p>
        </div>
        </Col>
        </Row>
    </Container>
    </>
  )
}

export default Mostpick