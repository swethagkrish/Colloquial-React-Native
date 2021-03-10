import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function ProfilePic(props) {
  return (
    <View style={[styles.container, props.style]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    width: 75,
    height: 75
  }
});

export default ProfilePic;
