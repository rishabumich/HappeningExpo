import React, {useContext} from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { PindropContext } from '../lib/contexts';

const PinModeButton = () => {
    const {
        pinMode,
        setPinMode
        } = useContext(PindropContext);
  return (
   <React.Fragment>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => setPinMode(!pinMode)}>
      <View>
        <Image
          source={require('../assets/add.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
   </React.Fragment>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    zIndex: 40,
    position: 'absolute',
    top: 6, // Adjust the top value as needed
    left: 40, // Adjust the right value as needed
    paddingLeft: 300,
    backgroundColor: 'transparent', // Adjust as needed
    borderRadius: 10, // Adjust as needed
  },
  image: {
    width: 40, // Adjust as needed
    height: 40, // Adjust as needed
    resizeMode: 'contain', // Adjust as needed
  },
});

export default PinModeButton;
