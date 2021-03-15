import React, { Component, useState } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, Button, FlatList, Image, ScrollView} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {MaterialCommunityIconsIcon} from "@expo/vector-icons";
import {FontAwesomeIcon} from "@expo/vector-icons";
import {SimpleLineIconsIcon} from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

//import Homebar from "../components/Homebar";

function Filter({ route, navigation }) {
  const [media, setMedia] = useState([]);
  const [genre, setGenre] = useState([]);
  const [sort, SetSort] = useState([]);
  const language = route.params.language;

  const category = [
    {
      name: "Books",
      tag: "book",
      img: require("../assets/emojis/book.png")
    }, 
    {
      name: "Music",
      tag: "music",
      img: require("../assets/emojis/music.png"),
    },
    {
      name: "TV Shows",
      tag: "tv",
      img: require("../assets/emojis/tv.png")
    },
    {
      name: "Movies",
      tag: "movie",
      img: require("../assets/emojis/movie.png")
    }
  ]

  const genres = [
    {
      name: "Action",
      tag: "adventure",
      img: require("../assets/emojis/action.png")
    },
    {
      name: "Comedy",
      tag: "comedy",
      img: require("../assets/emojis/comedy.png")
    }, 
    {
      name: "Romance",
      tag: "romance",
      img: require("../assets/emojis/romance.png")
    }, 
    {
      name: "Thriller",
      tag: "thriller",
      img: require("../assets/emojis/thriller.png")
    }, 
    {
      name: "Horror",
      tag: "horror",
      img: require("../assets/emojis/horror.png")
    }, 
    {
      name: "Drama",
      tag: "drama",
      img: require("../assets/emojis/drama.png")
    }
  ] 

  const sorts = [
    {
      name: "Recent",
      tag: "recent",
      img: require("../assets/emojis/calendar.png")
    }, 
    {
      name: "A-Z",
      tag: "alphabet", 
      img: require("../assets/emojis/alpha.png")
    }
  ]

  const filterMedia = () => {
    navigation.navigate('FilteredMedia', {lang: language, gen: genre, mediaSelected: media, selectedSort: sort});
  }

  /*navigation.setOptions({
    headerBackImage: () => (
      <Entypo name="arrow-left" size={24} color="black" />
    )
  })*/
  

   const renderItem = ({ item }) => (
    <TouchableHighlight style={styles.filterButton} onPress={() => {setMedia(media => [...media, item.tag])}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: '0%',alignSelf: 'flex-start', justifyContent: 'center'}}>
          <Image style={{ width: 40, height: 40, alignSelf: "flex-start", marginTop: 10, marginLeft: 8}} source={item.img} />
          <Text style={{fontFamily: "OpenSans_700Bold", color: "#FFFFFF", marginTop: 22, marginLeft: 6, fontSize: 16}}>{item.name}</Text>
        </View>
    </TouchableHighlight>
    );

    const renderGenre = ({item}) => (
        <TouchableHighlight style={styles.filterButton} onPress={() => {setGenre(genre => [...genre, item.tag])}}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: '0%',alignSelf: 'flex-start', justifyContent: 'center'}}>
          <Image style={{ width: 40, height: 40, alignSelf: "flex-start", marginTop: 10, marginLeft: 8}} source={item.img} />
          <Text style={{fontFamily: "OpenSans_700Bold", color: "#FFFFFF", marginTop: 22, marginLeft: 6, fontSize: 16}}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );

    const renderSort = ({item}) => (
      <TouchableHighlight style={styles.filterButton} onPress={() => {setSort(sort => [...sort, item.tag])}}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: '0%',alignSelf: 'flex-start', justifyContent: 'center'}}>
        <Image style={{ width: 35, height: 35, alignSelf: "flex-start", marginTop: 15, marginLeft: 12}} source={item.img} />
        <Text style={{fontFamily: "OpenSans_700Bold", color: "#FFFFFF", marginTop: 22, marginLeft: 12, fontSize: 16}}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
    return (
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: "center"}}>
        <View>
            <Text style={styles.title}>Filter Media</Text> 
        </View>
        <View style= {styles.filterBody}> 
          <Text style = {styles.labels}> Category</Text> 
          <FlatList
                data={category}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                numColumns={2}
                style={{}}
                contentContainerStyle={{}}
          />  
          <Text style = {styles.labels}>Genre</Text>
          <FlatList 
            data = {genres}
            renderItem = {renderGenre}
            keyExtractor= {item => item.name}
            numColumns={2}
            style={{}}
            contentContainerStyle = {{}}
          />  
          <Text style = {styles.labels}> Sort </Text>
          <FlatList 
            data = {sorts}
            renderItem = {renderSort}
            keyExtractor= {item => item.name}
            numColumns={2}
            style={{}}
            contentContainerStyle = {{}}
          />  
        </View>
        <TouchableOpacity onPress={filterMedia}>
            <View style ={styles.button}>
            <Image style = {styles.filterSheet} source ={require('../assets/emojis/filter.png')} />
            <Text style = {styles.filterText}>Filter Media</Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    );
  }
const styles = StyleSheet.create({
  container: {
    
  },
  labels: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 16,
    color: "#006BA6",
    height: 22
  },
  filterBody: {
    backgroundColor: "#D9F0FF", 
    borderRadius: 70, 
    width: 321,
    height: 600,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  title: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    fontSize: 48,
    alignItems: "center",
    justifyContent: "center"
  }, 
  filterEmoji: {
    width: 50, 
    height: 50
  },
  filterButton: {
    backgroundColor: "#FF8600",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    width: 133,
    height: 63,
    marginRight: 10,
    marginTop: 10
  },  
  body: {
    left: 15,
    width: 321,
    height: 400,
    position: "absolute",
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 70,
    top: 1
  },
  category: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    height: 33,
    width: 99,
    fontSize: 18,
    alignSelf: "center"
  },
  bookButton: {
    width: 142,
    height: 63
  },
  booButton: {
    top: 0,
    left: 0,
    width: 133,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  filterBodyStack: {
    width: 355,
    height: 755,
    marginTop: 15
  },
  filterMediaButton: {
    width: 325,
    height: 87,
    marginTop: 13,
    marginLeft: 24
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    width: 325,
    height: 80,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 82,
    marginBottom: "3%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignSelf : 'center'
  },
  filterText: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 60
  },
  filterSheet: {
    height: 40,
    width: 40,
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 80
  },
  homebar: {
    width: 362,
    height: 65,
    marginTop: 15
  }
});

export default Filter;
