import React, { useEffect, useState } from 'react';
import './adopterdetails.css';

const AdopterDetails = () => {
    const [adopter, setAdopter] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Password: ''
      });

      const addAdopter = (e) => {
        e.preventDefault();

        console.log(adopter);
    
        // Your API endpoint URL
        const apiUrl = 'https://example.com/api';
    
        // Make a POST request with the form data
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adopter),
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

const updateFormObject = (e) =>{
    const { name, value } = e.target;
    setAdopter({ ...adopter, [name]: value });
}

      return (
        
        <form onSubmit={addAdopter}>
        <label>
          Name:
          <input type="text" name="Name" value={adopter.Name} onChange={updateFormObject}/>
        </label>
        <br></br>

        <label>
          Phone:
          <input type="text" name="Phone" value={adopter.Phone} onChange={updateFormObject}/>
        </label>
        <br></br>
  
        <label>
          Email:
          <input type="text" name="Email" value={adopter.Email} onChange={updateFormObject}/>
        </label>
        <br></br>
  
        <label>
          Password:
          <input type="text" name="Password" value={adopter.Password} onChange={updateFormObject}/>
        </label>
        <br></br>
  
        <button type="submit">Submit</button>
      </form>
      );
};

export default AdopterDetails;