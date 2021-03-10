import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Homebar from "../components/Homebar";

function ChatScreen(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
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
    marginTop: 675,
    alignSelf: "center"
  }
});

export default ChatScreen;
