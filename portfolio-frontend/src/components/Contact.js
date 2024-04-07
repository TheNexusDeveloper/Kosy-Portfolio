import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './Contact.css'

function Contact() {
  return (
    <div>
       
        <div id='Contact'>
            <Container>
                <Row>
                    <Col className='py-5' lg={6} md={12} sm={12}>
                        <h2>Have project in mind?</h2>
                        <p>
                            Get in touch with me <br/>
                            I'm always open to new opportunities as well as collaborations
                        </p>
                    </Col>

                    <Col className='py-3 text-center' style={{fontSize: '50px',}}>
                        {/* <div className="contact-form" >
                                <form action="mailto:thenexusdeveloper@gmail.com?subject=I'd like to start a project" method="POST" >

                                    <div className="name">
                                        <label for="fname"></label>
                                        <input type="text" id="fname_input" name="firstname" placeholder="Your name.." required/>
                                    </div>
                                    
                                    <div className="email">
                                        <label for="email"></label>
                                        <input type="email" id="email_input" name="email" placeholder="E-mail Address..." required/>
                                    </div>
                                    

                                    <div className="subject">
                                        <label for="subject"></label>
                                        <select placeholder="Subject" name="subject" id="subject_input" title="subject" required>
                                        <option disabled hidden selected>Subject</option>
                                        <option>I'd like to start a project</option>
                                        <option>I'd like to ask a question</option>
                                        <option>I'd like to make a proposal</option>
                                        </select>
                                    </div>

                                    <div className="message">
                                        <label for="message"></label>
                                        <textarea id="message" name="message" placeholder="Write something.."></textarea>
                                    </div>
                                    
                                    <div className="submit">
                                        <input type="submit" value="send" id="form-button"/>
                                    </div>
                                    
                                </form>
                            </div> */}

                        <Row lg={4} md={4} sm={3} xs={3}>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://github.com/TheNexusDeveloper" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.linkedin.com/in/kosisochukwu-okeke-505490242/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://twitter.com/iamkosy11" target="_blank" rel="noreferrer"><i class="bi bi-twitter-x"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://wa.me/message/WRQORB5TZLP2O1" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.instagram.com/iamkosy11/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.discord.com/channels/iamkosy/" target="_blank" rel="noreferrer"><i class="bi bi-discord"></i></a></Col> 
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="mailto:thenexusdeveloper@gmail.com?subject=I'd like to start a project" target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a></Col> 
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
{/* 
        <div style={{ backgroundColor: 'black', color: 'whitesmoke', fontSize: '30px'}} className='py-3'>
            <Container>
                <Row className='text-center' >
                    <Col lg={12} md={12} sm={12} className='text-center pt-3'>
                        <h3>I'm also available on various social media Platforms</h3>
                    </Col>
                    
                    <Row lg={6} md={5} sm={4} xs={3}>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://github.com/TheNexusDeveloper" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.linkedin.com/in/kosisochukwu-okeke-505490242/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://twitter.com/iamkosy11" target="_blank" rel="noreferrer"><i class="bi bi-twitter-x"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://wa.me/message/WRQORB5TZLP2O1" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.instagram.com/iamkosy11/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.discord.com/channels/iamkosy/" target="_blank" rel="noreferrer"><i class="bi bi-discord"></i></a></Col> 
                    </Row>
                       
                    
                </Row>
            </Container>
        </div> */}
    </div>
    
  )
}

export default Contact