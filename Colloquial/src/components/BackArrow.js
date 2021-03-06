import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function BackArrow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(249,105,0,1)",
    fontSize: 70
  }
});

export default BackArrow;
