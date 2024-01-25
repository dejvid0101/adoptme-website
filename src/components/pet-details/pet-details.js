import React,{ useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdoptionOfferComponent from '../adoption-offer/adoption-offer';

const PetDetails = () => {
  const { id } = useParams();
  const redirect=useNavigate();
  const [pet, setPet] = useState(null);

    try {
      fetch(`http://localhost:8080/api/getPet?id=${id}`)
      .then(response=>response.json()).then(
response=>{
        console.log(response);
        setPet({
        id: response.id,
        Name: response.Name,
        Age: response.Age,
        Gender: response.Gender,
        Species: response.Species,
        Shelter: response.Shelter,
        Health: response.Health,
      });
    }
      )
    } catch (error) {
      console.error('Error fetching pet data:', error);
    }

  const handleAdoptMeClick = () => {
    redirect("/adopter");
    
  };

  return (
    <div>
      <h2>Pet Details</h2>
      <p>Name: {pet?.Name}</p>
      <p>Age: {pet?.Age}</p>
      <p>Gender: {pet?.Gender}</p>
      <p>Species: {pet?.Species}</p>
      <p>Shelter: {pet?.Shelter}</p>
      <p>Health: {pet?.Health}</p>

      <AdoptionOfferComponent pet={pet}></AdoptionOfferComponent>

      <button onClick={handleAdoptMeClick}>Adopt Me</button>
    </div>
  );
};

export default PetDetails;
