import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Logo from "./Logo";

function Homebar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <View style={styles.tab}>
            <View style={styles.notificationRow}>
              <MaterialIconsIcon
                name="notifications"
                style={styles.notification}
              ></MaterialIconsIcon>
              <IoniconsIcon
                name="md-chatboxes"
                style={styles.chat}
              ></IoniconsIcon>
              <MaterialIconsIcon
                name="bookmark"
                style={styles.bookmark}
              ></MaterialIconsIcon>
              <IoniconsIcon
                name="md-person"
                style={styles.profile}
              ></IoniconsIcon>
            </View>
          </View>
        </View>
        <Logo style={styles.logo}></Logo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group: {
    top: 6,
    left: 0,
    width: 360,
    height: 66,
    position: "absolute"
  },
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
    width: 40,
    height: 40,
    marginTop: 2
  },
  chat: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    width: 33,
    height: 44,
    marginLeft: 26,
    marginTop: 3
  },
  bookmark: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 116,
    marginTop: 2
  },
  profile: {
    color: "rgba(255,134,0,1)",
    fontSize: 40,
    height: 44,
    width: 30,
    marginLeft: 37
  },
  notificationRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 21,
    marginTop: 11
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 152,
    height: 76,
    width: 57
  },
  groupStack: {
    width: 360,
    height: 76,
    marginTop: -6
  }
});

export default Homebar;
