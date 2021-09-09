import React, { useState } from "react";
import { useEffect } from "react";
import ContactCell from "../components/contact-card";
import SiteCell from "../components/site-cell";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function Details({ details }) {
  const id = details.id;
  const title = details.title;
  const city = details.address.city + ", " || null;
  const state = details.address.state;
  const country = details.address.country;
  const fullName = `${details.contacts.main.firstName} ${details.contacts.main.lastName}`;
  const streetInfo = details.address.street;
  const zipInfo = details.address.zipCode;
  const image = details.images[0];
  const email = details.contacts.main.email;
  const phone = details.contacts.main.phoneNumber;
  const jobTitle = details.contacts.main.jobTitle;

  return (
    <div>
      <div className="detailsSite row">
        <div className="detailsLink col-1">
          <Link to={`/`}>
            <img src="https://img.icons8.com/material/24/000000/back--v1.png" />
          </Link>
        </div>
        <div className="cardImg col-3">
          <Image
            className="listImg"
            src="http://lorempixel.com/640/480/city"
            roundedCircle
          />
        </div>
        <Card.Body className="cardText col-8">
          <Card.Title id="detSiteTitle">{title}</Card.Title>
          <Card.Text>
            <span>{`${city}${state}, ${country}. `}</span>
          </Card.Text>
          <Card.Text>
            <span>{fullName}</span>
          </Card.Text>
        </Card.Body>
      </div>

      <div>
        <Card className="detCard">
          <div className="detailsImg row">
            <div id='detImg'>
            <Card.Img variant="top" src={image} />
            </div>
          </div>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <div className="detContact row">
                <div className="detContactImg col-2">
                  <img src="https://img.icons8.com/material/24/000000/manager--v1.png" />
                </div>
                <div className="detContactText col-10">
                  <h5>{fullName}</h5>
                  <p> {jobTitle}</p>
                </div>
              </div>

              
                
                <div className="detContact row">
                <div className="detContactImg col-2">
                  <img src="https://img.icons8.com/material-outlined/30/000000/phone.png" />
                  </div>
                  <div className="detContactText col-10">
                  <p>{phone}</p>
                  </div>
                </div>
              
              <div className="detContact row">
                <div className="detContactImg col-2">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/email.png" />
                </div>
                <div className="detContactText col-10">
                <p> <a href= {"mailto:" + email}> {email} </a> </p>
                </div>
              </div>

              <div className="detContact row">
                <div className="detContactImg col-2">
                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-map-maps-and-locations-those-icons-fill-those-icons-1.png" />
                </div>
                <div className="detContactText col-10">
                
                <p>{streetInfo}</p>
                <p>{zipInfo}</p>
                <p><span>{`${city}${state}, ${country}`}</span>
                </p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
