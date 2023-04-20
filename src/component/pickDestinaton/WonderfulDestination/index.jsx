import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../WonderfulDestination/index.css'
import nusaImage from '../../../asset/images/nusa.png'
import borobudurImage from '../../../asset/images/borobudur.png'
import bromoImage from '../../../asset/images/bromo.png'
import komodoImage from '../../../asset/images/komodo.png'

function Wonderfuldestination() {
  return (
    <>
    <Container>
        <Row className='text-center mt-5'>
            <div className='wonderful-tittle'>
            <h1>Wonderful Destination</h1>
            <p>More than just destination</p>
            </div>
        </Row>
        <Row className='justify-content-center align-items-center mt-3 mx-auto'>
       <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={nusaImage} alt="Nusa" />
            <h2>Nusa Penida</h2>
            <p>Kelungkung, Bali</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={borobudurImage} alt="Borobudur" />
            <h2>Candi Bodobudur</h2>
            <p>Magelang, Jawa Tengah</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={bromoImage} alt="Bromo" />
            <h2>Gunung Bromo</h2>
            <p>Tengger, Jawa Timur</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={komodoImage} alt="Komodo" />
            <h2>Pulau Komodo</h2>
            <p>Nusa Tenggara Timur</p>
        </div>
        </Col>
        </Row>
        <Row className='justify-content-center align-items-center mt-3 mx-auto'>
       <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={nusaImage} alt="Nusa" />
            <h2>Nusa Penida</h2>
            <p>Kelungkung, Bali</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <Link>
            <img src={borobudurImage} alt="Borobudur" />
            </Link>
            <h2>Candi Bodobudur</h2>
            <p>Magelang, Jawa Tengah</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={bromoImage} alt="Bromo" />
            <h2>Gunung Bromo</h2>
            <p>Tengger, Jawa Timur</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={komodoImage} alt="Komodo" />
            <h2>Pulau Komodo</h2>
            <p>Nusa Tenggara Timur</p>
        </div>
        </Col>
        </Row>
        <Row className='justify-content-center align-items-center mt-3 mx-auto'>
       <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={nusaImage} alt="Nusa" />
            <h2>Nusa Penida</h2>
            <p>Kelungkung, Bali</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={borobudurImage} alt="Borobudur" />
            <h2>Candi Bodobudur</h2>
            <p>Magelang, Jawa Tengah</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
            <img src={bromoImage} alt="Bromo" />
            <h2>Gunung Bromo</h2>
            <p>Tengger, Jawa Timur</p>
        </div>
        </Col>
        <Col lg={3} md={6}>
        <div className='img-box mt-2'>
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

export default Wonderfuldestination