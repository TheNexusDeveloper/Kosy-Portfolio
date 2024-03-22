import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footlogo from '../assets/My Brand/NEXUS- THE BRAND [Recovered]-02.jpg'

function Footer() {
  return (
    <footer className='py-3' style={{backgroundColor: 'black', color: 'whitesmoke', textDecoration: 'none', listStyleType: 'none',}}>
        <Container>
            <Row className='py-3' >
                <Col className='mb-3 text-center' lg={4} md={12} sm={12}>
                    <Row>
                        <Col lg={12}>
                            <img src={Footlogo} alt='logo' width='100%'/>
                        </Col>
                    </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Row className='p-3'>
                        <Col className='' lg={12}><h3>Contact</h3></Col>
                        <Col className='py-3'>
                            
                                <Col className='py-2'><i className='bi bi-envelope-fill'></i> <span><a href='mailto:thenexusdeveloper@gmail.com'>thenexusdeveloper@gmail.com</a></span></Col>
                                <Col className='py-2'><i className='bi bi-telephone-fill'></i> <span><a href='tel:+2349053071324'>09053071324</a></span></Col>
                                <Col className='py-2'><i className='bi bi-geo-alt-fill'></i> <span><a href='https://www.google.com/maps/place/Lagos/@6.5480551,3.2839595,11z/data=!4m6!3m5!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057!16zL20vMGxuZnk'>Lagos, Nigeria</a></span></Col>
                        </Col>
                    </Row>
                    
                </Col>

                {/* <hr/> */}

                <Col lg={4} md={6} sm={12}>
                    <Row className='p-3'>
                        <Col className='' lg={12}><h3>Navigation</h3></Col>
                        <Col className='py-3'>
                           
                                <Col className='py-2'><a href="#About">About</a></Col>
                                <Col className='py-2'><a href="#Services">Services</a></Col>
                                <Col className='py-2'><a href="#Skills">Skills</a></Col>
                                <Col className='py-2'> <a href="#Projects">Projects</a></Col>
                                <Col className='py-2'><a href="#Cert">Certifications</a></Col>
                                <Col className='py-2'><a href="#Contact">Contact</a></Col>
          
                        </Col>
                    </Row>
                </Col>

              
            </Row>
            <hr/>
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