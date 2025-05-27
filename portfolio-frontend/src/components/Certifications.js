import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ccna from '../assets/ccna_large.jpg'
import meta from '../assets/meta-front-end-developer-certificate.png'
import AWS from '../assets/aws-certified-solutions-architect-associate.png'

function Certifications() {
  return (
    <div id='Cert' className='py-5'>
        <Container>
            <Row className='text-center mb-5'>
                <Col>
                    <h2>Certifications</h2>
                </Col>
            </Row>

           <Row className="text-center py-3" style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>

           <Col className='py-3'>
                <div>
                        <a href='https://www.credly.com/badges/7e241bd3-6977-4117-a726-99a60ca29e42/public_url' target='blank'>
                        <img src={AWS} alt='aws-badge' width="70%"  className='rounded-3' />
                    </a>
                </div>
            </Col>

            <Col className='py-3'>
                <div>
                    <a href='https://www.credly.com/badges/85b400b8-9bb7-450d-b26b-b6b45cc7957d/linked_in_profile' target='blank'>
                        <img src={ccna} alt='ccna' width="70%"  className='rounded-3' />
                    </a>
                    
                </div>
            </Col>

            <Col className='py-3'>
                <div>
                        <a href='https://www.credly.com/badges/cfbc700e-8fdf-40e9-8c33-47f0d8d10a51/linked_in_profile' target='blank'>
                        <img src={meta} alt='meta' width="70%"  className='rounded-3' />
                    </a>
                </div>
            </Col>

           

            {/* <Col>
                <div>
                    <img src={meta} alt='ccna' />
                </div>
            </Col> */}
           </Row>
            
        </Container>
    </div>
  )
}

export default Certifications
