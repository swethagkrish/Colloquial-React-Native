import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Homebar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tab}>
        <View style={styles.notificationRow}>
          <MaterialIconsIcon
            name="notifications"
            style={styles.notification}
          ></MaterialIconsIcon>
          <IoniconsIcon name="md-chatboxes" style={styles.chat}></IoniconsIcon>
          <View style={styles.earthStack}>
            <IoniconsIcon name="md-globe" style={styles.earth}></IoniconsIcon>
            <MaterialCommunityIconsIcon
              name="television-classic"
              style={styles.icon8}
            ></MaterialCommunityIconsIcon>
            <EntypoIcon name="book" style={styles.icon7}></EntypoIcon>
            <MaterialCommunityIconsIcon
              name="video-vintage"
              style={styles.icon9}
            ></MaterialCommunityIconsIcon>
            <FontAwesomeIcon
              name="music"
              style={styles.icon10}
            ></FontAwesomeIcon>
          </View>
          <MaterialIconsIcon
            name="bookmark"
            style={styles.bookmark}
          ></MaterialIconsIcon>
          <IoniconsIcon name="md-person" style={styles.profile}></IoniconsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  tab: {
    width: 360,
    height: 65,
    backgroundColor: "rgba(27,6,94,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row"
  },
  notification: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 12
  },
  chat: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    height: 44,
    width: 32,
    marginLeft: 32,
    marginTop: 10
  },
  earth: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,134,0,1)",
    fontSize: 58,
    height: 63,
    width: 47
  },
  icon8: {
    top: 33,
    left: 14,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 19,
    height: 21,
    width: 19
  },
  icon7: {
    top: 5,
    left: 15,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 18,
    height: 19,
    width: 18
  },
  icon9: {
    top: 17,
    left: 2,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 18,
    height: 19,
    width: 18
  },
  icon10: {
    top: 20,
    left: 30,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 16,
    height: 16,
    width: 13
  },
  earthStack: {
    width: 47,
    height: 63,
    marginLeft: 39
  },
  bookmark: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 29,
    marginTop: 10
  },
  profile: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    height: 44,
    width: 30,
    marginLeft: 33,
    marginTop: 10
  },
  notificationRow: {
    height: 63,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 14,
    marginTop: 2
  }
});

export default Homebar;
