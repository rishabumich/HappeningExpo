import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const Map = ({points}) => {
    const [mapRegion, setMapRegion] = useState({
        "latitude": 42.27726715190734, 
        "latitudeDelta": 0.03415826961671797, 
        "longitude": -83.73963831191361, 
        "longitudeDelta": 0.023597393932092814
      });
    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={mapRegion}>
            {points.map((point, index) => (<Marker key={index} coordinate={point} title='Marker' />))}
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
    },
});

export default Map