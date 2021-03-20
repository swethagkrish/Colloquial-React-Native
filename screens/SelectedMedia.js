import React, { Component, useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../navigation/UserAuthProvider"
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements'
import { firestore } from '../components/Firebase/method';

const SelectedMedia = (route, navigation) => {
  const media = route.route.params.media;
  const lang = route.route.params.lang;
  const { user } = useContext(UserAuthContext);
  const currentUser = user.toJSON();

  function save() {
    firestore.collection('users').doc(currentUser.uid).collection('bookmarks').add({language: lang, image: media.image, name: media.title});
    alert('You have saved this media!');
  }
  
  return (
    <ScrollView contentContainerStyle={{alignItems: "center"}}>
       <Text style = {styles.title}>{media.title}</Text>
        <View style = {styles.body}> 
          <Image style={{ width: 260, height: 148, marginTop: 40,alignSelf: "center"}} source={{uri: media.image}} />
          <Text style ={styles.summaryTitle}> Summary </Text>
          <ScrollView>
            <View style = {styles.summaryBox}> 
              <Text style = {styles.summaryText}>{media.summary}</Text>
            </View>
          </ScrollView>
          <Text style = {styles.summaryTitle}>Rating</Text>
          <Text style = {styles.summaryText}> No rating available </Text>
        </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 50, alignSelf : 'flex-start'}}>
        <TouchableOpacity style = {styles.press}  onPress={() => {route.navigation.navigate('Review', {id: media.id, title: media.title})}}> 
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/star.png")} />
          <Text style = {styles.labels}>View</Text>
          <Text style = {styles.labelA}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.press} onPress={() => {route.navigation.navigate('WriteReview', {id: media.id, title: media.title})}}>
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/review.png")} />
          <Text style = {styles.labels}>Write</Text>
          <Text style = {styles.labelA}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.press} onPress={() => save()}> 
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/bookmark.png")} />
          <Text style = {styles.labels}>Bookmark </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 50,
    alignItems: "center"
  },
  viewRatingButton: {
    width: 94,
    height: 142
  },
  press: {
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    width: 94,
    height: 142,
    marginRight: 25
  }, 
  viewRatingBody: {
    width: 94,
    height: 142,
    backgroundColor: "rgba(217,240,255,1)",
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
  star: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 40,
    width: 37,
    marginTop: 10,
    marginLeft: 29
  },
  viewRating: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 60,
    width: 71,
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    marginLeft: 13
  },
  writeReviewButton: {
    width: 94,
    height: 142,
    marginLeft: 30
  },
  body: {
    width: 321,
    height: 409,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "center"
  },
  write: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 40,
    width: 35,
    marginTop: 10,
    marginLeft: 30
  },
  writeReview: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 60,
    width: 77,
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    marginLeft: 9
  },
  saveButton: {
    width: 94,
    height: 142,
    marginLeft: 22
  }, 
  saveBody: {
    width: 94,
    height: 142,
    backgroundColor: "rgba(217,240,255,1)",
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
  bookmark: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 10,
    marginLeft: 27
  },
  save: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 30,
    width: 47,
    fontSize: 20,
    marginTop: 11,
    marginLeft: 24
  },
  viewRatingButtonRow: {
    height: 142,
    flexDirection: "row",
    marginTop: 515,
    marginLeft: 8,
    marginRight: 18
  },
  mediaBody: {
    top: 75,
    left: 13,
    width: 321,
    height: 409,
    position: "absolute"
  },
  photo: {
    width: 260,
    height: 148,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 19,
    marginLeft: 28
  }, 
  summaryBox: {
    height: 90,
    width: 260
  },
  summaryTitle: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    height: 35
  }, 
  summaryText :{
    fontFamily: "OpenSans_400Regular",
    fontSize: 18, 
    color: "rgba(0,0,0,1)",
    alignSelf: "center"
  },
  labels: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    textAlign: "center",
    marginTop: 10
  },
  labelA: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    textAlign: "center"
  }, 
  backArrow: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 48,
    height: 76
  },
  mediaBodyStack: {
    top: 0,
    left: 0,
    width: 334,
    height: 484,
    position: "absolute"
  },
  title: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 10
  },
  mediaBodyStackStack: {
    width: 334,
    height: 484,
    marginTop: -642,
    marginLeft: 8
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 176
  }
});

export default SelectedMedia;
