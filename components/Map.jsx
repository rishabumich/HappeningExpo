import React, {useState, useContext} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';
import { supabase } from '../lib/supabase';
import { PindropContext } from '../lib/contexts';
import PinModeButton from './PinModeButton';
import EventDescription from './EventDescription';

const Map = () => {

  const [mapRegion, setMapRegion] = useState({
          latitude: 42.27726715190734,
           longitude: -83.73963831191361,
           latitudeDelta: 0.03415826961671797,
           longitudeDelta: 0.023597393932092814,
         });

    // useEffect(() => {
    //   const getUserLocation = async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //       console.log('Permission to access location was denied');
    //       return;
    //     }

    //     let location = await Location.getCurrentPositionAsync({
    //       accuracy: Location.Accuracy.High,
    //     });

    //     setMapRegion({
    //       latitude: 42.27726715190734,
    //       longitude: -83.73963831191361,
    //       latitudeDelta: 0.03415826961671797,
    //       longitudeDelta: 0.023597393932092814,
    //     });
    //   };

    //   getUserLocation();
    // }, []);

    // temporary code for displaying pins and adding pins
    const [eventLocations, setEventLocations] = useState([
      {coordinate: {latitude: 42.27726715190734, longitude: -83.73963831191361}, label: "diag"},
      {coordinate: {latitude: 42.27704467373761, longitude: -83.74435684207712}, label: "home"},
      {coordinate: {latitude: 42.29208392690929, longitude: -83.71578585061047}, label: "the grove"}
    ]);

    const {
      pinMode,
      setPinMode
    } = useContext(PindropContext);

    const [modalVisible, setModalVisible] = useState(true);
  
    const addPin = async (coordinate) => {
      if (pinMode) {
        setEventLocations((prevLocations) => [
          ...prevLocations,
          {coordinate: coordinate, label: "newPin"},
        ]);
        setModalVisible(true)
        setPinMode(!pinMode)
        const { data, error } = await supabase.from("events").insert([
          {
            coordinate: coordinate,
            label: "newPin",
          },
        ]);
        console.log(data, error)
      } else {
        console.log("can't place pins rn")
      }
    }
  
    return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={mapRegion}
            onPress={e => addPin(e.nativeEvent.coordinate)}
          >
          {!pinMode && eventLocations.map((point, index) => (<Marker key={index} coordinate={point.coordinate} title={point.label} />))}
          {/* <Marker
          coordinate={mapRegion}
          anchor={{ x: 0.5, y: 0.5 }}
          >
          <Image
            source={require('./LocationDot.png')}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </Marker> */}
          </MapView>
          <EventDescription visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex:1,
    },
});

export default Map