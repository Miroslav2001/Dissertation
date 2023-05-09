import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const ScrollBar = ({ onValueChange }) => {
    const [range, setRange] = useState('5 meters');
    
    const handleValueChange = (value) => {
        setRange(parseInt(value) + ' meters');
        if (onValueChange) {
            onValueChange(value);
        }
    };


    return(
        <View>
            <Text style={styles.text}>{range}</Text>
            <View style={styles.container}>
                <Slider
                style={{
                    width:250,
                    height:40,
                    alignSelf:'center'
                    }}
                    minimumValue={5}
                    maximumValue={500000}
                    minimumTrackTintColor='lightblue'
                    maximumTrackTintColor='lightgray'
                    onValueChange={handleValueChange}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:40  
    },
    text:{
        textAlign: 'center',
        fontSize:40, 
        fontWeight:'bold',
        fontFamily: 'Sweety',
    }
});
export default ScrollBar 