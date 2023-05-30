import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { COLORS, SIZES,assets} from "../constants";
import {  ToHomeButton, CreateAccount, CircleButton} from '../components';
import { useNavigation } from "@react-navigation/native";



const ReportProblem = () => {
  const [problem, setProblem] = useState('');
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1}}>
       
    <View style={{ flex: 1, backgroundColor:COLORS.light_purple}} >
    
    <View style={styles.header_container}>
    <Text style={styles.header}>Share The Problem!</Text>
    <View/>
    <Text style={styles.sub_header}>Enter information about the animal in need below, more specific detail could lead to better results:</Text>
      <Text style={styles.infoText}>Whats the Problem?</Text>
      
      <TextInput
        style={styles.input}
        value={problem}
        onChangeText={setProblem}
      />

      <CircleButton
            imgUrl={assets.left}
            style={{
              position: "absolute",
              left:5,
              top:10,
            }}
            handlePress={() => navigation.goBack()}
            />
      <ToHomeButton
      ></ToHomeButton>
    </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header_container: {
    flex: 1,
    padding: 20,
    alignItems:'flex-start'
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  button: {
    borderRadius: 35, 
    height: 40,
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    
    color: 'white',
    fontWeight: 'bold',
  },
  infoText:{
    marginTop:20,
  },
  header:{
    paddingTop:35,
    fontFamily: 'Chunky',
    color: COLORS.white,
    fontSize: 38,          
    },
  sub_header:{
    paddingTop:30,
    fontFamily: 'Chunky',
    color: COLORS.white,
    fontSize: 15,
          },
});
export default ReportProblem;
