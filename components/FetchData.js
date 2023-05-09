import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {database} from '../firebaseConfig'

const FetchData = () => {
  console.log("Entering")
//   const [animals, setAnimal] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await database.collection('Animal Profiles').get();
//       // setData(data.docs.map((doc) => doc.data()));
//       querySnapshot.docs.map((doc) => doc.data());
//       const usersData = querySnapshot.docs.map((doc) => ({id: doc.id ,...doc.data()
//   //     const usersData = [];
//   //   querySnapshot.forEach((doc) => {
//   //   usersData.push(doc.data());
//   // });
// }));
//   setAnimal(usersData);
//   global.AnimalData = animals
//   console.log(animals)
  
  
  
// };


//     fetchData();
//   }, []);
  
//   // return (
//   //   <View>
//   //     {animals.map((animal) => (
//   //       <Text key={animal.id}>
//   //       Name: {animal.Animal_Type}, Age: {animal.Animal_Age}, Email: {animal.Animal_State}
//   //     </Text>
//   //     ))}
//   //   </View>
//   // );
  };

export default FetchData;