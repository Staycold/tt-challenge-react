import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function SiteCell({ site }) {
  // console.log(`this ihs the {thsi site}, `, site);

  const id = site.id;
  const title = site.title;
  const city = site.address.city + ", " || null;
  const state = site.address.state;
  const country = site.address.country;
  const fullName = `${site.contacts.main.firstName} ${site.contacts.main.lastName}`;

  return (
    // <div className="siteList" class="row">
      /* <Card style={{ width: '18rem' }}> */
      /* <Card> */
      <div className="card row">
        <div className="cardImg col-3">
          <Image
            className="listImg"
            src="http://lorempixel.com/640/480/city"
            roundedCircle
          />
        </div>
        {/* <div className="cardText" class="col-10"> */}
          {/* <Card.Body xs={6} s={6} m={6} l={6}> */}
          <Card.Body className="cardText col-6"  >

          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <span>{`${city}${state}, ${country}. `}</span>
          </Card.Text>
          <Card.Text>
            <span>{fullName}</span>
          </Card.Text>
          </Card.Body>
        {/* </div> */}
        <div className="siteLink col-3">
          <Link to={`/sites/${id}`}>
            <img src="https://img.icons8.com/material-outlined/24/000000/forward.png" />
          </Link>
        </div>
      </div>
      /* </Card> */
    // </div>
  );
}
// ➡️
