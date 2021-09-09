import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
//         <div className='navbar'>
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
//         </div>

<div className='header row'>
    <div className='headerSideBar col-2'>

    </div>

    <div className='headerTitle col-7'>
        <h5>Scheduling</h5>
    </div>

    <div className='headerIcon col-1'>
    <img src="https://img.icons8.com/ios/50/000000/thumbnail-view.png"/>
    </div>

    <div className='headerP col-2'>
    <img src="https://img.icons8.com/metro/26/000000/p-lowercase.png"/>
    </div>

</div>



    );
};

export default Header;