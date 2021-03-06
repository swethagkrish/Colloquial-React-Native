import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.bookmarksStack}>
        <Text style={styles.bookmarks}>Bookmarks</Text>
        <Text style={styles.sortBy}>Sort By</Text>
      </View>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          GER FRA {"\n"}ESP DUT{"\n"}POR ITL
        </Text>
        <Text style={styles.ger}>GER</Text>
      </View>
      <Text style={styles.loremIpsum2}>
        Media Name (Year){"\n"}Description {"\n"}View More...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homebar: {
    width: 333,
    height: 54,
    marginTop: 675
  },
  bookmarks: {
    top: 0,
    left: 33,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 90,
    width: 300,
    fontSize: 48
  },
  sortBy: {
    top: 89,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 40,
    width: 127,
    fontSize: 24
  },
  bookmarksStack: {
    width: 333,
    height: 129,
    marginTop: -705
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 95,
    width: 227
  },
  ger: {
    top: 94,
    left: 40,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 133
  },
  loremIpsumStack: {
    width: 227,
    height: 129,
    marginLeft: 53
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 53
  }
});

export default Untitled2;
