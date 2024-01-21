import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch the list of pets from your API endpoint
    fetch('http://localhost:8080/api/getPets')
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div>
      <h2>List of Pets</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <Link to={`/pets/${pet.Id}`}>
              {pet.Name} - {pet.Species}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pets;
