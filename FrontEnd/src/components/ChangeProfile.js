import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function ChangeProfile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.arrowStack}>
        <SimpleLineIconsIcon
          name="reload"
          style={styles.arrow}
        ></SimpleLineIconsIcon>
        <IoniconsIcon name="md-person" style={styles.profile}></IoniconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  arrow: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 52
  },
  profile: {
    top: 6,
    left: 13,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 35
  },
  arrowStack: {
    width: 52,
    height: 58
  }
});

export default ChangeProfile;
