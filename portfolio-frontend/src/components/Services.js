import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Services() {
  return (
    <div style={{backgroundColor: "#16213e", color: "whitesmoke"}}>
        <Container>
        <Row className="text-center py-5">
            <h2>--- Some of the things I do ---</h2>
        </Row>

            <Row className="text-center py-3" style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                <Col>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', backgroundColor: '#119EF4', color: ' whitesmoke', }}>
                        <Card.Title>Web Design</Card.Title>
                        <Card.Subtitle>FIGMA</Card.Subtitle>
                        <Card.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde sunt sapiente ea at explicabo inventore nostrum modi nesciunt dolore facilis, aut maiores maxime tempore cupiditate incidunt voluptatem laborum. 
                            Delectus, quis?
                        </Card.Body>
                        <Card.Link>Learn More</Card.Link>
                    </Card>
                </Col>

                <Col>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', backgroundColor: 'black', color: ' whitesmoke',}}>
                        <Card.Title>Web development</Card.Title>
                        <Card.Subtitle>React/Django</Card.Subtitle>
                        <Card.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde sunt sapiente ea at explicabo inventore nostrum modi nesciunt dolore facilis, aut maiores maxime tempore cupiditate incidunt voluptatem laborum. 
                            Delectus, quis?
                        </Card.Body>
                        <Card.Link>Learn More</Card.Link>
                    </Card>
                </Col>

                <Col>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', backgroundColor: '#119EH4', color: ' whitesmoke', }}>
                        <Card.Title>Network Design</Card.Title>
                        <Card.Subtitle>CISCO</Card.Subtitle>
                        <Card.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde sunt sapiente ea at explicabo inventore nostrum modi nesciunt dolore facilis, aut maiores maxime tempore cupiditate incidunt voluptatem laborum. 
                            Delectus, quis?
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