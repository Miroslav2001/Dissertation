
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, NFTData } from "../constants";
const OptionMenu = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    { id: 'Welcome', name: 'Log Out' },
    { id: 'Home', name: 'Back' },
  ];

  const handleSelect = (item) => { /* NEED TO MAKE IT WORK WHEN ITS ON ANY PAGE NOT JUST HOME*/
    navigation.navigate(item.id)
    setModalVisible(false);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon.Button 

      name="bars"
      color='black'
      backgroundColor="transparent"
      borderRadius={10}
      size={40}
      width={60}
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
        <View style={styles.modalContainer}>
          {options.map((item) => (
            <TouchableOpacity key={item.id} style={styles.option} onPress={() => handleSelect(item)}>
              <Text style={styles.text}>{item.name}</Text>
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
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 35,
  },
  
  container:{
    padding: 10,
  },
  text:{
    fontFamily: 'Chunky',

    fontSize: SIZES.medium
  }
});

export default OptionMenu;


