
import React from 'react';
import CustomCard from './CustomCard';
import cardsData from '../data/cardsData';

const Home = () => {
  return (
    <div>
      {cardsData.map((item) => (
        <CustomCard 
          key={item.id} 
          id={item.id} 
          title={item.title} 
          description={item.description} 
          moreDescription={item.more_description} 
          image={item.image}  
        />
      ))}
    </div>
  );
};

export default Home;
