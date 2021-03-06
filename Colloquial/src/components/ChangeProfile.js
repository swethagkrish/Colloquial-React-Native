import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function ChangeProfile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon2Stack}>
        <SimpleLineIconsIcon
          name="reload"
          style={styles.icon2}
        ></SimpleLineIconsIcon>
        <IoniconsIcon name="md-person" style={styles.icon4}></IoniconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 52
  },
  icon4: {
    top: 0,
    left: 11,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2Stack: {
    width: 52,
    height: 58
  }
});

export default ChangeProfile;
