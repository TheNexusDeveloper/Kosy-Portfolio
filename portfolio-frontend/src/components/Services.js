import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Services() {
  return (
    <div id='Services' style={{backgroundColor: "#16213e", color: "whitesmoke"}}>
        <Container>
        <Row className="text-center py-5">
            <h2>--- Some of the things I do ---</h2>
        </Row>

            <Row className="text-center py-3" style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: '#119EF4', color: ' whitesmoke', }}>
                        <Card.Title>Web Design</Card.Title>
                        <Card.Subtitle>FIGMA</Card.Subtitle>
                        <Card.Body>
                           Leveraging the power of FIGMA to create intuitive User interfaces for Applications and other Software products. 
                           I develop final product's prototype following User Experience principles to make the final product intuitive and absolutely user friendly. 
                        </Card.Body>
                        <Card.Link>Learn More</Card.Link>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: 'black', color: ' whitesmoke',}}>
                        <Card.Title>Web development</Card.Title>
                        <Card.Subtitle>React/Django</Card.Subtitle>
                        <Card.Body>
                            Developing Fullstack Web Applications for individuals, SMEs and organisations.
                            Leveraging the power of the world wide web to create an online presence for Businesses and individuals. 
                            Applying Software development principles for timely delivery.
                        </Card.Body>
                        <Card.Link>Learn More</Card.Link>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: '#119EH4', color: ' black', }}>
                        <Card.Title>Network Design</Card.Title>
                        <Card.Subtitle>CISCO</Card.Subtitle>
                        <Card.Body>
                            Designing and simulating Network Architecture for Small and Medium enterprises.
                            Leveraging the power of CISCO packet tracer to determine to best architecture and security policies for your business 
                            to enable to smooth running of daily activities involving internet Operations. 
                        </Card.Body>
                        <Card.Link>Learn More</Card.Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services