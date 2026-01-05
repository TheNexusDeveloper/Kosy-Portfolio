import React, { Component } from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'

export default class ProjectDetails extends Component {
  render() {
    return (
      <div>
         <Modal show={this.props.show} onHide={this.props.hide} fullscreen='xl-down' size='md' scrollable 
         aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row xs={1} lg={1}>
                        <Col className=''>
                            <img src={this.props.image} alt='projectImage' width='100%' fluid/>
                        </Col>

                        <Row className='p-3'>
                            
                            <Col className='ml-5'>
                                <strong>Category: {this.props.category}</strong>
                            </Col>

                            <Col className='d-flex justify-content-end'>
                                <small>{this.props.stack}</small>
                            </Col>
                        </Row>
                       

                        <Col className='px-3 mb-3'>
                            <p>
                                {this.props.desc}
                            </p>
                            
                        </Col>

                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" href={this.props.repo}>
                    Github Repo
                </Button>
                <Button variant="outline-primary" href={this.props.demo}>
                   Live Demo
                </Button>
                </Modal.Footer>
            </Modal>
      </div>
    )
  }
}
