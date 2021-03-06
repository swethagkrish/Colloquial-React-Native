import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialIcons";
import ChangeProfile from "../components/ChangeProfile";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <Svg viewBox="0 0 129.34 102.81" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(230, 230, 230,1)"
          cx={65}
          cy={51}
          rx={65}
          ry={51}
        ></Ellipse>
      </Svg>
      <Text style={styles.email}>Email</Text>
      <Text style={styles.languageLevels}>Language Levels</Text>
      <Text style={styles.birthday}>Birthday</Text>
      <Icon name="delete-forever" style={styles.icon}></Icon>
      <View style={styles.group}>
        <ChangeProfile style={styles.changeProfile}></ChangeProfile>
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
    marginTop: 675
  },
  ellipse: {
    width: 100,
    height: 100,
    marginTop: -707,
    marginLeft: 111
  },
  email: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13
  },
  languageLevels: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 132,
    marginTop: 26
  },
  birthday: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 111,
    marginTop: 49
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 52,
    marginTop: 302,
    marginLeft: 91
  },
  group: {
    width: 52,
    height: 58,
    marginTop: -123,
    marginLeft: 92
  },
  changeProfile: {
    height: 58,
    width: 52
  }
});

export default Untitled3;
