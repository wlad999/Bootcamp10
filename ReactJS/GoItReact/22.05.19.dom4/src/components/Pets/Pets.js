import React from 'react';
import infoPets from '../pets.json';

const Pets = () => (
  <>
    <div>Pets</div>
    {infoPets.map(el => (
      <div>
        <img src={el.image} alt="" />
        <p>name: {el.name}</p>
        <p>age: {el.age}</p>
        <p>gender: {el.gender}</p>
        <p>color: {el.color}</p>
        <p>description: {el.description}</p>
      </div>
    ))}
  </>
);

export default Pets;
