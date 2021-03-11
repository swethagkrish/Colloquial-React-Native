import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Messages(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <View style={styles.name1Stack}>
          <Text style={styles.name1}>Name</Text>
          <Text style={styles.message1}>Message</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect1: {
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
  name1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    height: 38,
    width: 123,
    fontSize: 20
  },
  message1: {
    top: 37,
    left: 0,
    position: "absolute",
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 58,
    width: 167,
    fontSize: 18
  },
  name1Stack: {
    width: 167,
    height: 95,
    marginTop: 21,
    marginLeft: 15
  }
});

export default Messages;
