import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";
import Svg, { Ellipse } from "react-native-svg";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <Svg viewBox="0 0 100 100" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(230, 230, 230,1)"
          cx={50}
          cy={50}
          rx={50}
          ry={50}
        ></Ellipse>
      </Svg>
      <Text style={styles.contact}>Contact</Text>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 100 100" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg>
        <View style={styles.rect}>
          <Text style={styles.nameReview}>Name {"\n"}Review</Text>
        </View>
      </View>
      <View style={styles.ellipse3Row}>
        <Svg viewBox="0 0 100 100" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg>
        <View style={styles.nameReview1Stack}>
          <Text style={styles.nameReview1}>Name {"\n"}Review</Text>
          <View style={styles.rect1}>
            <Text style={styles.nameReview3}>Name {"\n"}Review</Text>
          </View>
        </View>
      </View>
      <View style={styles.ellipse4Row}>
        <Svg viewBox="0 0 100 100" style={styles.ellipse4}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg>
        <View style={styles.nameReview2Stack}>
          <Text style={styles.nameReview2}>Name {"\n"}Review</Text>
          <View style={styles.rect2}>
            <Text style={styles.nameReview4}>Name {"\n"}Review</Text>
          </View>
        </View>
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
  ellipse: {
    width: 100,
    height: 100,
    marginTop: -705,
    marginLeft: 130
  },
  contact: {
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 39,
    width: 163,
    fontSize: 36,
    textAlign: "left"
  },
  ellipse2: {
    width: 75,
    height: 75,
    marginTop: 11
  },
  rect: {
    width: 200,
    height: 100,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 36
  },
  nameReview: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 75,
    width: 144
  },
  ellipse2Row: {
    height: 100,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 19,
    marginRight: 30
  },
  ellipse3: {
    width: 75,
    height: 75
  },
  nameReview1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 75,
    width: 144
  },
  rect1: {
    top: 0,
    left: 0,
    width: 200,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  nameReview3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 67,
    width: 165,
    marginTop: 4
  },
  nameReview1Stack: {
    width: 200,
    height: 100,
    marginLeft: 36
  },
  ellipse3Row: {
    height: 100,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 19,
    marginRight: 30
  },
  ellipse4: {
    width: 75,
    height: 75,
    marginTop: 12
  },
  nameReview2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 75,
    width: 144
  },
  rect2: {
    top: 0,
    left: 0,
    width: 200,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  nameReview4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 122
  },
  nameReview2Stack: {
    width: 200,
    height: 100,
    marginLeft: 36
  },
  ellipse4Row: {
    height: 100,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 19,
    marginRight: 30
  }
});

export default Untitled1;
