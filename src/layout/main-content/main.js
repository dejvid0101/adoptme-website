// MainContent.js
import React, { useEffect, useState }  from 'react';
import './main.css';
import OfferDetails from '../../components/offer-details/offerdetails';
import ShelterDetails from '../../components/shelter/shelter-details/shelter-details';
import AdopterDetails from '../../components/adopter-details/adopterdetails';

const MainContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/getOffer?id=' + 1, { cache: "no-cache"});
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      {/* Main content goes here */}
      <AdopterDetails></AdopterDetails>
    </div>
  );
};

export default MainContent;
