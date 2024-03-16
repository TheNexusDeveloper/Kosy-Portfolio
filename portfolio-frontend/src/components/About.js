import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import profile from '../assets/portrait1.jpg'

function About() {
  return (
    <div className="py-3 " id="About" style={{backgroundColor: "whitesmoke", }}>

    <div className="text-center py-3 mb-3">
        <h2>--- About ---</h2>
    </div>

    <Container>
        <Row>
            <Col className="py-3" lg={8} md={8} sm={12}>
                <p>
                    Hey there!🫡 My name is Kosisochukwu Henry Okeke, a software developer/Network Engineer based in Lagos, Nigeria.
                    Graduate of Computer Engineering from Madonna University Nigeria.
                    
                </p>
                    <br/>
                <p>
                   I have always been heavily invested in tech from a very young age. QBASIC was the first programming language I ever encountered in Junior High School.
                   This was followed by Java and then HTML and CSS in my final years of High school. 
                   I Started coding in 2020 during the COVID-19 lockdown. During this period, I learnt Python and JavaScript. 
                </p>
                    <br/>
                <p>
                    I am skilled in frontend development using ReactJs and Redux for state management, Django and RESTful API for backend 
                    and FIGMA for UI/UX Design.
                    In addition to coding, I'm also skilled and knowledgeable in DevOps principles and tools, Network Automation and Operations, Network Architectural Design and Network Troubleshooting. 
                </p>

            </Col>

            <Col>
                <div className="pb-5">
                    <img src={profile} alt="Kosy Okeke" width="100%"  className='s-image rounded-5 border' />
                </div>
            </Col>
        </Row>
       

        
    </Container>
</div>
  )
}

export default About