import {Text, View, SafeAreaView, Image, FlatList,StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import {COLORS, SIZES, SHADOWS, FONTS,assets} from '../constants'
import{AnimalProfile, AnimalsDesc, CircleButton,BlogPosts} from '../components'
import Details from './AnimalProfiles'
import React, {useState} from 'react'
import {AnimalName, AnimalInformaiton} from '../components/SubInfo'
import {DistanceComponent} from '../components'



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
    console.log(data.id)
    const userLocationLongtitude = global.location_long
    const userLocationLatitude = global.location_lat
    const animalLocationLongtitude = data.Location_Longtitude
    const animalLocationLlatitude = data.Location_Latitude
    
    
    
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
            handlePress={() => navigation.goBack()}
            />
            <DistanceComponent userLocationLat = {userLocationLatitude} userLocationLong = {userLocationLongtitude} destinationLat = {animalLocationLlatitude} destinationLong = {animalLocationLongtitude}/>
    </View>
  )};
  
  const DiaryPage = ({route,navigation}) => {
    const { data } = route.params;
    return(
    <View style={styles.container}>
      <CircleButton
            imgUrl={assets.left}
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
 
  });

export default AnimalDiary

