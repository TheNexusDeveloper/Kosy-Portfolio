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
        <Col>
                <div className="pb-5">
                    <img src={profile} alt="Kosy Okeke" width="100%"  className='rounded-5 border' />
                </div>
            </Col>

            <Col className="py-3" lg={6} md={12} sm={12}>
                <p>
                I am a passionate and versatile engineer with expertise spanning network engineering, software development, and UI/UX design. 
                As a CCNA-certified professional with over two years of hands-on experience in ISP core networks, I specialize in optimizing network performance, deploying IPv6, and configuring access systems for secure, efficient operations. 
                My background in computer engineering has provided me with a strong foundation in problem-solving, and I thrive in environments where innovation and technical expertise are key to driving impactful results.
                    
                </p>
                    <br/>
                <p>
                    In addition to my networking expertise, I am proficient in creating scalable and user-friendly software solutions using React and Python Django. 
                    My work as a UI/UX designer complements my development skills, allowing me to craft intuitive interfaces that enhance user experiences. 
                    I enjoy combining creativity with functionality, ensuring that every project I undertake delivers value both technically and aesthetically. 
                    My focus is always on delivering solutions that align with client needs while pushing the boundaries of what technology can achieve.
                </p>
                    <br/>
                <p>
                    Beyond my professional life, I enjoy expanding my skills through hands-on projects, making music, watching superhero movies and eating food.
                </p>

            </Col>

           
        </Row>
       

        
    </Container>
</div>
  )
}

export default About