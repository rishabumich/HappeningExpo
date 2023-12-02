import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    "latitude": 42.27726715190734, 
    "latitudeDelta": 0.03415826961671797, 
    "longitude": -83.73963831191361, 
    "longitudeDelta": 0.023597393932092814
  });
  const userLocation = async() => {
    let { status } = await Location.requestForegroundPermissionsAysnc();
    
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
