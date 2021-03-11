import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from 'react-native-elements';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Bookmark from "../components/stuff/Bookmark";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Homebar from "../components/stuff/Homebar";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Welcome({ navigation }) {
  return (
    /*<View style= { 'backgroundColor: black '}>
      <Text>Welcome</Text>
      <Text>Notifications</Text>
      <Text>Spotlighted Media of the Day</Text>
      <Card>
        <Card.Title>Media Name</Card.Title>
        <Card.Divider/>
        <Card.Image>
          
        </Card.Image>
      </Card>
      <Text>You have no new notifications</Text>
    </View>*/
    <View style={styles.container}>
      <View style={styles.notificationBody}>
        <View style={styles.body}>
          <View style={styles.notificationsStack}>
            <Text style={styles.notifications}>Notifications</Text>
            <MaterialCommunityIconsIcon
              name="spotlight"
              style={styles.spotlightIcon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.spotlightTitle}>
              Spotlighted Media of the Day
            </Text>
          </View>
          <Bookmark style={styles.bookmark}></Bookmark>
          <View style={styles.chatNotif}>
            <View style={styles.chatIconRow}>
              <IoniconsIcon
                name="md-chatboxes"
                style={styles.chatIcon}
              ></IoniconsIcon>
              <Text style={styles.chatNotifications}>
                # new messages {"\n"}# new friend requests
              </Text>
            </View>
          </View>
          <View style={styles.softwareNotif}>
            <View style={styles.settingsIconRow}>
              <FontAwesomeIcon
                name="gear"
                style={styles.settingsIcon}
              ></FontAwesomeIcon>
              <Text style={styles.softwareNotifications}>
                No new software updates
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.genRecButton}>
        <View style={styles.button}>
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
              <Text style={styles.generateRec}>Generate Recommendations</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  notificationBody: {
    width: 315,
    height: 534,
    marginTop: 99,
    marginLeft: 23
  },
  body: {
    width: 315,
    height: 534,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 70
  },
  notifications: {
    top: 0,
    left: 11,
    position: "absolute",
    fontFamily: "OpenSans_700Bold",
    color: "rgba(249,105,0,1)",
    height: 65,
    width: 285,
    fontSize: 36,
    textAlign: "center"
  },
  spotlightIcon: {
    top: 52,
    left: 0,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  spotlightTitle: {
    top: 65,
    left: 37,
    position: "absolute",
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 62,
    width: 231,
    fontSize: 24,
    textAlign: "center"
  },
  notificationsStack: {
    width: 296,
    height: 127,
    marginTop: 10,
    marginLeft: 4
  },
  bookmark: {
    height: 210,
    width: 231,
    marginTop: 12,
    marginLeft: 41
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
    color: "#121212",
    height: 62,
    width: 231,
    fontSize: 18,
    marginLeft: 29
  },
  chatIconRow: {
    height: 62,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  softwareNotif: {
    width: 277,
    height: 70,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 7
  },
  settingsIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40
  },
  softwareNotifications: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 60,
    width: 215,
    fontSize: 18,
    marginLeft: 28,
    marginTop: 10
  },
  settingsIconRow: {
    height: 70,
    flexDirection: "row",
    flex: 1
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
    marginTop: -776,
    marginLeft: 14
  },
  genRecButton: {
    width: 325,
    height: 68,
    marginTop: 556,
    marginLeft: 18
  },
  button: {
    width: 325,
    height: 68,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 82,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
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
    top: 4,
    left: 15,
    position: "absolute",
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 63,
    width: 258,
    fontSize: 20,
    textAlign: "center"
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
    marginTop: 1
  }
});

export default Welcome;