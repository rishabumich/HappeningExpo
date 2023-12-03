import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import { LatLng } from 'react-native-maps';

export default function App() {

  const points = [
    {coordinate: {latitude: 42.27726715190734, longitude: -83.73963831191361}, label: "diag"},
    {coordinate: {latitude: 42.27704467373761, longitude: -83.74435684207712}, label: "home"}
  ];
  
  return (
    <Map points={points}/>
  );
}


