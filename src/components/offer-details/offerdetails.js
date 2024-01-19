import React, { useEffect, useState } from 'react';
import './offerdetails.css';

const OfferDetails = ({offer}) => {
    
if(offer){

  return (
    
    <div>
    <h2>{offer.id}</h2>
    <p>Sklonište: {offer.shelter}</p>
    <p>Uvjeti: {offer.adoptionTerms}</p>
    <p>Ljubimac: {offer.pet}</p>
  </div>
  );
} else {
  return (
    <h2>Učitavanje...</h2>
  )
}
};

export default OfferDetails;