import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>{props.label || "Label"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  checkIcon: {
    color: "rgba(255,134,0,1)",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    marginLeft: 2,
    fontSize: 16,
    color: "rgba(0,0,0,0.87)",
    left: 45,
    width: 51,
    top: 10,
    height: 25
  }
});

export default MaterialCheckboxWithLabel;
