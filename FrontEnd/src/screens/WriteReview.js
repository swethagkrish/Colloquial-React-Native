import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import BackArrow from "../components/BackArrow";
import Homebar from "../components/Homebar";
import Icon from "react-native-vector-icons/Entypo";

function WriteReview(props) {
  return (
    <View style={styles.container}>
      <View style={styles.reviewBodyStack}>
        <View style={styles.reviewBody}>
          <View style={styles.body}>
            <View style={styles.mediaName}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.nameOfMedia}>Name of Media</Text>
            </View>
            <View style={styles.enterRating}>
              <Text style={styles.rating}>Rating</Text>
              <View style={styles.ratingBoxStack}>
                <View style={styles.ratingBox}></View>
                <TextInput
                  placeholder="Rating"
                  keyboardAppearance="default"
                  maxLength={5}
                  numberOfLines={1}
                  multiline={true}
                  spellCheck={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  placeholderTextColor="rgba(0,0,0,1)"
                  style={styles.ratingInput}
                ></TextInput>
              </View>
            </View>
            <View style={styles.enterReview}>
              <View style={styles.reviewInstructionStack}>
                <Text style={styles.reviewInstruction}>
                  We recommend you write the review in your selected language.
                  Include what you liked/disliked and whether you would
                  recommend the movie
                </Text>
                <Text style={styles.yourReview}>Your Review</Text>
              </View>
              <View style={styles.reviewBox}>
                <TextInput
                  placeholder="Review Here"
                  keyboardAppearance="default"
                  maxLength={200}
                  numberOfLines={5}
                  multiline={true}
                  spellCheck={true}
                  placeholderTextColor="rgba(0,0,0,1)"
                  selectionColor="rgba(255,255,255,1)"
                  style={styles.reviewInput}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.review}>Review</Text>
        <BackArrow style={styles.backArrow}></BackArrow>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.saveReviewButton}>
        <View style={styles.saveBody}>
          <View style={styles.saveIconRow}>
            <Icon name="save" style={styles.saveIcon}></Icon>
            <Text style={styles.saveReview}>Save Review</Text>
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
  reviewBody: {
    top: 60,
    left: 0,
    width: 319,
    height: 492,
    position: "absolute"
  },
  body: {
    width: 319,
    height: 492,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 70
  },
  mediaName: {
    width: 149,
    height: 66,
    marginTop: 2,
    marginLeft: 87
  },
  name: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 39
  },
  nameOfMedia: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 33,
    width: 149,
    fontSize: 20,
    textAlign: "center"
  },
  enterRating: {
    width: 295,
    height: 85,
    marginLeft: 14
  },
  rating: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 110
  },
  ratingBox: {
    top: 0,
    left: 0,
    width: 295,
    height: 40,
    position: "absolute",
    borderWidth: 6,
    borderColor: "rgba(0,107,166,1)",
    borderRadius: 74,
    borderStyle: "solid",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ratingInput: {
    top: 7,
    left: 26,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    fontSize: 20,
    width: 242,
    height: 45
  },
  ratingBoxStack: {
    width: 295,
    height: 52
  },
  enterReview: {
    width: 295,
    height: 188,
    marginTop: 132,
    marginLeft: 12
  },
  reviewInstruction: {
    top: 34,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 109,
    width: 326,
    fontSize: 18,
    textAlign: "center"
  },
  yourReview: {
    top: 0,
    left: 105,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 36,
    width: 189,
    fontSize: 24,
    textAlign: "left"
  },
  reviewInstructionStack: {
    width: 326,
    height: 0,
    marginTop: -143,
    marginLeft: -15
  },
  reviewBox: {
    width: 295,
    height: 188,
    borderWidth: 6,
    borderColor: "rgba(0,107,166,1)",
    borderRadius: 74,
    borderStyle: "solid",
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 143
  },
  reviewInput: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    fontSize: 20,
    width: 250,
    height: 137,
    marginTop: 30,
    marginLeft: 28
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
    top: 1,
    width: 48,
    height: 76
  },
  reviewBodyStack: {
    width: 319,
    height: 552,
    marginTop: 25,
    marginLeft: 19
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 98
  },
  saveReviewButton: {
    width: 325,
    height: 68,
    marginTop: -151,
    marginLeft: 18
  },
  saveBody: {
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
  saveIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  saveReview: {
    fontFamily: "open-sans-700",
    color: "#121212",
    height: 24,
    width: 138,
    fontSize: 20,
    marginLeft: 26,
    marginTop: 10
  },
  saveIconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 58,
    marginLeft: 63,
    marginTop: 12
  }
});

export default WriteReview;
