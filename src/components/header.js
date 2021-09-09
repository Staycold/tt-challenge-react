import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (

    <div className="header row">
      <div className="headerSideBar col-2">
        <Button variant="primary" onClick={toggleShow} className="me-2">
          <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" />
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to={`/`}>
              <img src="https://img.icons8.com/material-rounded/24/000000/home.png" />{" "}
              Home
            </Link>
          </Offcanvas.Body>
          <div>
            <p>Made with 💙 by Patrick Brodie</p>
          </div>
        </Offcanvas>
      </div>

      <div className="headerTitle col-7">
        <p>Scheduling</p>
      </div>
      <div className="headerIcon col-1">
        <img src="https://img.icons8.com/ios/50/000000/thumbnail-view.png" />
      </div>

      <div className="headerP col-2">
        <img src="https://img.icons8.com/fluency-systems-regular/36/000000/p.png" />
      </div>
    </div>
  );
};

export default Header;
