import {TouchableOpacity, View, Text,Image} from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
import { useNavigation } from "@react-navigation/native";
import {database} from '../firebaseConfig'
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import '../constants/global.js'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        left:10,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};


export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={{
          
          backgroundColor: COLORS.primary,
          padding: SIZES.small,
          borderRadius: SIZES.extraLarge,
          minWidth: minWidth,
          ...props,
        }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: fontSize,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Details Page
        </Text>
      </TouchableOpacity>
    );
  };

  export const ToHomeButton = ({ minWidth, fontSize, handlePress,marginTop, ...props }) => {
    const navigation = useNavigation();
      return (
        <TouchableOpacity
          style={{
            marginTop: marginTop,
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            ...props,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: fontSize,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
          Home Page
          </Text>
        </TouchableOpacity>
      );
    };

  export const LogInButton = ({ minWidth, fontSize, handlePress,email, password, ...props }) => {
      const navigation = useNavigation();
        return (
          <TouchableOpacity
            style={{
              
              backgroundColor: COLORS.primary,
              padding: SIZES.small,
              borderRadius: SIZES.extraLarge,
              minWidth: minWidth,
              ...props,
            }}
            onPress={() => 
              firebase.auth().signInWithEmailAndPassword(email, password)
              .then(() => {
                // User signed in successfully#
                
                navigation.navigate("Home")
                const user = firebase.auth().currentUser;
                global.displayName = user.displayName
              })
              .catch((error) => {
                // Handle login errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
              })
              
            }
              
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
            Log In
            </Text>
          </TouchableOpacity>
        );
    };

export const ImageButton = ({ onPress, source }) => {
      return (
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <Image source={source}  resizeMode="cover" style={styles.image}></Image>
        </TouchableOpacity>
      );
    };
    
   
export const CreateAccountButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    const navigation = useNavigation();
      return (
        <TouchableOpacity
          style={{
            
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            ...props,
          }}
          onPress={() => navigation.navigate("AccountCreation")}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: fontSize,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
          Create Account
          </Text>
        </TouchableOpacity>
      );
    };

    export const LogOutButton = ({ minWidth, fontSize, handlePress, ...props }) => {
      const navigation = useNavigation();
        return (
          <TouchableOpacity
            style={{
              
              backgroundColor: COLORS.primary,
              padding: SIZES.small,
              borderRadius: SIZES.extraLarge,
              minWidth: minWidth,
              ...props,
            }}
            onPress={() => 
              auth()
            .signOut()
            .then(() => {
              navigation.navigate("Welcome")
        // Navigate to the login screen or do something else
      })
      .catch(error => {
        // Handle errors here
        console.log(error);
      })}
              
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
            Log Out
            </Text>
          </TouchableOpacity>
        );
      };

  export const ReportButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={{
          
          backgroundColor: COLORS.primary,
          padding: SIZES.small,
          borderRadius: SIZES.extraLarge,
          minWidth: minWidth,
          ...props,
        }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: fontSize,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          report
        </Text>
      </TouchableOpacity>
    );
  };
  // export const CreateAnimalProfile = ({ minWidth, fontSize, handlePress, imageURL, Animal_Type, ...props }) => {
  //   const navigation = useNavigation();
  //     return (
  //       <TouchableOpacity
  //         style={{
            
  //           backgroundColor: COLORS.primary,
  //           padding: SIZES.small,
  //           borderRadius: SIZES.extraLarge,
  //           minWidth: minWidth,
  //           ...props,
  //         }}
  //         onPress={() => navigation.navigate("Details")}
  //       >
  //         <Text
  //           style={{
  //             fontFamily: FONTS.bold,
  //             fontSize: fontSize,
  //             color: COLORS.white,
  //             textAlign: "center",
  //           }}
  //         >
  //           report
  //         </Text>
  //       </TouchableOpacity>
  //     );
  //   };
  
  
  export const CreateAccount = ({ minWidth, fontSize, handlePress,username,password,email, ...props }) => {
    const navigation = useNavigation();
    
    
      return (
        <TouchableOpacity
          style={{
            
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            ...props,
          }}
          onPress={() =>
            
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
              // User signed up successfully
              database.collection('Users').add({
                UserID: userCredential.user.uid,
                Username: username,
                Password: password,
                Email: email})
                
             
              
              
              const user = firebase.auth().currentUser;
                 await user.updateProfile({
                displayName: username
              }).then(() => {
                console.log('love' +user.displayName)
                // Profile updated successfully
              }).catch((error) => {
                // An error occurred
                console.log(error);
              });

              console.log(user);
              console.log(user.displayName);
              global.displayName = user.displayName
              navigation.navigate("Home")
            })
            .catch((error) => {
              console.log("dasdasd")
              // Handle signup errors
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            
          })}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: fontSize,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      );
    };
    