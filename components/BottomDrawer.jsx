import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import EventTable from './EventTable';

const Drawer = ({points}) => {
    // ref
    const bottomSheetRef = useRef(null);
  
    // variables
    const snapPoints = useMemo(() => ['16%','25%', '50%', '75%', '80%'], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
    }, []);
  
    // renders
    return (
      <React.Fragment>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          style={DrawerStyles.contentContainer}
        >
          <View style={DrawerStyles.contentContainer}>
            <Text>Hello World!</Text>
          </View>
        </BottomSheet>
      </React.Fragment>
    );
  };

const DrawerStyles = StyleSheet.create( {
    appContainer: {
        width: '100%',
        height: '30%'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    }
})
export default Drawer;