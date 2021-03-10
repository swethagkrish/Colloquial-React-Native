import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
//import Homebar from "../components/Homebar";
//import BookmarkComponent from "../components/BookmarkComponent";

function Bookmarks(props) {
  return (
    <View style={styles.container}>
      {/*<Homebar style={styles.homebar}></Homebar>*/}
      <View style={styles.bookmarkTitleStack}>
        <Text style={styles.bookmarkTitle}>Bookmarks</Text>
        <View style={styles.bookmarkBody}>
          <View style={styles.body}>
            <Text style={styles.sortBy}>Sort By</Text>
            <View style={styles.gERRow}>
              <View style={styles.gER}></View>
              <View style={styles.fRA}></View>
              <View style={styles.eSP}></View>
            </View>
            <View style={styles.pORRow}>
              <View style={styles.pOR}></View>
              <View style={styles.dUT}></View>
              <View style={styles.iTL}></View>
            </View>
            <Text style={styles.ger}>GER</Text>
            {/*<BookmarkComponent
              style={styles.bookmarkComponent}
            ></BookmarkComponent>*/}
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
    width: 333,
    height: 54,
    marginTop: 675
  },
  bookmarkTitle: {
    top: 0,
    position: "absolute",
    fontFamily: "open-sans-800",
    color: "rgba(27,6,94,1)",
    height: 90,
    width: 300,
    fontSize: 48,
    left: 12
  },
  bookmarkBody: {
    top: 75,
    left: 0,
    width: 315,
    height: 550,
    position: "absolute"
  },
  body: {
    width: 315,
    height: 550,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 70
  },
  sortBy: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 40,
    width: 97,
    fontSize: 24,
    marginTop: 14,
    marginLeft: 113
  },
  gER: {
    width: 81,
    height: 65,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  fRA: {
    width: 81,
    height: 65,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 22
  },
  eSP: {
    width: 81,
    height: 65,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 22
  },
  gERRow: {
    height: 65,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 14
  },
  pOR: {
    width: 81,
    height: 65,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  dUT: {
    width: 81,
    height: 65,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 22
  },
  iTL: {
    width: 81,
    height: 65,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 22
  },
  pORRow: {
    height: 65,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 14,
    marginRight: 14
  },
  ger: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 48,
    marginTop: 33,
    marginLeft: 137
  },
  bookmarkComponent: {
    height: 210,
    width: 277
  },
  bookmarkTitleStack: {
    width: 315,
    height: 625,
    marginTop: -705,
    marginLeft: 18
  }
});

export default Bookmarks;
