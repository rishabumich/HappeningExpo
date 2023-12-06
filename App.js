
import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import Drawer from './components/BottomDrawer';
import {View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const points = [
    {coordinate: {latitude: 42.27726715190734, longitude: -83.73963831191361}, label: "diag"},
    {coordinate: {latitude: 42.27704467373761, longitude: -83.74435684207712}, label: "home"},
    {coordinate: {latitude: 42.29208392690929, longitude: -83.71578585061047}, label: "the grove"}
  ];
  
  return (
    <View style={{width: '100%', height: '100%'}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Map />
      <Drawer points={points}/>
      </GestureHandlerRootView>
    </View>
  );
}
