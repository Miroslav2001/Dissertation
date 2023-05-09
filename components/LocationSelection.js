import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PinpointLocation = ( { onLocationChange }) => {
  const [location, setLocation] = useState(null);
  
  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setLocation(coordinate);
    onLocationChange(coordinate)
    console.log(coordinate.latitude)
    console.log(coordinate.longitude)
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={handleMapPress}
      initialRegion={{
        latitude: global.location_lat ,
        longitude: global.location_long ,
        latitudeDelta: 0.0012,
        longitudeDelta: 0.0011,
        }} 
        >
          <Marker pinColor={'red'}
          coordinate={{
            latitude: global.location_lat ,
            longitude: global.location_long ,
          }}
          title="My Location"
          description="This is a description" /* Add time of when location was taken*/
        />
        {location && (
          <Marker coordinate={location} pinColor={'blue'} />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '70%',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PinpointLocation;