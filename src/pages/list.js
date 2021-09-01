import React, { useState } from 'react';
import { useEffect } from 'react';
import SiteCell from '../components/site-cell';

export default function List({sites}) {

  return (
    <div>
    {sites.map((site, index) => { 
      return <SiteCell site={site} key={index}/>
      })}
    </div>
  )
}