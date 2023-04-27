
import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Modal, TextInput, StyleSheet,SafeAreaView, Image, Button} from 'react-native';
import { COLORS, SIZES,} from "../constants";
import {  ToHomeButton, CreateAccount} from '../components';
import { Picker } from '@react-native-picker/picker';

import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {database} from '../firebaseConfig'

const NewProfile = () => {
  

  let imageChaneURL = null;
  const [animalExtraInformation, setExtraInformation] = useState('');
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const [animalType, setAnimalType] = useState('click me!');
  const [animalState, setAnimalState] = useState('click me!');
  const [animalAge, setAnimalAge] = useState('click me!');
  const [animalAggression, setAnimalAggression] = useState('click me!');

  const handleAnimalTypeChange = (itemValue) => {
    setAnimalType(itemValue);
  };
  const handleAnimalStateChange = (itemValue) => {
    setAnimalState(itemValue);
  };
  const handleAnimalAgeChange = (itemValue) => {
    setAnimalAge(itemValue);
  };
  const handleAnimalAggressionChange = (itemValue) => {
    setAnimalAggression(itemValue);
  };
  const [imageSource, setImageSource] = useState('https://assets3.thrillist.com/v1/image/3039952/1584x1700/scale;webp=auto;jpeg_quality=60.jpg');
  const changeImage = () => {
    
    setImageSource(imageChaneURL);
  };
  
  const handleSubmit = () => {
    
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    })

    if (!result.canceled) {
      imageChaneURL = result.uri
      changeImage()
      // setImageSource = 'https://assets3.thrillist.com/v1/image/3039955/792x975/scale;webp=auto;jpeg_quality=60.jpg'
      
      // result='https://assets3.thrillist.com/v1/image/3039955/792x975/scale;webp=auto;jpeg_quality=60.jpg'
      
      
      console.log(result)
      // The image is stored in the result.uri property
      // You can do something with the image here
    }
  };
  const storeData = () => {
    console.log(animalType)
    database.collection('Animal Profiles').add({
      Photo: imageSource,
      Animal_Type: animalType,
      Animal_State : animalState,
      Animal_Age: animalAge,
      Ainmal_Aggression: animalAggression})
    };
  
  return (
   
    <SafeAreaView style={{ flex: 1}}>
       
    <View style={{ flex: 1, backgroundColor:COLORS.light_purple}} >
    
    <View style={styles.header_container}>

    <Text style={styles.header}>New Animal Profile</Text>
    <View/>
    <Text style={styles.sub_header}>Help us help the animal by adding as much detail as possible</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop:25}}>
    <Image source={{ uri:imageSource }} style={{ width: 225, height: 250, resizeMode: 'contain' }} />
    <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 50, paddingBottom:40}}>
    <Text style={styles.infoText}>Select Image:</Text>
    <Icon.Button 

      name="plus"
      color='black'
      backgroundColor="transparent"
      borderRadius={10}
      size={80}
      width={90}
      onPress={pickImage}>
        
      </Icon.Button>
      </View>
    
    </View>
      <Text style={styles.infoText}>What animal have you seen?</Text>
      <View>
        <TouchableOpacity onPress={() => setModalVisible1(true)}>
              <Text style={styles.text}>{animalType}</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible1} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                      <Picker style={styles.picker}
                          selectedValue={animalType} onValueChange={handleAnimalTypeChange}>
                    
                          <Picker.Item label={'cat'} value={'cat'} />
                          <Picker.Item label={'dog'} value={'dog'} />
                          <Picker.Item label={'turtle'} value={'turtle'} />
                      </Picker>
                      <TouchableOpacity onPress={() => setModalVisible1(false)}>
                          <Text style={styles.modalText}>Close</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
              </View>
      {/* <ScrollInput 
      option1={'cat'}
      option2={'dog'}
      option3={'turtle'}>
      
      </ScrollInput> */}
      <Text style={styles.infoText}>In what state was the animal?</Text>
      <View>
        <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <Text style={styles.text}>{animalState}</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible2} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                      <Picker style={styles.picker}
                          selectedValue={animalState} onValueChange={handleAnimalStateChange}
                      >
                          <Picker.Item label={'happy'} value={'happy'} />
                          <Picker.Item label={'ok'} value={'ok'} />
                          <Picker.Item label={'misserable'} value={'misserable'} />
                      </Picker>
                      <TouchableOpacity onPress={() => setModalVisible2(false)}>
                          <Text style={styles.modalText}>Close</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
              </View>
    
      {/* <ScrollInput 
      option1={'happy'}
      option2={'ok'}
      option3={'misserable'}>
      </ScrollInput> */}
      <Text style={styles.infoText}>In what age group would you classify the animal?</Text>
      <View>
        <TouchableOpacity onPress={() => setModalVisible3(true)}>
              <Text style={styles.text}>{animalAge}</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible3} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                      <Picker style={styles.picker}
                          selectedValue={animalAge} onValueChange={handleAnimalAgeChange}
                      >
                          <Picker.Item label={'baby'} value={'baby'} />
                          <Picker.Item label={'teen'} value={'teen'} />
                          <Picker.Item label={'adult'} value={'adult'} />
                      </Picker>
                      <TouchableOpacity onPress={() => setModalVisible3(false)}>
                          <Text style={styles.modalText}>Close</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
              </View>
    
      {/* <ScrollInput 
      option1={'baby'}
      option2={'teen'}
      option3={'adult'}>
      </ScrollInput> */}
      <Text style={styles.infoText}>How aggressive did the animal come across?</Text>
      <View>
        <TouchableOpacity onPress={() => setModalVisible4(true)}>
              <Text style={styles.text}>{animalAggression}</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible4} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                      <Picker style={styles.picker}
                          selectedValue={animalAggression} onValueChange={handleAnimalAggressionChange}
                      >
                          <Picker.Item label={'not aggressive'} value={'not aggressive'} />
                          <Picker.Item label={'could not tell'} value={'could not tell'} />
                          <Picker.Item label={'agreesive'} value={'agreesive'} />
                      </Picker>
                      <TouchableOpacity onPress={() => setModalVisible4(false)}>
                          <Text style={styles.modalText}>Close</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
              </View>
    
      {/* <ScrollInput 
      option1={'not aggressive'}
      option2={'could not tell'}
      option3={'agreesive'}>
      </ScrollInput> */}
      <Text style={styles.infoText}>Is there any additional information you would like to provide about the animal?</Text>
       <TextInput
        style={styles.input}
        value={animalExtraInformation}
        onChangeText={setExtraInformation}
      />
      
    
      <Button title="Save Data" onPress={() => storeData()} />
    </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header_container: {
    flex: 1,
    padding: 20,
    alignItems:'flex-start'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  button: {
    borderRadius: 35, 
    height: 40,
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    
    color: 'white',
    fontWeight: 'bold',
  },
  infoText:{
    marginTop:20,
  },
  header:{
    fontFamily: 'Chunky',
    color: COLORS.white,
    fontSize: 38,          
    },
  sub_header:{
    paddingTop:30,
    fontFamily: 'Chunky',
    color: COLORS.white,
    fontSize: 15,
          },

  modal: {
    
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 45,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  modalText: {
    color: '#007AFF',
    marginTop: 10,
  },
  picker:{
    height: 200,
    width: 400,
  }
});


export default NewProfile

