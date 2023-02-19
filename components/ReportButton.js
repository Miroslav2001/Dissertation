
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, NFTData } from "../constants";

const ReportButton = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    { id: 'NewProfile', name: 'Create New Profile', url: require('../images/plus_paw.png') },
    { id: 'ReportProblem', name: 'Repot Problem', url: require('../images/report_black.png') },
   
  ];

  const handleSelect = (item) => { /* NEED TO MAKE IT WORK WHEN ITS ON ANY PAGE NOT JUST HOME*/
    navigation.navigate(item.id)
    setModalVisible(false);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon.Button 

      name="plus-square-o"
      color='black'
      backgroundColor="transparent"
      borderRadius={10}
      size={80}
      width={90}
      onPress={() => setModalVisible(true)}>
        
      </Icon.Button>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer} >
          {options.map((item) => (
            <TouchableOpacity key={item.id} style={styles.option} onPress={() => handleSelect(item)}>
              <Text style={styles.text}>{item.name}</Text>
              <Image source={item.url}  resizeMode="cover" style={styles.image}></Image>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  option: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 5,
    width: '45%',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 35,
    height: "15%"
    
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    width:100,
    height:40
  },
  
  container:{
    padding: 10,
  },
  text:{
    fontFamily: 'Chunky',

    fontSize: SIZES.medium
  }
});
export default ReportButton;