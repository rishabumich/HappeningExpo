
import React, {useState} from 'react';
import Map from './components/Map';
import Drawer from './components/BottomDrawer';
import {View, Button, StyleSheet} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PindropContext } from './lib/contexts';
import PinModeButton from './components/PinModeButton';

export default function App() {

  const points = [
    {coordinate: {latitude: 42.27726715190734, longitude: -83.73963831191361}, label: "diag"},
    {coordinate: {latitude: 42.27704467373761, longitude: -83.74435684207712}, label: "home"},
    {coordinate: {latitude: 42.29208392690929, longitude: -83.71578585061047}, label: "the grove"}
  ];

  const [pinMode, setPinMode] = useState(false);
  
  return (
    <PindropContext.Provider value={{pinMode,setPinMode}}>
      <View style={{width: '100%', height: '100%'}}>
        <GestureHandlerRootView style={{ flex: 1}}>
        <Map />
        <Drawer points={points}/>
        </GestureHandlerRootView>
        {/* <Button title="switch pin drop mode" onPress={() => setPinMode(!pinMode)}></Button> */}
      </View>
    </PindropContext.Provider>
  );
}