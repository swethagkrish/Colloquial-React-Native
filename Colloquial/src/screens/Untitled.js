import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";
import BackArrow from "../components/BackArrow";
import Svg, { Ellipse } from "react-native-svg";
import Reviews from "../components/Reviews";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.mediaNameReviewsStack}>
        <Text style={styles.mediaNameReviews}>Media Name Reviews</Text>
        <BackArrow style={styles.backArrow}></BackArrow>
      </View>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 74.62 74.62" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(0,0,0,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={37}
            cy={37}
            rx={37}
            ry={37}
          ></Ellipse>
        </Svg>
        <Reviews style={styles.reviews}></Reviews>
      </View>
      <View style={styles.ellipse1Row}>
        <Svg viewBox="0 0 74.62 74.62" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(0,0,0,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={37}
            cy={37}
            rx={37}
            ry={37}
          ></Ellipse>
        </Svg>
        <View style={styles.rect1}>
          <Text style={styles.reviewsRatings2}>Reviews {"\n"}Ratings</Text>
        </View>
      </View>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 74.62 74.62" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(0,0,0,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={37}
            cy={37}
            rx={37}
            ry={37}
          ></Ellipse>
        </Svg>
        <View style={styles.rect2}>
          <Text style={styles.reviewsRatings3}>Reviews {"\n"}Ratings</Text>
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
  mediaNameReviews: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 149,
    width: 360,
    fontSize: 48,
    textAlign: "center"
  },
  backArrow: {
    position: "absolute",
    left: 10,
    top: 61,
    width: 48,
    height: 76
  },
  mediaNameReviewsStack: {
    width: 360,
    height: 149,
    marginTop: -722
  },
  ellipse: {
    width: 75,
    height: 75
  },
  reviews: {
    height: 99,
    width: 216,
    marginLeft: 19
  },
  ellipseRow: {
    height: 99,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 24,
    marginRight: 26
  },
  ellipse1: {
    width: 75,
    height: 75
  },
  rect1: {
    width: 216,
    height: 99,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 19,
    marginTop: 8
  },
  reviewsRatings2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 57,
    width: 154,
    marginTop: 9,
    marginLeft: 9
  },
  ellipse1Row: {
    height: 107,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 24,
    marginRight: 26
  },
  ellipse2: {
    width: 75,
    height: 75,
    marginTop: 13
  },
  rect2: {
    width: 216,
    height: 99,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 22
  },
  reviewsRatings3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 99,
    marginTop: 13,
    marginLeft: 9
  },
  ellipse2Row: {
    height: 99,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 21,
    marginRight: 26
  }
});

export default Untitled;
