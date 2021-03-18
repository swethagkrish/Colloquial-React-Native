import React, { Component, useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text ,Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { UserAuthContext } from '../navigation/UserAuthProvider';
import { firestore } from '../components/Firebase/method';

function Bookmarks({ route, navigation }) {
  const [media, setMedia] = useState([]);
  const [language, setLanguage] = useState('');
  const { user } = useContext(UserAuthContext);
  const currentUser = user.toJSON();

  const ref = firestore.collection('users').doc(currentUser.uid).collection('bookmarks');

  useEffect(() => {
    if(language.length > 0) {
      const chosenMedia = [];
      ref
      .where('language', '==', language)
      .get()
      .then(snapshot => {
        if(!snapshot.empty) {
          snapshot.forEach(doc => {
            const data = {
              id: doc.id,
              image: doc.data().image,
              name: doc.data().name,
              lang: language
            };
            //setMedia(media => [...media, data]);
            chosenMedia.push(data);
          })
          setMedia(chosenMedia);
        } else {
          setMedia([]);
        }
      })
    } else {
      ref
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            id: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            lang: language
          };
          setMedia(media => [...media, data]);
        })
      })
    }
  }, [language]);
  const data = [
    {
      name: "Germany",
      img: require("../assets/flags/germany.png"),
      language: 'german'
    },
    {
      name: "Portugal",
      img: require("../assets/flags/portugal.png"),
      language: 'portuguese'
    }, 
    {
      name: "France",
      img: require("../assets/flags/france.png"),
      language: 'french'
    }, 
    {
      name: "Spain",
      img: require("../assets/flags/spain.png"),
      language: "spanish"
    }, 
    {
      name: "Italy",
      img: require('../assets/flags/italy.png'),
      language: 'italian'
    }, 
    {
      name: "Netherlands",
      img: require("../assets/flags/netherlands.png"),
      language: 'dutch'
    }
  ]

  let save = media.filter( (ele, ind) => ind === media.findIndex( elem => elem.id === ele.id));

    const renderMedia = ({ item }) => (
      <TouchableOpacity style={styles.mediaButton}>
        <Image
          style={{  width: 100, height: 130, alignSelf: "center", marginTop: 20}}
          source={{uri: item.image}}
        />
        <Text style = {styles.label}>{item.name}</Text>
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.languageButton} onPress={() => setLanguage(item.language)}>
        <Image
          style={{ width: 50, height: 40}}
          source={item.img}
        />
      </TouchableOpacity>
    );

      return (
        <ScrollView contentContainerStyle={{alignItems: "center"}}>
          <View>
            <View style={styles.container}>
              <Text style={styles.bookmarkTitle}>Bookmarks</Text>
            </View> 
            <View>
              <View style = {{alignItems: "center"}}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.name}
                  numColumns={3}
                  contentContainerStyle={{ paddingVertical: 5, marginTop: 20}}
                />
              </View>
              <View style = {{alignItems: "center"}}>
                <FlatList
                  data={save}
                  renderItem={renderMedia}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  contentContainerStyle={{ paddingVertical: 10 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  
  /*return (
    <View style={styles.container}>
      {<Homebar style={styles.homebar}></Homebar>}
      <View style={styles.bookmarkTitleStack}>
        <Text style={styles.bookmarkTitle}>Bookmarks</Text>
        <View style={styles.bookmarkBody}>
          <View style={styles.body}>
            <Text style={styles.sortBy}>Sort By</Text>
            <View style={styles.gERRow}>
              <View style={styles.gER}></View>
              <View style={styles.fRA}></View>
              <View style={styles.eSP}></View>
            </View>
            <View style={styles.pORRow}>
              <View style={styles.pOR}></View>
              <View style={styles.dUT}></View>
              <View style={styles.iTL}></View>
            </View>
            <Text style={styles.ger}>GER</Text>
            {<BookmarkComponent
              style={styles.bookmarkComponent}
            ></BookmarkComponent>}
          </View>
        </View>
      </View>
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    marginTop: 30
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 675
  },
  buttonContainter: {
    width: 327, 
    height: 700,
    alignItems: "center"
  },
  languageButton: {
    marginHorizontal: 5,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: "#FF8600",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    width: 80,
    height: 65, 
    alignItems: "center",
    justifyContent: "center"
  },
  mediaButton: {
    width: 154,
    height: 221,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginRight: 15, 
    marginBottom: 15
  },
  bookmarkTitle: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    fontSize: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  languageLabel: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24
  }, 
  label: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 12,
    color: "#006BA6",
    alignSelf: "center"
  }
});

export default Bookmarks;
