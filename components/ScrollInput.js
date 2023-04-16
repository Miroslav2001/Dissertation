
import { View, Text, TouchableOpacity,Modal, TextInput, StyleSheet,SafeAreaView } from 'react-native';

import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';


export const ScrollInput = ({ option1, option2, option3, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('click me!');
    
      return (
        <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.text}>{selectedValue}</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                      <Picker style={styles.picker}
                          selectedValue={selectedValue}
                          onValueChange={(itemValue) => setSelectedValue(itemValue)}
                      >
                          <Picker.Item label={option1} value={option1} />
                          <Picker.Item label={option2} value={option2} />
                          <Picker.Item label={option3} value={option3} />
                      </Picker>
                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                          <Text style={styles.modalText}>Close</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
              </View>
    
      );
    };

    const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            fontWeight: 'bold',
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