import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
//import Homebar from "../components/Homebar";
import ProfilePic from "../components/stuff/ProfilePic";
/*import Messages from "../components/Messages";
import MessageComponent from "../components/MessageComponent";*/

function Contacts(props) {
  return (
    <View style={styles.container}>
      {/*<Homebar style={styles.homebar}></Homebar>*/}
      <Text style={styles.contacts}>Contacts</Text>
      <View style={styles.group}>
        <View style={styles.profilePic3Row}>
          <ProfilePic style={styles.profilePic3}></ProfilePic>
          <Messages style={styles.messages2}></Messages>
        </View>
      </View>
      {/*<MessageComponent style={styles.messageComponent}></MessageComponent>*/}
      <ProfilePic style={styles.profilePic}></ProfilePic>
      {/*<MessageComponent style={styles.messageComponent2}></MessageComponent>*/}
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
  contacts: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 60,
    width: 299,
    textAlign: "center",
    fontSize: 48,
    marginTop: -611,
    marginLeft: 31
  },
  group: {
    width: 326,
    height: 116,
    flexDirection: "row",
    marginTop: 184,
    marginLeft: 19
  },
  profilePic3: {
    width: 75,
    height: 75,
    marginTop: 21
  },
  messages2: {
    width: 230,
    height: 116,
    marginLeft: 21
  },
  profilePic3Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  },
  messageComponent: {
    height: 116,
    width: 326,
    marginTop: 34,
    marginLeft: 19
  },
  profilePic: {
    width: 75,
    height: 75,
    marginTop: -598,
    marginLeft: 133
  },
  messageComponent2: {
    width: 326,
    height: 116,
    marginTop: 106,
    marginLeft: 19
  }
});

export default Contacts;
