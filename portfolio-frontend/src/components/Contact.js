import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './Contact.css'

function Contact() {
  return (
    <div id='Contact'>
        <Container>
            <Row>
                <Col className='py-5'>
                    <h2>Have project in mind?</h2>
                    <p>
                        Get in touch with me <br/>
                        I'm always open to new opportunities as well as collaborations
                    </p>
                </Col>

                <Col>
                    <div className="contact-form" >
                            <form action="" method="get">

                                <div className="name">
                                    <label for="fname"></label>
                                    <input type="text" id="fname_input" name="firstname" placeholder="Your name.."/>
                                </div>
                                
                                <div className="email">
                                    <label for="email"></label>
                                    <input type="email" id="email_input" name="email" placeholder="E-mail Address..."/>
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
                                    <input type="submit" value="Submit" id="form-button"/>
                                </div>
                                
                            </form>
                        </div>
                </Col>
            </Row>
        </Container>
            

    </div>
  )
}

export default Contact