import React, {useState} from 'react'
import { Row, Col, Container, Card, Button} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import MyProjects from '../ProjectsDB'
import ProjectDetails from './ProjectDetails'

function Projects() {

    const [tempData, setTempData] = useState([])
    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const getData = (title, image, desc, category, stack, repo, demo) => {
        let tempData = [title, image, desc, category, stack, repo, demo];
        setTempData(projects => [1, ...tempData])

        // console.log(tempData)

       return setShow(true)
    }

  return (
    <div id='Projects' className='py-3'>
        <Container>
            <Row className='text-center py-3'>
                <Col>
                    <h2>Some of my works</h2>
                </Col>
            </Row>

            {/* <Row className='py-3' xs={1} md={2} lg={3} >
                {MyProjects.map(projects => (
                    <Col key={projects._id} className='py-3 d-flex justify-content-center align-items-center'>
                        <Card  style={{ width: '20rem', height: '22rem', backgroundColor: 'black', color: ' whitesmoke' }}>
                            <Card.Img variant='top' src={projects.image} alt='project-image' height='600px'/>
                            <Card.Body>
                                <Card.Title>{projects.title}</Card.Title>
                                <Card.Text>
                                    {projects.short}
                                </Card.Text>
                                <Button variant='outline-primary' 
                                    onClick={() => getData( projects.title, projects.image, projects.category, projects.stack,
                                         projects.desc, projects.repo, projects.demo
                                         )} className='rounded-5'>
                                    Details
                                </Button>
                            </Card.Body>
                        </Card>

                        
                    </Col>
                    

                                        
                ))}

                  {
                    show === true ? <ProjectDetails title={tempData[1]} image={tempData[2]} category={tempData[3]} stack={tempData[4]} desc={tempData[5]} repo={tempData[6]} demo={tempData[7]}  hide={() => setShow(false)} show={() => setShow(true)}/>: ''
                  }  
            </Row> */}

        </Container>

        <div class="more" >
                <h2>  <a href="https://github.com/TheNexusDeveloper?tab=repositories">See more awesome projects on Github   <i class="bi bi-github"></i></a></h2>  
                    
        </div>
    </div>
  )
}

export default Projects