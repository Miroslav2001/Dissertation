import {View, Text, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import {COLORS, SIZES , SHADOWS, assets} from '../constants'
import { AnimalName,DateOfEntry } from './SubInfo'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AnimalCard = ({data}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={() => navigation.navigate("AnimalDiary", {data})}>
        <View
      style={{
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
      >
        
            <View style={{width:"100%", height:250}}>
                
                <Image
                source={{uri:data.Photo}}
                resizeMode='cover'
                style={{
                    width:"100%",
                    height:"106%",
                    borderRadius: SIZES.font,
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font,
                    
                }}
                
                />

            </View >    
        
            <AnimalName 
            name = {data.Animal_Name} />
            
            
        </View>
    </TouchableOpacity>
    )
}

export default AnimalCard