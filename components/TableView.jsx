import React, {Component} from 'react';
import {Text, View, ScrollView, TextInput, ViewBase} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';
import { Button } from 'react-native-web';
import PinModeButton from './PinModeButton';

const CustomCell = ({ title }) => {
    const locationTag = "Location 📍";
    
    return(
    <Cell
      cellStyle='Basic'
      title={
        <View style={{width:'100%'}}>
          <Text 
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontSize: 20, fontStyle: 'italic' }}
          >
            {title}
          </Text>
          <Text style={{paddingTop: 10, fontSize: 15, fontWeight: 'bold'}}>{locationTag}</Text>
          <Text>Location goes here!</Text>
          <Text>Description of event goes here</Text>
        </View>
      }
    />
    )};

const Divider = () => (
    <View style={{height: 1, backgroundColor: 'lightgray'}} />
);

const EventTable = () =>{
    const title = "Event #1 Name"; // Just an example title for the cell
    const headerTitle = 'Explore Events 👇                      '; // Your header title
  
    // Calculate the width based on the header content length
    const headerWidth = headerTitle.length * 12; // Adjust the factor for the appropriate width
    const cellWidth = 100 - headerWidth;
  
    return (
    <View>
      <ScrollView style={{ width: '100%', paddingTop: 20, position:'relative'}}>
      <PinModeButton />
        <TableView style={{ width: '100%', alignSelf: 'center' }}>
          <Section header={headerTitle} headerTextStyle={{ fontSize: 30, width: '100%'}}>
            <View style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <CustomCell title={title} width={cellWidth} />
            <Divider />
            <CustomCell title="This is Event #2"/>
            <Divider />
            <CustomCell title="This is Event #3"/>
            <Divider />
            <CustomCell title="This is Event #4"/>
            </View>
          </Section>
        </TableView>
      </ScrollView>
      </View>
    );
  };
export default EventTable;