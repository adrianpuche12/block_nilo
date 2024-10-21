import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Detail_card = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

 
  const item = data.find((item) => item.id === parseInt(id));

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

export default Detail_card;
