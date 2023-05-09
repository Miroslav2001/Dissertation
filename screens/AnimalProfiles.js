
import { SafeAreaView, View,StyleSheet,Text, ActivityIndicator } from 'react-native';
import { COLORS, SIZES,} from "../constants";
import { FlatList } from 'react-native-gesture-handler';
import {AnimalCard, ScrollBar} from '../components';
import {database} from '../firebaseConfig'
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs,onSnapshot} from 'firebase/firestore';
import Slider from '@react-native-community/slider';

const Details = () => {
  const [animals, setAnimal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const animalDatabase = collection(getFirestore(), 'Animal Profiles');
  const [sliderValue, setSliderValue] = useState(5);
  
  const handleSliderValueChange = (value) => {
    setSliderValue(value);
    onSnapshot(animalDatabase, (querySnapshot) => {
      const animals = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const value = calculateDistance(global.location_lat,global.location_long,data.Location_Latitude,data.Location_Longtitude)
        if (value <= sliderValue) {
          // If the document meets the condition, add it to the animals array
          return {
            id: doc.id,
            ...data,
          };
        } else {
          // If the document does not meet the condition, return null
          // The filter function below will remove null elements from the animals array
          return null;
        }
      }).filter((animal) => animal !== null);
  
      setAnimal(animals);
    });
    
};
/* CALCULATION TURNED INTO OUTSIDE EXPORTED FUNCTION*/
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * Math.PI / 180; // Latitude of the first point in radians
  const φ2 = lat2 * Math.PI / 180; // Latitude of the second point in radians
  const Δφ = (lat2 - lat1) * Math.PI / 180; // Difference in latitude in radians
  const Δλ = (lon2 - lon1) * Math.PI / 180; // Difference in longitude in radians

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  

  return distance;
}
  useEffect(() => {
    const unsubscribe = onSnapshot(animalDatabase, (querySnapshot) => {
      const animals = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const value = calculateDistance(global.location_lat,global.location_long,data.Location_Latitude,data.Location_Longtitude)
        if (value <= sliderValue) {
          // If the document meets the condition, add it to the animals array
          return {
            id: doc.id,
            ...data,
          };
        } else {
          // If the document does not meet the condition, return null
          // The filter function below will remove null elements from the animals array
          return null;
        }
      }).filter((animal) => animal !== null);
  
      setAnimal(animals);
      setIsLoading(false);
    });
    //   });
    //   setAnimal(animals);
    //   setIsLoading(false);
    // });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor:COLORS.light_purple}} >
      <Text style={styles.header}>Animals Near You</Text>
      <Text style={styles.distance_bar}>Distance Of Search:</Text>
      
        <ScrollBar onValueChange={handleSliderValueChange}/>
      
        <View style={{ zIndex:0}}>
          <FlatList
            data={animals}
            renderItem={({ item }) => <AnimalCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      <View style={{
        postion:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        zIndex:-1,
      }}>
        
      </View>
      </View>
    </SafeAreaView>
  );
};


export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    padding:10,
    fontFamily: 'Chunky',
    color: COLORS.white,
    fontSize: 30,
  },
  distance_bar: {
    textAlign: 'center',
    padding:5,
    fontFamily: 'Chunky',
    color: COLORS.white,
    fontSize: 15,
  },
  Scrollcontainer: {
    flex: 1,
    paddingBottom:40  
  }
});
























//   const [animals, setAnimal] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const animalDatabase = database.collection('Animal Profiles')
//   useEffect(() => {
//     animalDatabase
//     .onSnapshot(
//       querySnapshot => {
//         const animals = []
//         querySnapshot.forEach((doc) => {
//           const{Animal_Aggresion,Animal_Age,Animal_State,Animal_Type,Location_Latitude,Location_Longtitude,Photo} = doc.data()
//           animals.push({
//             id: doc.id,
//             Animal_Aggresion,
//             Animal_Age,
//             Animal_State,
//             Animal_Type,
//             Location_Latitude,
//             Location_Longtitude,
//             Photo
//           })
//         })
//         setAnimal(animals)
//         setIsLoading(false);
//       }
//     )

// //     const fetchData = async () => {
// //       const querySnapshot = await getDocs(collection(database, 'Animal Profiles'));
// //       querySnapshot.docs.map((doc) => doc.data());
// //       const usersData = querySnapshot.docs.map((doc) => ({id: doc.id ,...doc.data()
// // }));
// //   setAnimal(usersData);
// //   setIsLoading(false);
// //   console.log(animals)
// // };
// //     fetchData();
//   }, []);
//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.horizontal]}>
//         <ActivityIndicator size='large' color="#0000ff" />
//       </View>
//     );
//   }
//   return (
//     <SafeAreaView style={{ flex: 1}}>
       
//         <View style={{ flex: 1, backgroundColor:COLORS.gray}} >
//           <Text>HJELL</Text>
//           <View style={{ zIndex:0 }}>
          
//           {/* <FlatList
//             data={animals}
//             renderItem={({item}) => <AnimalCard/>}
//             keyExtractor={(item) => item.id}
//             showsVetricalScrollIndicator = {false}/> */}
//           </View>
//         </View>
//     </SafeAreaView>
//   )


