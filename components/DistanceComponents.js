import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import * as Location from 'expo-location';



const DistanceComponent = ({ userLocationLat,userLocationLong, destinationLat,destinationLong }) => {
  const [distance, setDistance] = useState(null);
  const [bearing, setBearing] = useState(null);
  const [arrowRotation, setArrowRotation] = useState(new Animated.Value(0));
  console.log(userLocationLat)
  console.log(userLocationLong)
  console.log(destinationLat)
  console.log(destinationLong)
  const userLocation = { latitude: userLocationLat, longitude: userLocationLong };
    const destination = { latitude: destinationLat, longitude: destinationLong };

  useEffect(() => {
    const calculateDistanceAndBearing = async () => {
      const dist = await Location.distanceBetween(
        userLocation,
        destination
      );
      setDistance(dist);
      
      const bearing = await Location.heading(
        userLocation,
        destination
      );
      setBearing(bearing);

      Animated.timing(arrowRotation, {
        toValue: bearing,
        duration: 1000,
        useNativeDriver: false
      }).start();
    };

    calculateDistanceAndBearing();
  }, [userLocation, destination]);

  if (!distance || !bearing) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.distanceText}>{`Distance: ${distance.toFixed(2)} meters`}</Text>
      <Animated.View style={{ transform: [{ rotate: `${arrowRotation}deg`}] }}>
        <Image source={require('../images/arrow.png')} style={styles.arrow} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  distanceText: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  arrow: {
    width: 30,
    height: 30
  }
});

export default DistanceComponent;