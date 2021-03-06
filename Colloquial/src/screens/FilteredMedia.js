import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";
import BackArrow from "../components/BackArrow";

function FilteredMedia(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.backArrowRow}>
        <BackArrow style={styles.backArrow}></BackArrow>
        <Text style={styles.text}>Filtered Media</Text>
      </View>
      <View style={styles.rectStackRow}>
        <View style={styles.rectStack}>
          <View style={styles.rect}></View>
          <Text style={styles.nameYear}>Name (Year)</Text>
        </View>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.rect3Row}>
        <View style={styles.rect3}></View>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.rect6Row}>
        <View style={styles.rect6}></View>
        <View style={styles.rect7}></View>
      </View>
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
  },
  backArrow: {
    width: 48,
    height: 76
  },
  text: {
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 126,
    width: 239,
    fontSize: 48,
    textAlign: "center",
    marginLeft: 3
  },
  backArrowRow: {
    height: 126,
    flexDirection: "row",
    marginTop: -710,
    marginLeft: 10,
    marginRight: 60
  },
  rect: {
    top: 0,
    left: 0,
    width: 136,
    height: 138,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  nameYear: {
    top: 137,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 28,
    width: 136,
    fontSize: 18,
    textAlign: "center"
  },
  rectStack: {
    width: 136,
    height: 165
  },
  rect5: {
    width: 136,
    height: 138,
    backgroundColor: "#E6E6E6",
    marginLeft: 58
  },
  rectStackRow: {
    height: 165,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 20
  },
  rect3: {
    width: 136,
    height: 138,
    backgroundColor: "#E6E6E6"
  },
  rect4: {
    width: 136,
    height: 138,
    backgroundColor: "#E6E6E6",
    marginLeft: 58
  },
  rect3Row: {
    height: 138,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20
  },
  rect6: {
    width: 136,
    height: 138,
    backgroundColor: "#E6E6E6"
  },
  rect7: {
    width: 136,
    height: 138,
    backgroundColor: "#E6E6E6",
    marginLeft: 58
  },
  rect6Row: {
    height: 138,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 10,
    marginRight: 20
  }
});

export default FilteredMedia;
