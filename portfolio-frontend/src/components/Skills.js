import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MySkills from '../MySkills'
import './Skills.css'
// import html from '../assets/html-5.png'

function Skills() {
  return (
    <div id='Skills' style={{backgroundColor: "#16213e", color: "whitesmoke"}}>
        <Container>
            <Row className="text-center py-3">
                <h2>--- My Tech Stack and Tools ---</h2>
            </Row>

            <Row className="text-center py-3" lg={6} md={5} sm={4} xs={3}>
                {MySkills.map(skills => (
                    <Col sm={4} md={3} lg={2} className='py-5'>
                       <img src={skills.image} alt='skill' className='skill-image' />
                    </Col>
                ))}                
            </Row>
        </Container>
       
    </div>
  )
}

export default Skills