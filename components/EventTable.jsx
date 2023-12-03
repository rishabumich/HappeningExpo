import { Cell, Section, TableView } from 'react-native-tableview-simple';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CellVariant = ({point}) => (
    <Cell
      cellContentView={
        <View
          style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
        >
          <Text
            numberOfLines={1}
            style={{ flex: 1, fontSize: 30 }}
          >
            Hello World!
          </Text>
        </View>
      }
    />
  );

  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };

const EventTable = ({points}) => {
    return ( 
        <Text>Hello World!</Text>
);
}
export default EventTable;