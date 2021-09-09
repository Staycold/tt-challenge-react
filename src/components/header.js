import React from 'react';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Header = ({ name, ...props }) => {

    // const options = [
    //     {
    //       name: 'Enable both scrolling & backdrop',
    //       scroll: true,
    //       backdrop: true,
    //     },
    //   ];

      
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const toggleShow = () => setShow((s) => !s);
      
    return (
      
//               <Navbar bg="primary" variant="dark">
//     <Container>
//     <Navbar.Brand href="#home">Scheduling</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#home"></Nav.Link>
//       <Nav.Link href="#features"></Nav.Link>
//       <Nav.Link href="#pricing"></Nav.Link>
//     </Nav>
//     </Container>
//   </Navbar>
      

<div className='header row'>
    <div className='headerSideBar col-2'>
    <Button variant="primary" onClick={toggleShow} className="me-2">
       <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to={`/`}>
        <img src="https://img.icons8.com/material-rounded/24/000000/home.png"/> Home
          </Link>
        </Offcanvas.Body>
        <div><p>Made with 💙 by Patrick Brodie</p></div>
      </Offcanvas>
    </div>

    <div className='headerTitle col-7'>
        <p>Scheduling</p>
    </div>

    <div className='headerIcon col-1'>
    <img src="https://img.icons8.com/ios/50/000000/thumbnail-view.png"/>
    </div>

    <div className='headerP col-2'>
    {/* <img src="https://img.icons8.com/metro/26/000000/p-lowercase.png"/> */}
    {/* <img src="https://img.icons8.com/dotty/80/000000/circled-p.png"/> */}
    <img src="https://img.icons8.com/fluency-systems-regular/36/000000/p.png"/>
    </div>
    

</div> 



    );
};

export default Header;