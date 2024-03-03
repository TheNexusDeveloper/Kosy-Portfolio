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
            <Col className="py-3" lg={6} md={8} sm={12}>
                <p>
                    My name is Kosisochukwu Henry Okeke, a software developer based in Lagos, Nigeria.
                    Graduate of Computer Engineering from Madonna University Nigeria.
                    
                </p>
                    <br/>
                <p>
                    Technology has always been a niche from a very young age. I always wanted to figure out how things work and create things.
                    My very first programming language was QBASIC (LOL) which I was introduced to in 2013 then JAVA in 2014 (never went back to it), HTML and CSS in 2015, and finally python in 2018.
                    I started programming in 2020 during the COVID-19 lockdown. I used this period learning JavaScript and python
                </p>
                    <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde sunt sapiente ea at explicabo inventore nostrum modi nesciunt dolore facilis, aut maiores maxime tempore cupiditate incidunt voluptatem laborum. 
                    Delectus, quis?
                </p>

            </Col>

            <Col>
                <div className="pb-5">
                    <img src={profile} alt="Kosy Okeke" width="100%" />
                </div>
            </Col>
        </Row>
       

        
    </Container>
</div>
  )
}

export default About