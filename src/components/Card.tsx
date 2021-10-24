import React from 'react';
import { Product } from '../models/product';

const Card = ({ item }: { item: Product }) => {
  return (
    <div className="card">
      <img width={350} height={362} src={item.image.url} alt="prod" />
      <p>{item.name}</p>
      <h2>{item.bred_for}</h2>
    </div>
  );
};

export default Card;
