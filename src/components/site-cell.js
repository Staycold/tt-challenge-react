import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';

export default function SiteCell({site}) {
  // console.log(`this ihs the {thsi site}, `, site);

  const id = site.id
  const title = site.title;
  const city = site.address.city + ', ' || null;
  const state = site.address.state;
  const country = site.address.country;
  const fullName = `${site.contacts.main.firstName} ${site.contacts.main.lastName}`;

  return (
    <div className='siteList'>
      <div className='listCard'>
          <Image className='listImg' src="http://lorempixel.com/640/480/city" roundedCircle />
      </div>
      <div className='siteInfo'>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text><span>{`${city}${state}, ${country}. `}</span>
            <span>{fullName}</span>
          </Card.Text>
        </Card.Body>
        </Card>
      </div>
      <Link to={`/sites/${id}`}>➡️</Link>
    </div>
  );
};