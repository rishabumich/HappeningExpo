import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { supabase } from '../lib/supabase';

const Map = () => {

  const [mapRegion, setMapRegion] = useState(null);
  ​
    useEffect(() => {
      const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
  ​
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
  ​
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.03415826961671797,
          longitudeDelta: 0.023597393932092814,
        });
      };
  ​
      getUserLocation();
    }, []);

    // temporary code for displaying pins and adding pins
    const [eventLocations, setEventLocations] = useState([
      {coordinate: {latitude: 42.27726715190734, longitude: -83.73963831191361}, label: "diag"},
      {coordinate: {latitude: 42.27704467373761, longitude: -83.74435684207712}, label: "home"},
      {coordinate: {latitude: 42.29208392690929, longitude: -83.71578585061047}, label: "the grove"}
    ]);
  
    const addPin = async (coordinate) => {
      setEventLocations((prevLocations) => [
        ...prevLocations,
        {coordinate: coordinate, label: "newPin"},
      ]);
      const { data, error } = await supabase.from("events").insert([
        {
          coordinate: coordinate,
          label: "newPin",
        },
      ]);
      console.log(data, error)
    }

    return (
        <View style={styles.container}>
            <MapView
              style={styles.map}
              region={mapRegion}
              onPress={e => addPin(e.nativeEvent.coordinate)}
            >
            {eventLocations.map((point, index) => (<Marker key={index} coordinate={point.coordinate} title={point.label} />))}
            <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={require('./LocationDot.png')}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </Marker>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
});

export default Map