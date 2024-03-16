import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import './Header.css';
import logo from '../assets/kosyLogo3.png'

function Header() {
    // const [linkColor, setLinkColor] = useState('dark');
    const [navbarBg, setNavbarBg] = useState('transparent');
    // const [isMobile, setIsMobile] = useState('')
    const [margin, setMargin] = useState('20px');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollThreshold = 20; // Adjust the threshold as needed

        if (scrollY > scrollThreshold) {
        setNavbarBg('black');
        // setLinkColor('dark');
        setMargin('0px');

        } else {
        setNavbarBg('transparent');
        // setLinkColor('dark');
        setMargin('20px');
        
        }

    };

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return(
            window.addEventListener('scroll', handleScroll)
        )
    })
  return (
    
    <div style={{width: '100%',}}>
        <Navbar collapseOnSelect expand="lg" fixed='top'  bg={navbarBg}  variant='dark' className="mb-3" style={{   }}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt='Kosy Logo' width='120px'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand" placement="start"  aria-labelledby='offcanvasNavbar-expand' data-bs-theme="dark">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                            <img src={logo} alt='Kosy Logo' width='150px'/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="px-3 me-auto">
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                            <Nav.Link href="#Cert">Certifications</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className='px-3'>
                            <Nav.Link href="https://github.com/TheNexusDeveloper" target="_blank" rel="noopener"><i class="bi bi-github"></i></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/kosisochukwu-okeke-505490242/" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i></Nav.Link>
                            <Nav.Link href="https://twitter.com/iamkosy11" target="_blank" rel="noopener"><i class="bi bi-twitter-x"></i></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/iamkosy11/" target="_blank" rel="noopener"><i class="bi bi-instagram"></i></Nav.Link>
                            
                        </Nav>
                    </Offcanvas.Body>
                
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    </div>
  )
}

export default Header