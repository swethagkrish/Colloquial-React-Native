import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Logo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.backgroundStack}>
        <Svg viewBox="0 0 57 61.5" style={styles.background}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(27,6,94,1)"
            cx={29}
            cy={31}
            rx={29}
            ry={31}
          ></Ellipse>
        </Svg>
        <IoniconsIcon name="md-globe" style={styles.earth}></IoniconsIcon>
        <MaterialCommunityIconsIcon
          name="television-classic"
          style={styles.tV}
        ></MaterialCommunityIconsIcon>
        <EntypoIcon name="book" style={styles.book}></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="video-vintage"
          style={styles.movie}
        ></MaterialCommunityIconsIcon>
        <FontAwesomeIcon name="music" style={styles.music}></FontAwesomeIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  background: {
    top: 10,
    left: 2,
    width: 55,
    height: 56,
    position: "absolute"
  },
  earth: {
    position: "absolute",
    color: "rgba(255,134,0,1)",
    fontSize: 70,
    left: 0,
    top: 0
  },
  tV: {
    top: 23,
    left: 38,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 19
  },
  book: {
    top: 7,
    left: 20,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 18
  },
  movie: {
    top: 25,
    left: 2,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 18
  },
  music: {
    top: 43,
    left: 22,
    position: "absolute",
    color: "rgba(217,240,255,1)",
    fontSize: 16
  },
  backgroundStack: {
    width: 57,
    height: 76
  }
});

export default Logo;
