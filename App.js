import React, {useState, useEffect} from 'react';
import Map from './components/Map';

export default function App() {
  
  const userLocation = async() => {
    let { status } = await Location.requestForegroundPermissionsAysnc();
    if (status !== "granted"){
      console.log("Permisson to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAysnc({});
    console.log(locaiton);
    setPin({
      latitude: locaiton.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  const points = [
    { name: 'hi', id: 0, lat: 9.3, long: -4.5 },
    { name: 'hi', lat: 9.3, long: -4.5 },
    { name: 'hi', lat: 9.3, long: -4.5 },
    { name: 'hi', lat: 9.3, long: -4.5 },
  ];
  
  return (
    <Map />
    );
}


