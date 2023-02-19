import {TouchableOpacity, View, Text} from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
import { useNavigation } from "@react-navigation/native";


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
    export const LogInButton = ({ minWidth, fontSize, handlePress, ...props }) => {
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
            Log In
            </Text>
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
            onPress={() => navigation.navigate("Welcome")}
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
    