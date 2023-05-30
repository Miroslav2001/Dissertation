

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import * as Location from 'expo-location';
// import { getDistance, getPreciseDistance, getGreatCircleBearing } from 'geolib';



// const DistanceComponent = (destination) => {
  
//   const [distance, setDistance] = useState(null);
//   const [bearing, setBearing] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       Location.watchPositionAsync(
//         {
//           accuracy: Location.Accuracy.Highest,
//           timeInterval: 1000,
//           distanceInterval: 0.5,
//         },
//         (location) => {
//           const userLocation = {
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//           };
//           // console.log(userLocation.latitude)
          
//           const newDistance = getDistance(userLocation, destination.destination);
//           const newBearing = getGreatCircleBearing(userLocation, destination.destination);
//           setDistance(newDistance);
//           setBearing(newBearing);
//         }
//       );
//     })();
//   }, []);

//   if (errorMsg) {
//     return <Text>{errorMsg}</Text>;
//   }

//   if (!distance || !bearing) {
//     return <Text>Calculating...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../images/arrow.png')}
//         style={[
//           styles.arrow,
//           {
//             transform: [{ rotate: `${bearing}deg` }],
//           },
//         ]}
//       />
//       <Text style={styles.distanceText}>{` ${distance.toFixed(2)} meters`}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrow: {
//     marginTop:10,
//     width: 70,
//     height: 70,
//   },
//   distanceText: {
//     fontSize: 18,
//     marginTop: 5,
//       fontFamily: 'Chunky',
//       fontSize: 28,
      
//   },
// });

// export default DistanceComponent;



import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';


const DistanceComponent = ({ userLocation, destination }) => {
  const [distance, setDistance] = useState(null);
  const [bearing, setBearing] = useState(null);
  const arrowRotation = useRef(new Animated.Value(0)).current;
  
const getBearing = (end) => {
  
  const startLat = global.location_lat;
  const startLng = global.location_long;
  const endLat = end.latitude;
  const endLng = end.longitude;

  const dLng = endLng - startLng;
  const y = Math.sin(dLng) * Math.cos(endLat);
  const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);

  const bearing = (Math.atan2(y, x) * 180) / Math.PI;
  return (bearing + 360) % 360;
};
  useEffect(() => {
    const watchPosition = async () => {
      const headingSubscription = await Location.watchHeadingAsync((heading) => {
        const newBearing = getBearing(destination) - heading.trueHeading;
        setBearing(newBearing);
        Animated.timing(arrowRotation, {
          toValue: newBearing,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      });

      const positionSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000, // update every 1 second
          distanceInterval: 10, // update every 10 meters
        },
        (newUserLocation) => {
          const newDistance = getDistance(
            {
              latitude: newUserLocation.coords.latitude,
              longitude: newUserLocation.coords.longitude,
            },
            {
              latitude: destination.latitude,
              longitude: destination.longitude,
            }
          );
          setDistance(newDistance);
        }
      );

      return () => {
        headingSubscription.remove();
        positionSubscription.remove();
      };
    };

    watchPosition();
  }, [userLocation, destination]);

  if (!distance || !bearing) {
    return null;
  }

  const rotate = arrowRotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Image source={require('../images/arrow.png')} style={styles.arrow} />
      </Animated.View>
      <Text style={styles.distanceText}>{`${distance.toFixed(2)} meters`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  distanceText: {
    paddingTop: 10,
    marginRight: 10,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Chunky',
    color: 'black',
  },
  arrow: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
  },
});

export default DistanceComponent;