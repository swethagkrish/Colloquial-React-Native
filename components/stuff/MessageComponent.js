import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ProfilePic from "./ProfilePic";
import Messages from "./Messages";

function MessageComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.profilePic4Row}>
        <ProfilePic style={styles.profilePic4}></ProfilePic>
        <Messages style={styles.messages3}></Messages>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  profilePic4: {
    width: 75,
    height: 75,
    marginTop: 21
  },
  messages3: {
    width: 230,
    height: 116,
    marginLeft: 21
  },
  profilePic4Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  }
});

export default MessageComponent;
