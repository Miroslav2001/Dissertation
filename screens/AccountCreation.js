import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { COLORS, SIZES,} from "../constants";
import {  ToHomeButton } from '../components';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
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

const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // TODO: Handle the form submission
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
       
    <View style={{ flex: 1, backgroundColor:COLORS.light_purple}} >
    
    <View style={styles.container}>
    <Text style={styles.header}>Join Our Community!</Text>
    <Text style={styles.sub_header}>Enter Your Details:</Text>
      <Text style={styles.infoText}>Username:</Text>
      
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.infoText}>Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.infoText}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <ToHomeButton
            minWidth={'100%'}
            fontSize={SIZES.font}
            marginTop={50}
            
          />
       
    </View>
    </View>
    </SafeAreaView>
  );
};

export default AccountCreation;
