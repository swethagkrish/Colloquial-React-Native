import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Homebar from "../components/Homebar";
import BackArrow from "../components/BackArrow";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Filter(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.titleStack}>
        <Text style={styles.title}>Media Recommendations</Text>
        <BackArrow style={styles.backArrow}></BackArrow>
        <Text style={styles.filters}>Filters</Text>
        <Text style={styles.category}>Category</Text>
      </View>
      <View style={styles.iconRow}>
        <EntypoIcon name="book" style={styles.icon}></EntypoIcon>
        <FontAwesomeIcon name="music" style={styles.icon2}></FontAwesomeIcon>
      </View>
      <View style={styles.icon3Row}>
        <MaterialCommunityIconsIcon
          name="television-classic"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="video-vintage"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.genreStack}>
        <Text style={styles.genre}>Genre</Text>
        <SimpleLineIconsIcon
          name="target"
          style={styles.icon5}
        ></SimpleLineIconsIcon>
        <IoniconsIcon name="ios-happy" style={styles.icon10}></IoniconsIcon>
      </View>
      <View style={styles.icon9Row}>
        <EntypoIcon name="mask" style={styles.icon9}></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="heart"
          style={styles.icon6}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.icon7Row}>
        <MaterialCommunityIconsIcon
          name="ghost"
          style={styles.icon7}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="knife"
          style={styles.icon8}
        ></MaterialCommunityIconsIcon>
      </View>
      <Text style={styles.sortBy}>Sort By</Text>
      <View style={styles.icon11Row}>
        <FontAwesomeIcon
          name="calendar"
          style={styles.icon11}
        ></FontAwesomeIcon>
        <View style={styles.dateStack}>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.newest}>Newest</Text>
          <Text style={styles.oldest}>Oldest</Text>
        </View>
        <MaterialCommunityIconsIcon
          name="sort-alphabetical"
          style={styles.icon12}
        ></MaterialCommunityIconsIcon>
        <View style={styles.nameColumn}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.aZ}>A-Z</Text>
          <Text style={styles.zA}>Z-A</Text>
        </View>
      </View>
      <MaterialCommunityIconsIcon
        name="filter-variant"
        style={styles.icon13}
      ></MaterialCommunityIconsIcon>
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
  title: {
    top: 10,
    left: 10,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 111,
    width: 352,
    fontSize: 36,
    textAlign: "center"
  },
  backArrow: {
    position: "absolute",
    top: 0,
    left: 20,
    height: 76,
    width: 48
  },
  filters: {
    top: 108,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "#121212",
    height: 40,
    width: 352,
    textAlign: "center",
    fontSize: 24
  },
  category: {
    top: 131,
    left: 17,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 33,
    width: 99,
    fontSize: 18
  },
  titleStack: {
    width: 362,
    height: 164,
    marginTop: -725,
    marginLeft: -10
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 2
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 156
  },
  iconRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 50,
    marginRight: 79
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 156
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginLeft: 50,
    marginRight: 74
  },
  genre: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 33,
    width: 284,
    fontSize: 18
  },
  icon5: {
    left: 43,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    top: 24
  },
  icon10: {
    top: 24,
    left: 243,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  genreStack: {
    width: 284,
    height: 68,
    marginLeft: 7
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 158
  },
  icon9Row: {
    height: 44,
    flexDirection: "row",
    marginLeft: 50,
    marginRight: 72
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 156
  },
  icon7Row: {
    height: 44,
    flexDirection: "row",
    marginLeft: 50,
    marginRight: 74
  },
  sortBy: {
    fontFamily: "open-sans-600",
    color: "#121212",
    height: 33,
    width: 103,
    fontSize: 24,
    marginLeft: 135
  },
  icon11: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 2
  },
  date: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 36,
    width: 46,
    fontSize: 18
  },
  newest: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 26,
    width: 76,
    fontSize: 16
  },
  oldest: {
    top: 56,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 26,
    width: 76,
    fontSize: 16
  },
  dateStack: {
    width: 76,
    height: 82,
    marginLeft: 17,
    marginTop: 10
  },
  icon12: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 66
  },
  name: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 25,
    width: 81,
    fontSize: 18,
    marginLeft: 4
  },
  aZ: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 26,
    width: 76,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 4
  },
  zA: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    height: 26,
    width: 42,
    fontSize: 16
  },
  nameColumn: {
    width: 85,
    marginLeft: 9,
    marginTop: 9
  },
  icon11Row: {
    height: 96,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 50,
    marginRight: -20
  },
  icon13: {
    color: "rgba(0,107,166,1)",
    fontSize: 100,
    marginTop: 7,
    marginLeft: 130
  }
});

export default Filter;
