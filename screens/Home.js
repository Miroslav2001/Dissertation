
import { SafeAreaView, View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {  RectButton, LogOutButton, OptionMenu, ReportButton } from '../components';
import { COLORS, SIZES, FONTS } from "../constants";
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import 'firebase/auth';
import '../global.js'


const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const userName = displayName;
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  if (!location) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color="#0000ff" />
      </View>
    );
  }
  return (
    
    <SafeAreaView style={{ flex: 1}}>
       
       
        
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.coords.latitude ,
          longitude: location?.coords.longitude ,
          latitudeDelta: 0.0012,
          longitudeDelta: 0.0011,
        }}
      >
        
        <Marker
          coordinate={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
          }}
          title="My Location"
          description="This is a description" /* Add time of when location was taken*/
        />
        
      </MapView>
      <View
        style={styles.greetingTextPosition}
          
    >
      <Text style={styles.greetingText}>Welcome, {global.displayName}</Text>
      </View>
      <View
        style={{
            position: 'absolute',//use absolute position to show button on top of the map
            top: '10%', //for center align
            alignSelf: 'flex-start' //for align to right
        }}
    >
      <OptionMenu></OptionMenu>
      </View>
      <View style={{
            position: 'absolute',//use absolute position to show button on top of the map
            top: '90%', //for center align
            alignSelf: 'flex-end' //for align to right
        }}>
      <ReportButton></ReportButton>
    </View>
    
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  greetingTextPosition:{
    position: 'absolute',//use absolute position to show button on top of the map
            top: '9%', //for center align
            alignSelf: 'flex-end', //for align to right
            paddingRight:30,
            
  },
  greetingText:{
    fontFamily: 'Chunky',
            color: COLORS.black,
          fontSize: SIZES.medium

  }
});


export default Home
