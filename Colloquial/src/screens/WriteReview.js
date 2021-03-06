import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import BackArrow from "../components/BackArrow";
import Homebar from "../components/Homebar";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";

function WriteReview(props) {
  return (
    <View style={styles.container}>
      <View style={styles.reviewStackStack}>
        <View style={styles.reviewStack}>
          <Text style={styles.review}>Review</Text>
          <BackArrow style={styles.backArrow}></BackArrow>
        </View>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.nameOfMedia}>Name of Media</Text>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>Rating</Text>
        <MaterialFixedLabelTextbox
          style={styles.materialFixedLabelTextbox}
        ></MaterialFixedLabelTextbox>
      </View>
      <Text style={styles.yourReview}>Your Review</Text>
      <Text style={styles.loremIpsum}>
        We recommend you write the review in your selected language. Include
        what you liked/disliked and whether you would recommend the movie
      </Text>
      <TouchableOpacity style={styles.button}>
        <TextInput
          placeholder="Review Here"
          keyboardAppearance="default"
          maxLength={200}
          numberOfLines={20}
          multiline={true}
          style={styles.textInput}
        ></TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  review: {
    top: 0,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 68,
    width: 267,
    fontSize: 48,
    textAlign: "center",
    left: 28
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: 3,
    width: 48,
    height: 76
  },
  reviewStack: {
    top: 0,
    left: 19,
    width: 295,
    height: 79,
    position: "absolute"
  },
  name: {
    top: 73,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "#121212",
    fontSize: 24,
    textAlign: "center"
  },
  nameOfMedia: {
    top: 73,
    left: 180,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 33,
    width: 149,
    fontSize: 18,
    textAlign: "center"
  },
  reviewStackStack: {
    width: 329,
    height: 106,
    marginTop: 23
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 546
  },
  rating: {
    fontFamily: "open-sans-600",
    color: "#121212",
    fontSize: 24,
    textAlign: "center"
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 136,
    marginLeft: 99
  },
  ratingRow: {
    height: 43,
    flexDirection: "row",
    marginTop: -553,
    marginRight: 51
  },
  yourReview: {
    fontFamily: "open-sans-600",
    color: "#121212",
    height: 36,
    width: 189,
    fontSize: 24,
    textAlign: "left",
    marginTop: 48
  },
  loremIpsum: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 109,
    width: 360,
    fontSize: 18,
    textAlign: "center",
    marginTop: 1
  },
  button: {
    width: 338,
    height: 229,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 10
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    width: 99,
    height: 22,
    marginTop: 33,
    marginLeft: 25
  }
});

export default WriteReview;
