import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
//import MediaTitles from "../components/MediaTitles";
import Homebar from "../components/stuff/Homebar";
import BackArrow from "../components/stuff/BackArrow";
import { database } from '../components/Firebase/method'

function FilteredMedia({ route, navigation}) {
  const selectedGenre = route.params.gen;
  const selectedMedia = route.params.mediaSelected;
  const selectLanguage = route.params.lang;
  //const sortMethod = route.params.sorting;

  var rootRef = database.ref(selectLanguage);
  rootRef.child(selectedMedia).get().then(function(snapshot) {

  })

  return (
    <View>

    </View>
    /*<View style={styles.container}>
      <View style={styles.mediaTitlesRow}>
        <MediaTitles style={styles.mediaTitles}></MediaTitles>
        <MediaTitles style={styles.mediaTitles2}></MediaTitles>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.backArrowRow}>
        <BackArrow style={styles.backArrow}></BackArrow>
        <Text style={styles.text}>Filtered Media</Text>
      </View>
      <View style={styles.mediaTitles3Row}>
        <MediaTitles style={styles.mediaTitles3}></MediaTitles>
        <MediaTitles style={styles.mediaTitles4}></MediaTitles>
      </View>
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mediaTitles: {
    height: 221,
    width: 154
  },
  mediaTitles2: {
    width: 154,
    height: 221,
    marginLeft: 30
  },
  mediaTitlesRow: {
    height: 221,
    flexDirection: "row",
    marginTop: 167,
    marginLeft: 10,
    marginRight: 12
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 287,
    alignSelf: "center"
  },
  backArrow: {
    width: 48,
    height: 76
  },
  text: {
    fontFamily: "OpenSans_800ExtraBold",
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
  mediaTitles3: {
    width: 154,
    height: 221
  },
  mediaTitles4: {
    width: 154,
    height: 221,
    marginLeft: 24,
    marginTop: 4
  },
  mediaTitles3Row: {
    height: 225,
    flexDirection: "row",
    marginTop: 269,
    marginLeft: 16,
    marginRight: 12
  }
});

export default FilteredMedia;
