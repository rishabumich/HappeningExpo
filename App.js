import React, {useState, useEffect} from 'react';
import Map from './components/Map';

export default function App() {

  const points = [
    {"latitude": 42.27726715190734, "longitude": -83.73963831191361, },
    {"latitude": 42.27704467373761, "longitude": -83.74435684207712, }
  ];
  
  return (
    <Map points={points}/>
  );
}


