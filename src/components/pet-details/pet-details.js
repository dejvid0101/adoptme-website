import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdoptionOfferComponent from '../adoption-offer/adoption-offer';

const PetDetails = () => {
  const { id } = useParams();
  const redirect=useNavigate();

  // Assuming pet details are fetched from an API endpoint
  const pet = {
    id: id,
    name: 'Fluffy',
    age: 2,
    gender: 'Female',
    species: 'Cat',
    shelter: 'Rescue Shelter',
    health: 'Good',
  };

  const handleAdoptMeClick = () => {
    
    redirect("/adopter");
  };

  return (
    <div>
      <h2>Pet Details</h2>
      <p>Name: {pet.name}</p>
      <p>Age: {pet.age}</p>
      <p>Gender: {pet.gender}</p>
      <p>Species: {pet.species}</p>
      <p>Shelter: {pet.shelter}</p>
      <p>Health: {pet.health}</p>

      <AdoptionOfferComponent pet={pet}></AdoptionOfferComponent>

      <button onClick={handleAdoptMeClick}>Adopt Me</button>
    </div>
  );
};

export default PetDetails;
