import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../data/cardsData';  

const DetailsPage = () => {
  const { id } = useParams();
  

  const item = cardsData.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.more_description}</p>
    </div>
  );
};

export default DetailsPage;
