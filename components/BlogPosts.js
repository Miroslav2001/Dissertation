import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, Button,SafeAreaView,TouchableOpacity, Image } from 'react-native';
import {database} from '../firebaseConfig'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const BlogPostForm = ({onSuccess, profileId }) => {
  const [postContent, setPostContent] = useState('');
  const [imageSource, setImageSource] = useState();
  const [imageSelection, imageSelectionSet] = useState(false);
  const changeImage = (result) => {
    
    setImageSource(result.uri);
  };
  const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
  });
  
  changeImage(result)
  imageSelectionSet(true)
  

  // if (!result.canceled) {
  //   console.log("YES AB")
  //   console.log(result.assets[{uri}])
  //   imageuploadURL = result.uri
  //   changeImage()
  // }
};
  


  const handlePostSubmit = async () => {
    console.log(imageSource)
    if(imageSource == null){
    await database.collection('Diary').add({
      content: postContent,
      author: global.displayName,
      date: new Date(),
      profileId: profileId,
    });
  }
  else{
    console.log('imageuploadURL')
    await database.collection('Diary').add({
      content: postContent,
      author: global.displayName,
      date: new Date(),
      profileId: profileId,
      image: imageSource
    });
  }

    imageSelectionSet(false)
    setPostContent('');
    setImageSource(null)
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 18, paddingBottom:10,paddingTop:-10}}>
    <Icon.Button 
      name="camera"
      color='black'
      backgroundColor="transparent"
      borderRadius={10}
      size={30}
      onPress={pickImage}/>
      <Text style={{paddingRight:15, fontFamily: 'Chunky'}}> Upload Image</Text>
      </View>
      <TextInput
        style={styles.input}
        value={postContent}
        onChangeText={setPostContent}
        placeholder="Write your blog post here"
        multiline={true}
        numberOfLines={4}
      />
      {imageSelection ? (
      <Text style={{ color:'purple', paddingBottom:10,fontFamily: 'Chunky',textAlign:'center'}}>Image is loaded and is ready to be posted.</Text>
    ) : (
      <Text></Text> // NO Text wehen user hasnt selected an image
    )}
      <View>
      <TouchableOpacity
        style={styles.submitbutton}
        onPress={handlePostSubmit}
      >
        <Text
          style={styles.submitButtonText}
        >
          Submit
        </Text>
      </TouchableOpacity>
      </View>
     
    </View>
  );
};

const BlogPost = ({ content, author, date, uri }) => {
  if(uri != undefined){
    return(
    <View style={styles.blogPost}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.content}>{content}</Text>
            <Image 
                source={{uri:uri}}
                resizeMode="cover"
                style={{
                    
                    width:350,
                    height:250,
                    borderRadius: SIZES.font,
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font,            
                }}
                />
                <Text style={styles.date}>{date.toDateString()}</Text>
          </View>
  
      )}else{
            return(
            <View style={styles.blogPost}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.content}>{content}</Text>
          <Text style={styles.date}>{date.toDateString()}</Text>
    </View>
      )}}


const BlogPosts = ({profileId}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection('Diary')
      .where('profileId', '==', profileId)
      .orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const newPost = change.doc.data();
            setPosts((prevPosts) => [...prevPosts, newPost]);
          }
        });
      });

    return () => unsubscribe();
  }, [profileId]);

  const handlePostAdded = (postId) => {
    // Do nothing - the post will be added in the second useEffect()
  };

 
  useEffect(() => {
    const unsubscribe = database
      .collection('Diary')
      .where('profileId', '==', profileId)
      .orderBy('date', 'desc') // Sort posts by date in descending order
      .onSnapshot((querySnapshot) => {
        const newPosts = querySnapshot.docs.map((doc) => doc.data());
        setPosts(newPosts);
      });

      return () => unsubscribe();
      
    }, [profileId]);

  return (
    <SafeAreaView>
    <View>
      
      <BlogPostForm onSuccess={handlePostAdded} profileId={profileId} />
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <BlogPost content={item.content} author={item.author} date={item.date.toDate()} uri={item.image} />
        )}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingTop:10
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    minWidth: 400
  },
  blogPost: {
    backgroundColor: '#77ccff',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    marginBottom: 5,
  },
  date: {
    color: '#666',
  },
  submitbutton:{
    backgroundColor:'#000000',
    padding: SIZES.small,
    borderRadius: SIZES.extraLarge,
    minWidth:10
  },
  submitButtonText:{
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: COLORS.white,
    textAlign: "center",
    fontFamily: 'Chunky'
  }
});
export default BlogPosts