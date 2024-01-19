// MainContent.js
import React, { useEffect, useState }  from 'react';
import './main.css';
import OfferDetails from '../../components/offer-details/offerdetails';
import ShelterDetails from '../../components/shelter/shelter-details/shelter-details';

const MainContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/getOffer?id=' + 2, { cache: "no-cache"});
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
      <OfferDetails offer={data}></OfferDetails>
    </div>
  );
};

export default MainContent;
