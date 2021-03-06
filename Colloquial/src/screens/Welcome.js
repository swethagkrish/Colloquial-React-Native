import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.notifications}>Notifications</Text>
      <IoniconsIcon name="md-chatboxes" style={styles.icon}></IoniconsIcon>
      <FontAwesomeIcon name="gear" style={styles.icon2}></FontAwesomeIcon>
      <Text style={styles.ger}>GER</Text>
      <Text style={styles.fra}>FRA</Text>
      <Text style={styles.esp}>ESP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homebar: {
    height: 65,
    width: 360,
    marginTop: 675
  },
  text: {
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 65,
    width: 332,
    textAlign: "center",
    fontSize: 48,
    marginTop: -703,
    marginLeft: 14
  },
  notifications: {
    fontFamily: "open-sans-700",
    color: "rgba(249,105,0,1)",
    height: 65,
    width: 285,
    fontSize: 36,
    textAlign: "center",
    marginLeft: 37
  },
  icon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    marginLeft: 21
  },
  icon2: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    marginTop: 386,
    marginLeft: 16
  },
  ger: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 75,
    marginTop: -388,
    marginLeft: 33
  },
  fra: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 36,
    width: 75,
    marginTop: 63,
    marginLeft: 33
  },
  esp: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 44,
    marginTop: 58,
    marginLeft: 32
  }
});

export default Welcome;
