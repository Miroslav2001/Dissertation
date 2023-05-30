
import { TouchableOpacity,SafeAreaView, View, StyleSheet, ActivityIndicator, Text,Image} from 'react-native';
import {  ImageButton, OptionMenu, ReportButton } from '../components';
import { COLORS, SIZES, FONTS } from "../constants";
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
import 'firebase/auth';
import '../constants/global.js'



const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const userName = displayName;
  const navigation = useNavigation();


  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //     } else {
  //       const location = await Location.watchPositionAsync({
  //         accuracy: Location.Accuracy.High,
  //         timeInterval: 1000, // update every 1 second
  //         distanceInterval: 10 // update every 10 meters
  //       }, setLocation);
  //       setLocation(location);
  //     
  //     }
  //   })();
  // }, []);

  
  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location.coords.latitude)
      console.log(location.coords.longitude)
      location = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 1000, // update every 1 second
        distanceInterval: 10 // update every 10 meters
      }, setLocation(location)
      );
      
      
    })();
  }, []);
  // console.log('location:', location);
  // console.log('location.coords:', location?.coords);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  if (!location) {
    console.log("emty")
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color="#0000ff" />
      </View>
    );
  } else{
  global.location_long = location.coords.longitude;
  global.location_lat = location.coords.latitude;
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
          title="Current Location"
          // description="This is a description"
        >
          <Image
        source={require('../images/user.png')}
        style={{ width: 40, height: 40 }}
      />
      </Marker> 
      
        
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
      <View style={styles.aninmalButton}>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("AnimalProfiles")}>
              {/* <Text style={styles.text}>{item.name}</Text> */}
              <Image source={require('../images/animalOpen.png')}  resizeMode="cover" style={styles.image}></Image>
            </TouchableOpacity>
      </View>     
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
}}
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

  },
  
  image:{
    width: 57,
    height: 50,
  },
  option: {
    position: 'absolute',
    top: -40,
    left:325,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 35,
    backgroundColor: 'lightblue',
    padding: 10,
    shadowColor: '#000',
    
    
  },
});


export default Home
