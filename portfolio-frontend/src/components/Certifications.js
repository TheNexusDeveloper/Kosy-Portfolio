import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import metacert from '../assets/MetaFront-EndDeveloperCertificate_Badge20240120-29-j0ys2k_page-0001.jpg'
import netcert from '../assets/Coursera Z5D8G3RE8H5S_page-0001.jpg'

function Certifications() {
  return (
    <div id='Cert' className='py-5' style={{backgroundColor: "#16213e", color: "whitesmoke"}}>
        <Container>
            <Row className='text-center mb-5'>
                <Col>
                    <h2>Certifications</h2>
                </Col>
            </Row>
            <Row className='mb-3'>
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
            </Row>

            <Row>
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
            </Row>
        </Container>
    </div>
  )
}

export default Certifications