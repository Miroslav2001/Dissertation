
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, NFTData } from "../constants";
const OptionMenu = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    { id: 'Welcome', name: 'Log Out' },
    { id: 'Details', name: 'Detail Page' },
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


/*
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList,StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MenuButton = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
  const options = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
    { id: '4', name: 'Option 4' },
  ];

  const handleSelect = (item) => {
    console.log(`Selected item: ${item.name}`);
    setModalVisible(false);
  };

  return (
    <View>
      <Icon.Button 
      style={styles.menuBar}
      name="bars"
      backgroundColor="#3b5998"
      borderRadius={10}
      size={25}
      width={100}
      onPress={() => setModalVisible(true)}>
        
      </Icon.Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ marginTop: 22 }}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({
     
    menuBar: {
      
    
      alignItems: 'center',
      justifyContent: 'center',
      
    }
});

*/ 

