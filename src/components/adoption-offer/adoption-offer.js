import React, { useEffect, useState } from 'react';
import './adoption-offer.css';

const AdoptionOfferComponent = ({ pet }) => {
    const [adoptionOffer, setOffer] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Password: '',
      adoptionTerms: ''
    });

    const adaptOffer = () =>{

      return { 
        pet: pet,
        adopter: 
        {
          Name: adoptionOffer.Name,
          Phone: adoptionOffer.Phone,
          Email: adoptionOffer.Email,
          Password: adoptionOffer.Password
        },
        adoptionTerms: adoptionOffer.adoptionTerms
      }
    }

      const addAdoptionOffer = (e) => {
        e.preventDefault();

        console.log(JSON.stringify(adaptOffer()));
    
        // Your API endpoint URL
        const apiUrl = 'http://localhost:8080/api/addAdopter';
    
        // Make a POST request with the form data
        fetch(apiUrl, {
            cache: 'no-cache',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adaptOffer()),
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data if needed
            console.log(data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
        }

const updateFormObject = (e) => {
    const { name, value } = e.target;
    setOffer({ ...adoptionOffer, [name]: value });
}

      return (
        
        <form onSubmit={addAdoptionOffer}>
        <label>
          Name:
          <input type="text" name="Name" value={adoptionOffer.Name} onChange={updateFormObject}/>
        </label>
        <br></br>

        <label>
          Phone:
          <input type="text" name="Phone" value={adoptionOffer.Phone} onChange={updateFormObject}/>
        </label>
        <br></br>
  
        <label>
          Email:
          <input type="text" name="Email" value={adoptionOffer.Email} onChange={updateFormObject}/>
        </label>
        <br></br>
  
        <label>
          Password:
          <input type="text" name="Password" value={adoptionOffer.Password} onChange={updateFormObject}/>
        </label>
        <br></br>

        <label>
          Adoption terms:
          <textarea type="text" name="adoptionTerms" value={adoptionOffer.adoptionTerms} onChange={updateFormObject}/>
        </label>
        <br></br>
  
        <button type="submit">Submit</button>
      </form>
      );
};

export default AdoptionOfferComponent;