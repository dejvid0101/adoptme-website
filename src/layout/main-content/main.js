// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pets from '../../components/pets/pets';
import PetDetails from '../../components/pet-details/pet-details';

const MainContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pets" element={<Pets></Pets>} />
        <Route path="/pets/:id" element={<PetDetails></PetDetails>} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainContent;
