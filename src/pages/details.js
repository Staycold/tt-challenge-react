import React, { useState } from 'react';
import { useEffect } from 'react';
import ContactCell from '../components/contact-card';
import SiteCell from '../components/site-cell';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';


export default function Details({details}) {

  const id = details.id
  const title = details.title;
  const city = details.address.city + ', ' || null;
  const state = details.address.state;
  const country = details.address.country;
  const fullName = `${details.contacts.main.firstName} ${details.contacts.main.lastName}`;
  const streetInfo = details.address.street;
  const zipInfo = details.address.zipCode;
  const image = details.images[0]  
  const email = details.contacts.main.email;
  const phone = details.contacts.main.phoneNumber;
  const jobTitle = details.contacts.main.jobTitle;

  return (
<div>
<div className='listCard'>
<Link to={`/`}>
⬅️
  </Link>
    
    <Image className='listImg' src="http://lorempixel.com/640/480/city" roundedCircle />
  
</div>
<div className='siteInfo'>
  <Card style={{ width: '18rem' }}>
{/* <Card.Img className='imgContainer' variant="top" src="http://lorempixel.com/640/480/city"  /> */}
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text><span>{`${city}${state}, ${country}`}</span>
      <span>{fullName}</span>
    </Card.Text>

  </Card.Body>
  </Card>

  </div>
  <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      <h3>{fullName}</h3>
      <p> {jobTitle}</p>
      <p>
        <ul>
          <li>{phone}</li>
          <li>{email}</li>
          <li>{streetInfo}</li>
          <li>{streetInfo}
              {zipInfo}
              <span>{`${city}${state}, ${country}`}</span>
          </li>
        </ul>
      </p>

    </Card.Text>
  </Card.Body>
</Card>
</div>
</div>
 
  )
}