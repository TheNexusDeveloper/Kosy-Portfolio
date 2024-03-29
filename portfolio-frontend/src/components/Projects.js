import React from 'react'
import { Row, Col, Container, Nav } from 'react-bootstrap'
// import { HashRouter as Router, Route} from 'react-router-dom'
import web from './WebProjects'
import mobile from './MobileProjects'
import network from './NetworkProjects'

function Projects() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div id='Projects' className='py-3'>
        <Container>
            <Row className='text-center py-3'>
                <Col>
                    <h2>Some of my works</h2>
                </Col>
            </Row>

            <Row>
                <Col className='py-3'>
                    <Nav className="justify-content-center" variant="pills" defaultActiveKey="#/home">
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="#/home">
                            Web Apps
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" title="Item" href='/mobile-projects'>
                            Mobile Apps
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" href='/network-projects'>
                            Network Designs 
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>

            <Row className='py-3'>
                <Col>
                    <h1>Coming Soon...</h1>
                    <h2>Watch this space for updates</h2>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Projects