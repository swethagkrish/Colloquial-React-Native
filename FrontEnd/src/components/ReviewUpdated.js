import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ReviewUpdated(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.review}>Review</Text>
        <Text style={styles.rating}>Rating: #</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 230,
    height: 116,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 38,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  review: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 34,
    width: 195,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 17
  },
  rating: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    height: 26,
    width: 92,
    fontSize: 16,
    marginLeft: 17
  }
});

export default ReviewUpdated;
