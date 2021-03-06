import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function SelectedMedia(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.nameYearStack}>
        <Text style={styles.nameYear}>Name (Year)</Text>
        <View style={styles.rect}></View>
      </View>
      <Text style={styles.summary}>Summary</Text>
      <Text style={styles.rating}>Rating</Text>
      <View style={styles.iconRow}>
        <FontAwesomeIcon name="star" style={styles.icon}></FontAwesomeIcon>
        <FontAwesomeIcon name="pencil" style={styles.icon2}></FontAwesomeIcon>
        <MaterialCommunityIconsIcon
          name="bookmark"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.viewRatingRow}>
        <Text style={styles.viewRating}>View {"\n"}Rating</Text>
        <Text style={styles.writeReview}>Write {"\n"}Review</Text>
        <Text style={styles.bookmark}>Bookmark</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 675
  },
  nameYear: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 66,
    width: 291,
    fontSize: 36,
    textAlign: "center"
  },
  rect: {
    top: 53,
    left: 0,
    width: 291,
    height: 192,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  nameYearStack: {
    width: 291,
    height: 245,
    marginTop: -714,
    marginLeft: 34
  },
  summary: {
    fontFamily: "open-sans-600",
    color: "#121212",
    height: 45,
    width: 163,
    fontSize: 24,
    marginTop: 17,
    marginLeft: 17
  },
  rating: {
    fontFamily: "open-sans-600",
    color: "#121212",
    height: 39,
    width: 120,
    fontSize: 24,
    marginTop: 83,
    marginLeft: 17
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 92
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 98
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 70,
    marginLeft: 34,
    marginRight: 25
  },
  viewRating: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 60,
    width: 71,
    fontSize: 18,
    textAlign: "center"
  },
  writeReview: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 60,
    width: 77,
    fontSize: 18,
    textAlign: "center",
    marginLeft: 53
  },
  bookmark: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 30,
    width: 95,
    fontSize: 18,
    textAlign: "center",
    marginLeft: 47
  },
  viewRatingRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 17
  }
});

export default SelectedMedia;
