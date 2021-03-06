import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Homebar from "../components/Homebar";

function SelectLanguage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 147.49 140.32" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(0,107,166,1)"
            strokeWidth={0}
            fill="rgba(0,107,166,1)"
            cx={74}
            cy={70}
            rx={74}
            ry={70}
          ></Ellipse>
        </Svg>
        <EntypoIcon name="book" style={styles.icon}></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="video-vintage"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <FontAwesomeIcon name="music" style={styles.icon3}></FontAwesomeIcon>
        <MaterialCommunityIconsIcon
          name="television-classic"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <Text style={styles.selectALanguage}>Select a Language</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  icon: {
    top: 0,
    left: 32,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 32
  },
  icon2: {
    top: 32,
    left: 0,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 32
  },
  icon3: {
    top: 32,
    left: 64,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 32
  },
  icon4: {
    top: 64,
    left: 35,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 32
  },
  ellipseStack: {
    width: 100,
    height: 100,
    marginTop: 550,
    marginLeft: 126
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 25,
    alignSelf: "center"
  },
  selectALanguage: {
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 131,
    width: 360,
    fontSize: 48,
    textAlign: "center",
    marginTop: -718
  }
});

export default SelectLanguage;
