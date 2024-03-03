import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Projects() {
  return (
    <div id='Projects' className='py-3' style={{backgroundColor: "#16213e", color: "whitesmoke"}}>
        <Container>
            <Row className='text-center py-3'>
                <Col>
                    <h2>Some of my works</h2>
                </Col>
            </Row>

            <Row className='py-3'>
                <Col>
                    <h1>Coming Soon...</h1>
                    <h2>Watch this space for updates</h2>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Projects