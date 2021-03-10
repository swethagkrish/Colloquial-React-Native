import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BackArrow from "../components/stuff/BackArrow";
import Homebar from "../components/stuff/Homebar";

function SelectedMedia(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewRatingButtonRow}>
        <View style={styles.viewRatingButton}>
          <View style={styles.viewRatingBody}>
            <FontAwesomeIcon name="star" style={styles.star}></FontAwesomeIcon>
            <Text style={styles.viewRating}>View {"\n"}Rating</Text>
          </View>
        </View>
        <View style={styles.writeReviewButton}>
          <View style={styles.writeReviewBody}>
            <FontAwesomeIcon
              name="pencil"
              style={styles.write}
            ></FontAwesomeIcon>
            <Text style={styles.writeReview}>Write {"\n"}Review</Text>
          </View>
        </View>
        <View style={styles.saveButton}>
          <View style={styles.saveBody}>
            <MaterialCommunityIconsIcon
              name="bookmark"
              style={styles.bookmark}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.save}>Save</Text>
          </View>
        </View>
      </View>
      <View style={styles.mediaBodyStackStack}>
        <View style={styles.mediaBodyStack}>
          <View style={styles.mediaBody}>
            <View style={styles.body}>
              <View style={styles.photo}></View>
              <Text style={styles.summary}>Summary</Text>
              <Text style={styles.rating}>Rating</Text>
            </View>
          </View>
          <BackArrow style={styles.backArrow}></BackArrow>
        </View>
        <Text style={styles.title}>Name (Year)</Text>
      </View>
      <Homebar style={styles.homebar}></Homebar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewRatingButton: {
    width: 94,
    height: 142
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
    fontFamily: "open-sans-700",
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
  writeReviewBody: {
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
  write: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 40,
    width: 35,
    marginTop: 10,
    marginLeft: 30
  },
  writeReview: {
    fontFamily: "open-sans-700",
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
    fontFamily: "open-sans-700",
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
  body: {
    width: 321,
    height: 409,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 62
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
  summary: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 45,
    width: 129,
    fontSize: 24,
    marginTop: 15,
    marginLeft: 104
  },
  rating: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 39,
    width: 82,
    fontSize: 24,
    marginTop: 91,
    marginLeft: 120
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
    top: 15,
    left: 43,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 46,
    width: 291,
    fontSize: 36,
    textAlign: "center"
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
