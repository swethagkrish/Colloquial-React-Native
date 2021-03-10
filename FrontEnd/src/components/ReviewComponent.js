import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ProfilePic from "./ProfilePic";
import ReviewUpdated from "./ReviewUpdated";

function ReviewComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.profilePic3Row}>
        <ProfilePic style={styles.profilePic3}></ProfilePic>
        <ReviewUpdated style={styles.reviewUpdated3}></ReviewUpdated>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  profilePic3: {
    width: 75,
    height: 75,
    marginTop: 22
  },
  reviewUpdated3: {
    width: 230,
    height: 116,
    marginLeft: 14
  },
  profilePic3Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  }
});

export default ReviewComponent;
