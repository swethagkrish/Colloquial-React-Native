import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Bookmark from "./Bookmark";

function BookmarkComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.deleteIconRow}>
        <Icon name="cancel" style={styles.deleteIcon}></Icon>
        <Bookmark style={styles.bookmark}></Bookmark>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  deleteIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    marginTop: 65
  },
  bookmark: {
    width: 231,
    height: 210,
    marginLeft: 6
  },
  deleteIconRow: {
    height: 210,
    flexDirection: "row",
    flex: 1
  }
});

export default BookmarkComponent;
