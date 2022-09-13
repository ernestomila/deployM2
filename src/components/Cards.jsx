import React from 'react';
import Card from './Card';
import cards from './Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      <div className={cards.cardList}>
        {
          cities.map((city, index) => (
            <Card
              key={city.id}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
          ))  
        }
      </div>
    </>
  )
};