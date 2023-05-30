import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from './screens/Home';
import Welcome from "./screens/Welcom";
import AccountCreation from "./screens/AccountCreation";
import ReportProblem from "./screens/ReportProblem";
import NewProfile from "./screens/NewProfile";
import 'firebase/database';
import AnimalProfiles from "./screens/AnimalProfiles";
import AnimalDiary from "./screens/AnimalDiary"
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
const Stack = createStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    interSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    interMedium: require("./assets/fonts/Inter-Medium.ttf"),
    interRegular: require("./assets/fonts/Inter-Regular.ttf"),
    interLight: require("./assets/fonts/Inter-Light.ttf"),
    Sweety: require('./constants/fonts/SweetyPeachyDisplayRegular.ttf'),
    Chunky: require('./constants/fonts/CHUNKY_HEART_SOLID.otf')
  });

  if(!loaded) return null;

  return (
    <NavigationContainer theme = {theme}> 
      <Stack.Navigator screenOptions={{ headerShown: false}}
      initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="AccountCreation" component={AccountCreation}/>
        <Stack.Screen name="ReportProblem" component={ReportProblem}/>
        <Stack.Screen name="NewProfile" component={NewProfile}/>
        <Stack.Screen name="AnimalProfiles" component={AnimalProfiles}/>
        <Stack.Screen name="AnimalDiary" component={AnimalDiary}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

//import 'firebase/compat';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

