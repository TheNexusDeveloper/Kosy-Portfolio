import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Services() {
  return (
    <div id='Services'>
        <Container>
        <Row className="text-center py-5">
            <h2>--- Some of the things I do ---</h2>
        </Row>

            <Row className="text-center py-3" style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
            <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: 'black', color: 'whitesmoke', }}>
                        <Card.Title>Core Network Design</Card.Title>
                        <Card.Subtitle>Multi-vendor</Card.Subtitle>
                        <Card.Body>
                            Design and simulate Core Network Architecture for ISPs, enterprises, and Datacenters (DCi).
                            Leveraging protocols like MPLS, BGP, OSPF, EIGRP and IS-IS to deliver resiliant, secure, and interconnected networks for your business.
                            I also implement enterprise LAN networks for SMEs.
                        </Card.Body>
                        
                    </Card>
                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: '#EDEEF1', color: 'black', }}>
                        <Card.Title>Hybrid & Cloud Networks</Card.Title>
                        <Card.Subtitle>AWS</Card.Subtitle>
                        <Card.Body>
                            Design and implement hybrid and cloud Network Architecture for Businesses with Amazon Web Services (AWS).
                            Leveraging AWS service like Direct connect, VPC, CloudFront with BGP, VPN to design and implement hybrid cloud network architectures.
                           
                        </Card.Body>
                        
                    </Card>
                </Col>

               

                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: '#0C0C0F', color: ' whitesmoke',}}>
                        <Card.Title>Web development</Card.Title>
                        <Card.Subtitle>React & Python</Card.Subtitle>
                        <Card.Body>
                            Developing Fullstack Web Applications for individuals, SMEs and organisations.
                            Leveraging the power of the world wide web to create an online presence for Businesses and individuals. 
                            Applying Software development principles for timely delivery.
                        </Card.Body>
                        
                    </Card>
                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: '#DCDDE4', color: ' black', }}>
                        <Card.Title>Application Deployment</Card.Title>
                        <Card.Subtitle>CI/CD</Card.Subtitle>
                        <Card.Body>
                            Bringing applications to production by leveraging DevOps CI/CD pipelines for an effective deployment.
                            I deploy to various platforms like AWS, Render, vercel, digital-ocean and google play console.
                            I also assist in domain name and business email account setup 
                        </Card.Body>
                        
                    </Card>
                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className="py-3 mb-5 text-center" style={{ width: '18rem', height: '22rem', backgroundColor: '#119EF4', color: ' whitesmoke', }}>
                        <Card.Title>UI/UX Design</Card.Title>
                        <Card.Subtitle>FIGMA</Card.Subtitle>
                        <Card.Body>
                           Leveraging the power of FIGMA to create intuitive User interfaces for Applications and other Software products. 
                           I develop final product's prototype following User Experience principles to make the final product intuitive and absolutely user friendly. 
                        </Card.Body>
                        
                    </Card>
                </Col>

               
            </Row>
        </Container>
    </div>
  )
}

export default Services