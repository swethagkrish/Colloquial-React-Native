import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
//import MediaTitles from "../components/MediaTitles";
import Homebar from "../components/stuff/Homebar";
import BackArrow from "../components/stuff/BackArrow";
import { database } from '../components/Firebase/method'

function FilteredMedia({ route, navigation}) {
  const selectedGenre = route.params.gen;
  const selectedMedia = route.params.mediaSelected;
  const selectLanguage = route.params.lang;

  const [bookList, setBook] = useState([]);
  const [movieList, setMovie] = useState([]);
  const [songList, setSong] = useState([]);

  var rootRef = database.ref(selectLanguage);

  useEffect(() => {
    for (let i = 0; i < selectedMedia.length; i++) {
      rootRef.child(selectedMedia[i]).get().then(function(snapshot) {
        snapshot.forEach(function(childShot) {
          var summary = 'No summary';
          var image = "https://img.icons8.com/ios-filled/100/000000/no-image.png";
  
          if (selectedMedia[i] == 'book') {
            if (childShot.child('volumeInfo').hasChild('description')) {
              summary = childShot.child('volumeInfo/description').val();
            }
            if (childShot.child('volumeInfo').hasChild('imageLinks')) {
              image = childShot.child('volumeInfo/imageLinks/smallThumbnail').val();
            }
            
            if (selectedGenre.length != 0) {
              if (childShot.child('volumeInfo').hasChild('categories')) {
                for (let a = 0; a < selectedGenre.length; a++) {
                  const category = childShot.child('volumeInfo/categories').val();
                  if (category[0].toUpperCase() === selectedGenre[a].toUpperCase()) {
                    setBook(bookList => [...bookList, {id: childShot.child('id').val(),title: childShot.child('volumeInfo/title').val(), summary: summary, image: image}]);
                  }
                }
              }
            } else {
              setBook(bookList => [...bookList, {id: childShot.child('id').val(), title: childShot.child('volumeInfo/title').val(), summary: summary, image: image}]);
            }
          }
          
          if (selectedMedia[i] == 'movie' || selectedMedia[i] == 'tv') {
            if (childShot.hasChild('poster_path')) {
              image = 'https://image.tmdb.org/t/p/w500' + childShot.child('poster_path').val();
            }
            if (childShot.hasChild('genre')) {
              if (selectedGenre.length != 0) {
                for (let a = 0; a < selectedGenre.length; a++) {
                  const category = childShot.child('genre').val();
                  if (category[0].toUpperCase() === selectedGenre[i]) {
                    setMovie(movieList => [...movieList, {title: childShot.child('title').val(), image: image}]);
                  }
                }
              } else {
                setMovie(movieList => [...movieList, {title: childShot.child('title').val(), image: image}]);
              }
            }
          }
          if (selectedMedia[i] == 'song') {
            if(childShot.child('track/album').hasChild('images')) {
              image = childShot.child('album/images/2').val();
              setSong(songList => [...songList, {title: childShot.child('track/name').val(), artist: childShot.child('track/artists').val()}])
            }
          }
        })
      });
    }
  }, []);

  let book = bookList.filter( (ele, ind) => ind === bookList.findIndex( elem => elem.id === ele.id));

  const renderBook = ({ item }) => {
    const link = item.image;
    var imageLink = '';
    if (link.charAt(4) != 's') {
      imageLink = link.slice(0, 4) + 's' + link.slice(4);
    }
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SelectedMedia', {media: item, image: imageLink})}>
        <Text>{item.title}</Text>
        <Image
          style={{ width: 100, height: 170}}
          source={{uri: imageLink}}
          resizeMode='cover'
        />
      </TouchableOpacity>
    )
    
  }

  const renderMovie = ({ item }) => {
    <TouchableOpacity>
        <Text>{item.title}</Text>
        <Image
          style={{ width: 100, height: 70}}
          source={item.image}
        />
    </TouchableOpacity>
  }

  const renderSong = ({ item }) => {
    <TouchableOpacity>
        <Text>{item.title}</Text>
        <Image
          style={{ width: 100, height: 70}}
          source={item.image}
        />
        <Text>{item.artist}</Text>
    </TouchableOpacity>
  }

  function displayBook() {
    return (
      <View>
          <View>
              <Text>Book</Text>
          </View> 
          <FlatList
            data={book}
            renderItem={renderBook}
            keyExtractor={item => item.title}
            numColumns={2}
            contentContainerStyle={{ paddingVertical: 5 }}
          />
    </View>
    )
  }

  function displayMovie() {
    return (
      <View style={{ flex: 1 }}>
          <View style={styles.container}>
              <Text>Movie</Text>
          </View> 
          <FlatList
            data={movieList}
            renderItem={renderMovie}
            keyExtractor={item => item.title}
            numColumns={2}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 5 }}
          />
     </View>
    )
  }

  function displaySong() {
    return (
      <View style={{ flex: 1 }}>
          <View style={styles.container}>
              <Text>Song</Text>
          </View> 
          <FlatList
            data={songList}
            renderItem={renderSong}
            keyExtractor={item => item.title}
            numColumns={2}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 5 }}
          />
      </View>
    )
  }
  return (
    <View>
      <View>
        {displayBook()}
      </View>
      <View>
        {displayMovie()}
      </View>
      <View>
        {displaySong()}
      </View>
    </View>
    /*<View style={styles.container}>
      <View style={styles.mediaTitlesRow}>
        <MediaTitles style={styles.mediaTitles}></MediaTitles>
        <MediaTitles style={styles.mediaTitles2}></MediaTitles>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.backArrowRow}>
        <BackArrow style={styles.backArrow}></BackArrow>
        <Text style={styles.text}>Filtered Media</Text>
      </View>
      <View style={styles.mediaTitles3Row}>
        <MediaTitles style={styles.mediaTitles3}></MediaTitles>
        <MediaTitles style={styles.mediaTitles4}></MediaTitles>
      </View>
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mediaTitles: {
    height: 221,
    width: 154
  },
  mediaTitles2: {
    width: 154,
    height: 221,
    marginLeft: 30
  },
  mediaTitlesRow: {
    height: 221,
    flexDirection: "row",
    marginTop: 167,
    marginLeft: 10,
    marginRight: 12
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 287,
    alignSelf: "center"
  },
  backArrow: {
    width: 48,
    height: 76
  },
  text: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 126,
    width: 239,
    fontSize: 48,
    textAlign: "center",
    marginLeft: 3
  },
  backArrowRow: {
    height: 126,
    flexDirection: "row",
    marginTop: -710,
    marginLeft: 10,
    marginRight: 60
  },
  mediaTitles3: {
    width: 154,
    height: 221
  },
  mediaTitles4: {
    width: 154,
    height: 221,
    marginLeft: 24,
    marginTop: 4
  },
  mediaTitles3Row: {
    height: 225,
    flexDirection: "row",
    marginTop: 269,
    marginLeft: 16,
    marginRight: 12
  }
});

export default FilteredMedia;
