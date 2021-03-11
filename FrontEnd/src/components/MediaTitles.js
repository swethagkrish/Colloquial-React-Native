import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MediaTitles(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group2}>
        <View style={styles.group}>
          <View style={styles.rect8}>
            <View style={styles.rect}></View>
            <Text style={styles.nameYear}>Name (Year)</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group2: {
    width: 154,
    height: 221
  },
  group: {
    width: 154,
    height: 221
  },
  rect8: {
    width: 154,
    height: 221,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  rect: {
    width: 136,
    height: 138,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 16,
    marginLeft: 9
  },
  nameYear: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    height: 28,
    width: 136,
    fontSize: 18,
    textAlign: "center",
    marginTop: 1,
    marginLeft: 8
  }
});

export default MediaTitles;
