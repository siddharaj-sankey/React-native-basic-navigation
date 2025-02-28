import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const PostScreen = () => {
  const [data, setData] = useState<any[]>([]); 
  

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => {
        setData(data);  // Store the fetched data in the state
      
      })
      .catch((error) => {
        console.error(error);  
     
      });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <FlatList
        data={data}  // Data to render in the FlatList
        keyExtractor={(item) => item.id.toString()}  // Unique key for each item
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postItem: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PostScreen;
