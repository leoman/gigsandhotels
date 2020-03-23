import React from 'react';

const GigResults = ({ gigs } : any) => {
  console.log(gigs);
  if(!gigs) return null;

  return (
  <div>
    Gigs
  </div>
)};

export default GigResults;