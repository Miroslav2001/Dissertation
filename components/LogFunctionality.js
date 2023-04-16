import {View, Text} from 'react-native'
import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react'
import { useNavigation } from "@react-navigation/native";

function handleLogin(email, password) {
  const navigation = useNavigation();
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed in successfully#
    navigation.navigate("Home")
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    // Handle login errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(email);
    console.log(password);
  })
  }


  function handleLogout() {
    auth()
      .signOut()
      .then(() => {
        // Navigate to the login screen or do something else
      })
      .catch(error => {
        // Handle errors here
        console.log(error);
      });
  }
 
  
  
  
  
  
export default handleLogin; handleLogout