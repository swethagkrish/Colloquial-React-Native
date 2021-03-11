import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


function BackArrow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="md-arrow-round-back" style={styles.leftArrow}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  leftArrow: {
    color: "rgba(0,107,166,1)",
    fontSize: 70
  }
});

export default BackArrow;
