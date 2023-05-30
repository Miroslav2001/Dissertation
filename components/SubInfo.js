
import {View, Text, StyleSheet} from 'react-native'
import React  from 'react'
import { COLORS, SIZES } from '../constants'
import DistanceComponent from './DistanceComponents'

export const AnimalName = ({name}) => {
    return(
    <View style={{
        width:'100%',
        paddingHorizontal: SIZES.font,
        flexDirection: "row",
        justifyContent: 'space-between',
    }}>
        <Text style={{
           position:'absolute',
            top: -25,
            left: 15,
            
            fontFamily: 'Chunky',
            color: COLORS.white,
            fontSize: 20,
        }}>{name}</Text>
    </View>
    )
}
export const DateOfEntry = () => {
    <View>
        <Text>HomeHeader</Text>
    </View>
}

export const AnimalInformaiton =({data}) => {
    const destination = {
        latitude: data.Location_Latitude,
        longitude: data.Location_Longtitude,
      }
    return(
        <View>
            <View style={styles.header_container}>

                <Text style={styles.header}>{data.Animal_Type} Profile</Text>
                <Text style={{paddingTop:5,
                                fontFamily: 'Chunky',
                                color: COLORS.black,
                                fontSize: 15,
                                textAlign:'center'}}>Importnat Information Provided by other users:</Text>
                <Text style={styles.data_header}>Last Spotted:</Text>
                <DistanceComponent destination = {destination}/>
                
                <Text style={styles.data_header}> from your location!</Text>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.purple_header}>Age:</Text>
                    <Text style={styles.black_answer}>{data.Animal_Age}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.purple_header}>State:</Text>
                    <Text style={styles.black_answer}>{data.Animal_State}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.purple_header}>Aggression:</Text>
                    <Text style={styles.black_answer}>{data.Animal_Aggression}</Text>
                </View>
            </View>
        </View>
    )
}
/* When aggression level is not aggresive is goes out of screen*/
const styles = StyleSheet.create({
    header_container: {
      flex: 1,
      paddingTop: 25,
      alignItems: 'center', justifyContent: 'center'
    },
    header:{
      fontFamily: 'Chunky',
      color: COLORS.balck,
      fontSize: 38,          
      },
    data_header:{
      paddingTop:15,
      fontFamily: 'Chunky',
      color: COLORS.gray,
      fontSize: 15,
            },
    info_header:{
      paddingTop:15,
      fontFamily: 'Chunky',
      color: COLORS.black,
      fontSize: 35,
    },
      purple_header:{
        paddingTop:15,
        fontFamily: 'Chunky',
        color: 'purple',
        fontSize: 29,
        paddingLeft:10
      },
      black_answer:{
        paddingTop:15,
        fontFamily: 'Chunky',
        color: COLORS.black,
        fontSize: 28,
        paddingLeft:'5%'
      }
  
    
  });
  
