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
                I am a passionate and versatile Solutions Architect with deep expertise in ISP core networks, network design, and service delivery. 
                I specialize in building and optimizing high-performance network infrastructure that powers reliable internet and cloud services. 
                From core routing to customer-edge deployments, my focus is on designing scalable, secure, 
                and customer-centric solutions that meet real-world business needs.
                    
                </p>
                    <br/>
                <p>
                With a strong foundation in Linux, IT, network support, and cloud environments, I bridge the gap between infrastructure and innovation. 
                I also develop modern web applications using a tech stack which consists of React, FastApi and Django—bringing full-stack capability to my problem-solving toolkit.
                </p>
                    <br/>
                <p>
                    Beyond my professional life, outside the world of networks and code, 
                    I'm passionate about music, great food, and fictional superheroes—because every architect needs a little imagination.
                </p>

                    <br/>
                <p> 
                    <i>In an alternate universe, I'm also Batman 🦇</i>
                </p>

            </Col>

           
        </Row>
       

        
    </Container>
</div>
  )
}

export default About