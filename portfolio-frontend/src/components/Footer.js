import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footlogo from '../assets/My Brand/NEXUS- THE BRAND [Recovered]-02.jpg'

function Footer() {
  return (
    <footer className='py-3' style={{backgroundColor: 'black', color: 'whitesmoke', textDecoration: 'none', listStyleType: 'none',}}>
        <Container>
            <Row className='py-3' >
                <Col className='mb-3 text-center' lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={12}>
                            <img src={Footlogo} alt='logo' width='300px'/>
                        </Col>
            
                        <Col>
                            <Col lg={3}><a href="https://github.com/TheNexusDeveloper" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a></Col>
                            <Col lg={3}><a href="https://www.linkedin.com/in/kosisochukwu-okeke-505490242/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a></Col>
                            <Col lg={3}><a href="https://twitter.com/iamkosy11" target="_blank" rel="noreferrer"><i class="bi bi-twitter-x"></i></a></Col>
                            <Col><a href="https://www.instagram.com/iamkosy11/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a></Col>
                       
                        </Col>
                    </Row>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <Row className='py-3'>
                        <Col className='text-center'><h3>Contact</h3></Col>
                        <Col className='py-3'>
                            <ul className=''>
                                <li><i className='bi bi-envelope-fill'></i> <span><a href='mailto:thenexusdeveloper@gmail.com'>thenexusdeveloper@gmail.com</a></span></li>
                                <li><i className='bi bi-telephone-fill'></i> <span><a href='tel:+2349053071324'>09053071324</a></span></li>
                                <li><i className='bi bi-geo-alt-fill'></i> <span><a href='https://www.google.com/maps/place/Lagos/@6.5480551,3.2839595,11z/data=!4m6!3m5!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057!16zL20vMGxuZnk'>Lagos, Nigeria</a></span></li>
                            </ul>
                        </Col>
                    </Row>
                    
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <Row className='p-3'>
                        <Col className='' lg={12}><h3>Navigation</h3></Col>
                        <Col className='py-3'>
                            <ul>
                                <li><a href="#About">About</a></li>
                                <li><a href="#Services">Services</a></li>
                                <li><a href="#Skills">Skills</a></li>
                                <li> <a href="#Projects">Projects</a></li>
                                <li><a href="#Cert">Certifications</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            
                               
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='text-center'>
                <Col>
                    <a href="https://www.flaticon.com" title="html icons">icons created by Freepik - Flaticon</a> <br/>
                    <em>Logo  styled and Designed by <a href='https://www.instagram.com/theartof_cho/'>The Art of CHO</a></em>
                    <p>&copy; Kosy Okeke 2024</p>
                </Col>
            </Row>
        </Container>
       
    </footer>
  )
}

export default Footer