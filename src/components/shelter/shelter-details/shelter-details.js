import React, { useEffect, useState } from 'react';
import './shelterdetails.css';

const ShelterDetails = ({ shelter }) => {
  
if(shelter){

  return (
    
    <div>
    <h2>{shelter.id}</h2>
    <p>Adresa: {shelter.address}</p>
    <p>Ljubimci u posjedu: {shelter.pets}</p>
  </div>
  );
} else {
  return (
    <h2>Učitavanje...</h2>
  )
}
};

export default ShelterDetails;