import React from 'react'
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';


export default function ContactCell({site}) {

    const { siteId } = useParams();

    const id = site.id
    const title = site.title;
    const city = site.address.city + ', ' || null;
    const state = site.address.state;
    const country = site.address.country;
    const fullName = `${site.contacts.main.firstName} ${site.contacts.main.lastName}`;
  
    return (
      <div>
        <h4>{title}</h4>
        <span>{`${city}${state}, ${country}`}</span>
        <span>{fullName}</span>
      </div>
  
  
    )
  }