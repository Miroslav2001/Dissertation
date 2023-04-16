import { SafeAreaView, View, TextInput, StyleSheet, ImageBackground , Text} from 'react-native';
import {  ToHomeButton,CreateAccountButton,LogInButton } from '../components';
import { COLORS, SIZES, FONTS } from "../constants";
import React from 'react';
import { useFonts } from 'expo-font';


const Welcome = () => {
    
  
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    
  return (
    

      <ImageBackground source={require('../images/rose.png')} resizeMode="cover" style={backgroundStyle.image}>
      <View style={backgroundStyle.container}>
        
         
        <Text style={TextStyle.header}>Stray Adoption</Text>
        <Text style={TextStyle.syb_header}>Simply helping the animals in need </Text>
        <View style={{ padding: 80 }} />
        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter Your Email"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter Your Password"
        keyboardType="string"
      />
      <View style={{ padding: 20 }} />
      
      <View style={styles.bottom}>
          <LogInButton
           
           password={password}
           email={email}
            minWidth={150}
            fontSize={SIZES.font}
          />
          <View style={{ padding: 20 }} />
          <CreateAccountButton
            minWidth={150}
            fontSize={SIZES.font}
          />
          </View>
          </View>
          </ImageBackground>
         
       
        


  )
}

const styles = StyleSheet.create({
    input: {
      
      width: 250,
      height: 40,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 35, 
      fontSize: 16,
      margin:12,
      padding:10
        },
    bottom: {
      
      flexDirection: 'row',
      
      
      marginBottom: 36
      
    }
  });

  const backgroundStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      resizeMode: 'cover',
    },
  });
  const TextStyle = StyleSheet.create({
   
    header:{
      position: 'absolute',
          top: 225,
          fontFamily: 'Chunky',
          color: COLORS.white,
          fontSize: SIZES.header
    },
    syb_header:{
      position: 'absolute',
          top: 675,
          fontFamily: 'Chunky',
          color: COLORS.white,
          fontSize: SIZES.small
    }
  });



export default Welcome