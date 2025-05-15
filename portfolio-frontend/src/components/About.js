import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import profile from '../assets/Kosy-cartoon1.png'

function About() {
  return (
    <div className="py-3 " id="About" style={{backgroundColor: "whitesmoke", }}>

    <div className="text-center py-3 mb-3">
        <h2>--- About ---</h2>
    </div>

    <Container>
        <Row>
        <Col>
                <div className="pb-5">
                    <img src={profile} alt="Kosy Okeke" width="100%"  className='rounded-5 border' />
                </div>
            </Col>

            <Col className="py-3" lg={6} md={12} sm={12}>
                <p>
                    I have always loved to build stuff and solve problems and this passion has led me to a career in technology. <br/>
                    I am a Solutions Architect and Computer Engineering Graduate, with a background in Telecommunication Networks and Engineering, Cloud Computing environments, virtualization, software development and service delivery. <br/>
                    I am a strong advocate for the use of technology to drive innovation and create value, bridging the gap between infrastructure and innovation. 
                </p>
                    <br/>
                <p>
                    I specialize in building, designing and implementing robust solutions as well as optimizing high-performance network infrastructure that powers reliable internet and cloud services. <br/>
                    I also develop modern web applications using a tech stack which consists of React, FastApi and Django—bringing full-stack capability to my problem-solving toolkit. <br/>
                    My focus is on designing scalable, secure, and customer-centric solutions that meet real-world business needs.
                </p>
                    <br/>
                <p>
                    Beyond my professional life, outside the world of networks and code, 
                    I'm passionate about music, great food, and fictional superheroes—because every architect needs a little imagination.
                </p>
            </Col>

           
        </Row>
       

        
    </Container>
</div>
  )
}

export default About