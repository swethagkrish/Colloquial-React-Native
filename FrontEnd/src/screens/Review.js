import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ProfilePic from "../components/ProfilePic";
import ReviewUpdated from "../components/ReviewUpdated";
import ReviewComponent from "../components/ReviewComponent";
import Homebar from "../components/Homebar";
import BackArrow from "../components/BackArrow";

function Review(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileReview}>
        <View style={styles.profilePicRow}>
          <ProfilePic style={styles.profilePic}></ProfilePic>
          <ReviewUpdated style={styles.reviewUpdated}></ReviewUpdated>
        </View>
      </View>
      <View style={styles.profileReview2}>
        <View style={styles.profilePic2Row}>
          <ProfilePic style={styles.profilePic2}></ProfilePic>
          <ReviewUpdated style={styles.reviewUpdated2}></ReviewUpdated>
        </View>
      </View>
      <ReviewComponent style={styles.reviewComponent}></ReviewComponent>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.backArrowRow}>
        <BackArrow style={styles.backArrow}></BackArrow>
        <Text style={styles.userReviews}>User Reviews</Text>
      </View>
      <Text style={styles.mediaName}>Media Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileReview: {
    width: 317,
    height: 116,
    flexDirection: "row",
    marginTop: 237,
    marginLeft: 23
  },
  profilePic: {
    height: 75,
    width: 75,
    marginTop: 21
  },
  reviewUpdated: {
    width: 230,
    height: 116,
    marginLeft: 12
  },
  profilePicRow: {
    height: 116,
    flexDirection: "row",
    flex: 1
  },
  profileReview2: {
    width: 319,
    height: 116,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 21
  },
  profilePic2: {
    width: 75,
    height: 75,
    marginTop: 24
  },
  reviewUpdated2: {
    height: 116,
    width: 230,
    marginLeft: 14
  },
  profilePic2Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  },
  reviewComponent: {
    height: 116,
    width: 319,
    marginTop: 37,
    marginLeft: 21
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 22,
    alignSelf: "center"
  },
  backArrow: {
    width: 48,
    height: 76
  },
  userReviews: {
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 133,
    width: 230,
    fontSize: 48,
    textAlign: "center",
    marginLeft: 21
  },
  backArrowRow: {
    height: 133,
    flexDirection: "row",
    marginTop: -717,
    marginLeft: 10,
    marginRight: 51
  },
  mediaName: {
    fontFamily: "open-sans-600",
    color: "rgba(255,134,0,1)",
    height: 41,
    width: 169,
    fontSize: 24,
    marginTop: 13,
    marginLeft: 109
  }
});

export default Review;
