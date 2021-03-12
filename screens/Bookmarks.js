import React, { Component } from "react";
import { StyleSheet, View, Text ,Image, TouchableOpacity, FlatList } from "react-native";
//import Homebar from "../components/Homebar";
//import BookmarkComponent from "../components/BookmarkComponent";

function Bookmarks({ navigation }) {
  const bookmarks = () => {
    navigation.navigate('SelectedMedia');
  }
  const data = [
    {
      name: "Germany",
      img: require("../assets/flags/germany.png")
    },
    {
      name: "Portugal",
      img: require("../assets/flags/portugal.png")
    }, 
    {
      name: "France",
      img: require("../assets/flags/france.png")
    }, 
    {
      name: "Spain",
      img: require("../assets/flags/spain.png")
    }, 
    {
      name: "Italy",
      img: require('../assets/flags/italy.png')
    }, 
    {
      name: "Netherlands",
      img: require("../assets/flags/Netherlands.png")
    }
  ]

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.languageButton} onPress={selectLanguage}>
        <Image
          style={{ width: 50, height: 40}}
          source={item.img}
        />
      </TouchableOpacity>
    );
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
              <Text style={styles.bookmarkTitle}>Bookmarks</Text>
          </View> 
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            numColumns={3}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 5 }}
          />
        </View>
      );
    }
  
  /*return (
    <View style={styles.container}>
      {<Homebar style={styles.homebar}></Homebar>}
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
            {<BookmarkComponent
              style={styles.bookmarkComponent}
            ></BookmarkComponent>}
          </View>
        </View>
      </View>
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center"
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 675
  },
  buttonContainter: {
    width: 327, 
    height: 700,
    alignItems: "center"
  },
  languageButton: {
    flex: 1, 
    marginHorizontal: 5, 
    marginBottom: 5,
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
    width: 81,
    height: 65, 
    alignItems: "center",
    justifyContent: "center"
  },
  bookmarkTitle: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    fontSize: 48,
    alignItems: "center",
    justifyContent: "center"
  },
  languageLabel: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
  }
});

export default Bookmarks;
