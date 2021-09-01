import React from 'react';

export default function SiteCell({site}) {

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