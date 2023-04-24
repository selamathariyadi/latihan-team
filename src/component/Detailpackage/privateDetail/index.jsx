import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function privateDetail() {
  return (
    <>
    <Container className='mt-5'>
        <div className='pt-3'>
            <Row>
                <h1>Bali</h1>
                <div className='d-flex'>
                    <Col md={2}>
                        <i><span>Islan/Adventure</span></i>
                    </Col>
                    <Col md={2}>
                        <i><span>Bali, Indonesia</span></i>
                    </Col>
                    <Col md={2}>
                        <i><span>Private Trip</span></i>
                    </Col>
                </div>
            </Row>
            <Row>
                <Col>
                    <div className='img-fluid'>

                    </div>
                    <div className="img-click d-flex justify-content-between align-items-center">

                    </div>
                </Col>
                <Col>
                    <div>

                    </div>
                </Col>
            </Row>
        </div>
    </Container>
    </>
  )
}

export default privateDetail