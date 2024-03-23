import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import metacert from '../assets/MetaFront-EndDeveloperCertificate_Badge20240120-29-j0ys2k_page-0001.jpg'
import netcert from '../assets/Coursera Z5D8G3RE8H5S_page-0001.jpg'
import cert from '../assets/Coursera 2B4446VFWQ8V_page-0001.jpg'

function Certifications() {
  return (
    <div id='Cert' className='py-5'>
        <Container>
            <Row className='text-center mb-5'>
                <Col>
                    <h2>Certifications</h2>
                </Col>
            </Row>

            <Row>
                <Carousel fade data-bs-theme="dark" size='md' className=''>
                    <Carousel.Item>
                        <img src={metacert} alt='certificate' width='100%'/>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={cert} alt='certificate' width='100%' />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={netcert} alt='certificate' width='100%' />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </Row>

            {/* <Row className='mb-3'>
                <Col>
                    <div>
                        <img src={metacert} alt='META-CERT' width='100%'/>
                    </div>
                    
                </Col>

                <Col className="py-5" lg={6} md={8} sm={12}>
                <p>
                    Technology has always been a niche from a very young age. I always wanted to figure out how things work and create things.
                    My very first programming language was QBASIC (LOL) which I was introduced to in 2013 then JAVA in 2014 (never went back to it), HTML and CSS in 2015, and finally python in 2018.
                    I started programming in 2020 during the COVID-19 lockdown. I used this period learning JavaScript and python
                </p>
                    <br/>
             
            </Col>
            </Row> */}

            {/* <Row>
                <Col>
                    <div>
                        <img src={netcert} alt='META-CERT' width='100%'/>
                    </div>
                    
                </Col>

                <Col className="py-5" lg={6} md={8} sm={12}>
                <p>
                    Technology has always been a niche from a very young age. I always wanted to figure out how things work and create things.
                    My very first programming language was QBASIC (LOL) which I was introduced to in 2013 then JAVA in 2014 (never went back to it), HTML and CSS in 2015, and finally python in 2018.
                    I started programming in 2020 during the COVID-19 lockdown. I used this period learning JavaScript and python
                </p>
                    <br/>
             
            </Col>
            </Row> */}
        </Container>
    </div>
  )
}

export default Certifications