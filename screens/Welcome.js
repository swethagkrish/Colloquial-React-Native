import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { ViewBase } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { auth } from '../components/Firebase/method';

function Welcome({ navigation }) {
  const generate = () => {
    navigation.navigate('MediaNavigation', {screen: 'SelectLanguage'});
  }
  
  const signOut = () => {
    console.log('log out');
    auth.signOut();
  }
  
  return (
    <ScrollView contentContainerStyle={{marginTop: 50, alignItems: "center"}}>
      <Text style = {styles.text}>Welcome</Text>
      <View style = {styles.notificationBody}>
        <Text style = {styles.notifications} >Notifications</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf : 'flex-start'}}>
          <MaterialCommunityIconsIcon
              name="spotlight"
              style={styles.spotlightIcon}
          ></MaterialCommunityIconsIcon>
          <Text style = {styles.spotlightTitle}> Spotlighted Media</Text>
        </View>
        <Card containerStyle = {styles.bookmark}>
          <Card.Title style = {{fontFamily: "OpenSans_700Bold", color: "#FFFFFF", fontSize: 18}}>Nanutria: El ciclo de la vida</Card.Title>
          <Card.Image style = {{height: 150, width: 200}} source = {require("../assets/spotlight.jpg")}>
          </Card.Image>
        </Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: '0%',alignSelf: 'flex-start' }}>
          <Ionicons name="chatbox-sharp" size={50} color="rgba(0,107,166,1)"></Ionicons>
          <Text style = {styles.chatNotifications}>  No new notifications</Text>
        </View>
      </View>
    
      <TouchableOpacity onPress={generate}>
        <View style = {styles.button}>
            <View style = {styles.emojiContainer}>
              <View style={styles.bookStackRow}>
                <View style={styles.bookStack}>
                  <EntypoIcon name="book" style={styles.book}></EntypoIcon>
                  <MaterialCommunityIconsIcon
                    name="video-vintage"
                    style={styles.movie}
                  ></MaterialCommunityIconsIcon>
                </View>
                <View style={styles.tVStack}>
                  <MaterialCommunityIconsIcon
                    name="television-classic"
                    style={styles.tV}
                  ></MaterialCommunityIconsIcon>
                  <FontAwesomeIcon
                    name="music"
                    style={styles.music}
                  ></FontAwesomeIcon>
                </View>
              </View>
            </View>
            <Text style={styles.generateRec}>Generate Media Recs</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut}>
        <View style = {styles.button}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25,  marginLeft: 30, alignSelf : 'flex-start'}}>
        <Image style={{ width: 40, height: 40, alignSelf: "center"}} source = {require("../assets/emojis/logout.png")} />
          <Text style={styles.logout}>Logout </Text>
        </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    alignItems: "center",
    marginTop: 50
  },
  button: {
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
    alignSelf : 'center', 
    marginTop: 10
  },
  emojiContainer: {
    width: 60, 
    height: 60,
    marginBottom: 5,
    marginTop: 5
  },
  notificationBody: {
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 70,
    opacity: 0.75,
    width: 320,
    height: 450,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10
  },
  body: {
    width: 315,
    height: 700,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 70
  },
  notifications: {
    fontFamily: "OpenSans_700Bold",
    color: "rgba(249,105,0,1)",
    fontSize: 36,
    textAlign: "center"
  },
  spotlightIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  spotlightTitle: {
    fontFamily: "OpenSans_700Bold",
    color: "#000000",
    fontSize: 24,
    alignSelf: "center"
  },
  notificationsStack: {
    width: 296,
    height: 100,
    marginTop: 10,
    marginLeft: 4
  },
  bookmark: {
    height: 250,
    width: 231,
    borderRadius: 43,
    backgroundColor: '#FF8600'
  },
  chatNotif: {
    width: 292,
    height: 62,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 8
  },
  chatIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40
  },
  chatNotifications: {
    fontFamily: "OpenSans_400Regular",
    color: "#000000",
    fontSize: 18,
    marginTop: 10,
  },
  softwareNotif: {
    width: 277,
    height: 70,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 7
  },
  homebar: {
    height: 65,
    width: 360,
    marginTop: 102,
    marginLeft: 1
  },
  text: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 65,
    width: 332,
    textAlign: "center",
    fontSize: 48,
    alignSelf: "center",
    marginBottom: 10
  },
  book: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  movie: {
    top: 30,
    left: 0,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  bookStack: {
    width: 30,
    height: 63
  },
  tV: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  music: {
    top: 30,
    left: 2,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 30,
    height: 30,
    width: 26
  },
  generateRec: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 63,
    width: 258,
    fontSize: 20,
    alignSelf: "center",
    marginLeft: 35,
    marginTop: 30
  },
  logout: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    fontSize: 20,
    marginTop: 5, 
    marginLeft: 70
  },
  tVStack: {
    width: 273,
    height: 67,
    marginLeft: 3
  },
  bookStackRow: {
    height: 67,
    flexDirection: "row",
    flex: 1,
    marginLeft: 19,
    marginTop: 5
  }
});

export default Welcome;