import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Reviews(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.reviewsRatings}>Reviews {"\n"}Ratings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 216,
    height: 99,
    borderWidth: 1,
    borderColor: "#000000"
  },
  reviewsRatings: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 197,
    marginTop: 5,
    marginLeft: 9
  }
});

export default Reviews;
