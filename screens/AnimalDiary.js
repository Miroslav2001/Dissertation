import {Text, View, SafeAreaView, Image, FlatList,StatusBar, StyleSheet, TouchableOpacity, Modal, TextInput, Linking } from 'react-native'
import {COLORS, SIZES, SHADOWS, FONTS,assets} from '../constants'
import{AnimalProfile, AnimalsDesc, CircleButton,BlogPosts, ProblemButton, ProblemModal} from '../components'
import Details from './AnimalProfiles'
import React, {useState} from 'react'
import {AnimalName, AnimalInformaiton} from '../components/SubInfo'
import Mailer from 'react-native-mail';





const AnimalProfileHeader = ({ data, navigation}) =>(
    <View style={{width:'100%', height:373}}>
        <Image 
        source={{uri:data.Photo}}
        resizeMode="cover"
        style={{
            width:"100%",
            height:"106%",
            borderRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
            
        }}
        />
    </View>
)
const OptionButton = ({ label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
  
  const ProfilePage = ({route,navigation}) => { 
    const { data } = route.params;
  const [modalVisibleUser, setModalVisibleUser] = useState(false);
  const [modalVisibleAdmin, setModalVisibleAdmin] = useState(false);
  const [reportInformation, reportInformationSet] = useState('');

  const sendEmail = async () => {
    setModalVisibleUser(false)
    const recipientEmail = 'strayadoption2@gmail.com'; // Replace with the actual recipient email
    const subject = data.id; // Replace with the desired subject
    const body = 'Problem Report  ' +JSON.stringify(reportInformation); // Replace with the desired body content
    const emailUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      await Linking.openURL(emailUrl);
    } catch (error) {
      console.log('Error opening email client:', error);
    }
  }
  const deleteProblem=() => {
    setModalVisibleAdmin(false)

  }
  const handleAdminButtonPress =  () => {
    console.log("Admin")
    setModalVisibleAdmin(true)
    // Functionality for admin button press
  };

  const handleUserButtonPress = () => {
    // Functionality for normal user button press
    console.log('user')
    setModalVisibleUser(true)
  };

  const renderButton = () => {
    if (global.userRole === 'admin') {
      return (
        <ProblemButton
            imgUrl={assets.problem}
            style={{
              position: "absolute",
              left:360,
              width: 50,
              height:50,
              backgroundColor: 'black'
            
            }}
            handlePress={handleAdminButtonPress}
            />
      );
    } else {
      return (
        <ProblemButton
            imgUrl={assets.problem}
            style={{
              position: "absolute",
              left:360,
              width: 50,
              height:50,
              backgroundColor: 'black'
            
            }}
            handlePress={handleUserButtonPress}
            />
      );
    }
  };
    
  

    return(
    <View style={styles.container}>
      <FlatList
            data={data[0]}
            renderItem={({item}) => <AnimalProfile bid={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
                <React.Fragment>
                    
                    <AnimalProfileHeader 
                    data={data}/>
                    <AnimalName 
                    name = {data.Animal_Name} />
                    <AnimalInformaiton
                    data = {data}/>
        
                </React.Fragment>
            )}
            />
            <CircleButton
            imgUrl={assets.left}
            style={{
              position: "absolute",
              left:10,
            }}
            handlePress={() => navigation.goBack()}
            />
           {renderButton()}
           <Modal visible={modalVisibleUser} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                  <Text style={styles.header}>Report A Problem</Text>
                    <Text style={styles.infoText}>Please Describe The Problem In Full Detail:</Text>
                    <TextInput
                      style={styles.input}
                      value={reportInformation}
                      onChangeText={reportInformationSet}
                    />
                    <Text style={styles.infoText}>You will be redirected to your personal mailbox after submition</Text>
                  
                      <TouchableOpacity onPress={() => sendEmail()}>
                          <Text style={styles.modalText}> Send Report</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>

              <Modal visible={modalVisibleAdmin} animationType="slide" transparent={true}>
                  <View style={styles.modal}>
                    <Text style={styles.infoText}>Is there any additional information you would like to provide about the animal?</Text>
                    <TextInput
                      style={styles.input}
                      value={reportInformation}
                      onChangeText={reportInformationSet}
                    />
                      <TouchableOpacity onPress={() => setModalVisibleUser(false)}>
                          <Text style={styles.modalText}>Delete</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
    </View>
  )};
  
  const DiaryPage = ({route,navigation}) => {
    const { data } = route.params;
    return(
    <View style={styles.container}>
      <CircleButton
            imgUrl={assets.left}
            style={{
              position: "absolute",
              left:10,
            }}
            handlePress={() => navigation.goBack()}
            />
      <Text style={styles.NameDiary}>{data.Animal_Name}'s Diary</Text>
      <BlogPosts profileId= {data.id} />
    </View>
  )};


const AnimalDiary = ({route, navigation}) => {
    

    const [page, setPage] = useState(1);
    const handlePageOnePress = () => setPage(1);
    const handlePageTwoPress = () => setPage(2);
    
    return(
        
        <SafeAreaView style={{ flex:1}}>
            <View style={{ flex: 1, backgroundColor:'#55AAFF'}} >
            <View style={styles.buttonContainer}>
        <OptionButton label="Profile" onPress={handlePageOnePress} />
        <OptionButton label="Diary" onPress={handlePageTwoPress} />
      </View>
      {page === 1 ? <ProfilePage route= {route} navigation={navigation}/> : <DiaryPage route= {route} navigation={navigation}/>}
            
        </View>
        </SafeAreaView>
       
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      paddingTop:5
    },
    button: {
      backgroundColor: '#000000',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      minWidth:170,
      midHeight:20
    },
    buttonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign:'center',
      fontFamily: 'Chunky'
    },
    NameDiary:{
        fontFamily: 'Chunky',
        fontSize:40,
        color: '#000000', 
    },
    input: {
      backgroundColor: '#fff',
      height: 100,
      width: '100%',
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 10,
      padding: 5,
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
    infoText:{
      marginTop:20,
      fontFamily: 'Chunky',
      textAlign:'center'
    },
   
    header:{
      paddingTop:5,
      fontFamily: 'Chunky',
      fontSize: 25,
            },

    modalText: {
      color: '#007AFF',
      marginTop: 10,
    },
 
  });

export default AnimalDiary

