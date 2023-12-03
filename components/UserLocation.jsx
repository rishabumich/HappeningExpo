import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


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