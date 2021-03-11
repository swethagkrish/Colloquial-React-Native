import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Bookmark(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bookmarkBody}>
        <View style={styles.nameYearStack}>
          <Text style={styles.nameYear}>Name (Year)</Text>
          <View style={styles.image}></View>
        </View>
        <Text style={styles.summary}>Summary.....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bookmarkBody: {
    width: 231,
    height: 210,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 43,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  nameYear: {
    top: 0,
    left: 8,
    position: "absolute",
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(255,255,255,1)",
    height: 32,
    width: 184,
    fontSize: 18,
    textAlign: "center"
  },
  image: {
    top: 26,
    left: 0,
    width: 200,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15
  },
  nameYearStack: {
    width: 200,
    height: 126,
    marginTop: 6,
    marginLeft: 15
  },
  summary: {
    fontFamily: "OpenSans_400Regular",
    color: "rgba(255,255,255,1)",
    height: 78,
    width: 200,
    fontSize: 18,
    marginLeft: 15
  }
});

export default Bookmark;
