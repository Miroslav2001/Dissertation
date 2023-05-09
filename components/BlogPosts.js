import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, Button,SafeAreaView,TouchableOpacity } from 'react-native';
import {database} from '../firebaseConfig'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
const BlogPostForm = ({onSuccess, profileId }) => {
  const [postContent, setPostContent] = useState('');
  
  


  const handlePostSubmit = async () => {
    const postRef = await database.collection('Diary').add({
      content: postContent,
      author: global.displayName,
      date: new Date(),
      profileId: profileId,
    });

   
    onSuccess(postRef.id);

   
    setPostContent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={postContent}
        onChangeText={setPostContent}
        placeholder="Write your blog post here"
        multiline={true}
        numberOfLines={4}
      />
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

const BlogPost = ({ content, author, date }) => (
  <View style={styles.blogPost}>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.date}>{date.toDateString()}</Text>
  </View>
);

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
          <BlogPost content={item.content} author={item.author} date={item.date.toDate()} />
        )}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingTop:20
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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

export default BlogPosts;