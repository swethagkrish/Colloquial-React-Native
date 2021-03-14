import React, { Component, useState } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, Button, FlatList, Image} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {MaterialCommunityIconsIcon} from "@expo/vector-icons";
import {FontAwesomeIcon} from "@expo/vector-icons";
import {SimpleLineIconsIcon} from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

//import Homebar from "../components/Homebar";

function Filter({ route, navigation }) {
  const [media, setMedia] = useState([]);
  const [genre, setGenre] = useState([]);
  //const [sort, SetSort] = useState(null);
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

  const filterMedia = () => {
    navigation.navigate('FilteredMedia', {lang: language, gen: genre, mediaSelected: media});
  }

  /*navigation.setOptions({
    headerBackImage: () => (
      <Entypo name="arrow-left" size={24} color="black" />
    )
  })*/
  

   const renderItem = ({ item }) => (
    <TouchableHighlight style={styles.filterButton} onPress={() => {setMedia(media => [...media, item.tag])}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: '0%',alignSelf: 'flex-start', justifyContent: 'center'}}>
          <Image style={{ width: 40, height: 40}} source={item.img} />
          <Text style={{fontFamily: "OpenSans_700Bold", color: "#FFFFFF", fontSize: 16}}>{item.name}</Text>
        </View>
    </TouchableHighlight>
    );

    const renderGenre = ({item}) => (
        <TouchableHighlight style={styles.filterButton} onPress={() => {setGenre(genre => [...genre, item.tag])}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{ width: 40, height: 40}} source={item.img} />
            <Text>{item.name}</Text>
          </View>
      </TouchableHighlight>
    );
    return (
      <View style={styles.container}>
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
              style={{marginBottom: 1}}
              contentContainerStyle={{ paddingVertical: 5 }}
            />
            <Text style = {styles.labels}>Genre</Text>
            <FlatList 
            data = {genres}
            renderItem = {renderGenre}
            keyExtractor= {item => item.name}
            numColums = {2}
            style={{}}
            contentContainerStyle = {{paddingVertical: 10}}
           /> 
        </View>
      </View>
    );
  /*return (
    <View>
      <View>
        <Text style={styles.category}>Category</Text>
      </View>
      <TouchableHighlight onPress={() => {setMedia(media => [...media, 'book'])}}>
        <Text>Book</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setMedia(media => [...media, 'movie'])}}>
        <Text>Movie</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setMedia(media => [...media, 'tv'])}}>
        <Text>TV Shows</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setMedia(media => [...media, 'music'])}}>
        <Text>Music</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setGenre(genre => [...genre, 'adventure'])}}>
        <Text>Action</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setGenre(genre => [...genre, 'comedy'])}}>
        <Text>Comedy</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setGenre(genre => [...genre, 'drama'])}}>
        <Text>Drama</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setGenre(genre => [...genre, 'thriller'])}}>
        <Text>Thriller</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setGenre(genre => [...genre, 'horror'])}}>
        <Text>Horror</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {setGenre(genre => [...genre, 'romance'])}}>
        <Text>Romance</Text>
      </TouchableHighlight>
      <Button title="Filter" onPress={filterMedia}/>
    </View> */
    /*<View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.filterBodyStack}>
        <View style={styles.filterBody}>
          <View style={styles.bodyStack}>
            <View style={styles.body}>
              <Text style={styles.category}>Category</Text>
              <View style={styles.bookButtonRow}>
                <View style={styles.bookButton}>
                  <View style={styles.booButtonStack}>
                    <View style={styles.booButton}>
                      <EntypoIcon
                        name="book"
                        style={styles.bookEmoji}
                      ></EntypoIcon>
                    </View>
                    <Text style={styles.books}>Books</Text>
                  </View>
                </View>
                <View style={styles.tVShowsButton}>
                  <View style={styles.tvsButton}>
                    <View style={styles.tVEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="television-classic"
                        style={styles.tVEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.tvShows}>TV Shows</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.moviesButtonRow}>
                <View style={styles.moviesButton}>
                  <View style={styles.movButton}>
                    <View style={styles.movieEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="video-vintage"
                        style={styles.movieEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.movies}>Movies</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.musicButton}>
                  <View style={styles.musButton}>
                    <View style={styles.musicEmojiRow}>
                      <FontAwesomeIcon
                        name="music"
                        style={styles.musicEmoji}
                      ></FontAwesomeIcon>
                      <Text style={styles.music}>Music</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.genre}>Genre</Text>
              <View style={styles.actionButtonRow}>
                <View style={styles.actionButton}>
                  <View style={styles.actButton}>
                    <View style={styles.actionEmojiRow}>
                      <SimpleLineIconsIcon
                        name="target"
                        style={styles.actionEmoji}
                      ></SimpleLineIconsIcon>
                      <Text style={styles.action}>Action</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.comedyButton}>
                  <View style={styles.comButton}>
                    <View style={styles.comedyEmojiRow}>
                      <IoniconsIcon
                        name="ios-happy"
                        style={styles.comedyEmoji}
                      ></IoniconsIcon>
                      <Text style={styles.comedy}>Comedy</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dramaButtonRow}>
                <View style={styles.dramaButton}>
                  <View style={styles.draButton}>
                    <View style={styles.dramaEmojiRow}>
                      <EntypoIcon
                        name="mask"
                        style={styles.dramaEmoji}
                      ></EntypoIcon>
                      <Text style={styles.drama}>Drama</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.horrorButton}>
                  <View style={styles.horButton}>
                    <View style={styles.horrorEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="ghost"
                        style={styles.horrorEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.horror}>Horror</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.thrillerButtonRow}>
                <View style={styles.thrillerButton}>
                  <View style={styles.thrButton}>
                    <View style={styles.thrillerEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="knife"
                        style={styles.thrillerEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.thriller}>Thriller</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.romanceButton}>
                  <View style={styles.romButtonStack}>
                    <View style={styles.romButton}>
                      <MaterialCommunityIconsIcon
                        name="heart"
                        style={styles.romanceEmoji}
                      ></MaterialCommunityIconsIcon>
                    </View>
                    <Text style={styles.romance}>Romance</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.sort}>Sort</Text>
              <View style={styles.recentSortButtonRow}>
                <View style={styles.recentSortButton}>
                  <View style={styles.mosRecButtonStack}>
                    <View style={styles.mosRecButton}>
                      <FontAwesomeIcon
                        name="calendar"
                        style={styles.calendar}
                      ></FontAwesomeIcon>
                    </View>
                    <Text style={styles.mostRecent}>Most Recent</Text>
                  </View>
                </View>
                <View style={styles.alphaSortButton}>
                  <View style={styles.aZButtonStack}>
                    <View style={styles.aZButton}>
                      <MaterialCommunityIconsIcon
                        name="sort-alphabetical"
                        style={styles.aZ}
                      ></MaterialCommunityIconsIcon>
                    </View>
                    <Text style={styles.alphabetical}>Alphabetical</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.filters}>Filters</Text>
          </View>
        </View>
        <Text style={styles.mediaRecommendations}>Media Recommendations</Text>
        <BackArrow style={styles.backArrow}></BackArrow>
      </View>
      <View style={styles.filterMediaButton}>
        <View style={styles.filButtonStack}>
          <View style={styles.filButton}>
            <Text style={styles.filterMedia}>Filter Media</Text>
          </View>
          <MaterialCommunityIconsIcon
            name="filter-variant"
            style={styles.filterEmoji}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <Homebar style={styles.homebar}></Homebar>
    </View>*/
  }
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  labels: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 18,
    color: "#006BA6", 
    marginBottom
  },
  filterBody: {
    backgroundColor: "#D9F0FF", 
    borderRadius: 70, 
    width: 321,
    height: 643,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
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
    height: 643,
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
  filButton: {
    top: 9,
    left: 0,
    width: 325,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 82,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  filterMedia: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 57,
    width: 102,
    fontSize: 20,
    textAlign: "center",
    marginTop: 6,
    marginLeft: 157
  },
  filterEmoji: {
    color: "rgba(0,107,166,1)",
    fontSize: 80
  },
  filButtonStack: {
    width: 325,
    height: 87
  },
  homebar: {
    width: 362,
    height: 65,
    marginTop: 15
  }
});

export default Filter;
