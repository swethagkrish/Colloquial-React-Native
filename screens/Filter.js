import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import BackArrow from "../components/stuff/BackArrow";
//import Homebar from "../components/Homebar";

function Filter(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.filterBodyStack}>
        <View style={styles.filterBody}>
          <View style={styles.bodyStack}>
            <View style={styles.body}>
              <Text style={styles.category}>Category</Text>
              <View style={styles.bookButtonRow}>
                <View style={styles.bookButton}>
                  <View style={styles.booButtonStack}>
                    <View style={styles.booButton}>
                      <EntypoIcon
                        name="book"
                        style={styles.bookEmoji}
                      ></EntypoIcon>
                    </View>
                    <Text style={styles.books}>Books</Text>
                  </View>
                </View>
                <View style={styles.tVShowsButton}>
                  <View style={styles.tvsButton}>
                    <View style={styles.tVEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="television-classic"
                        style={styles.tVEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.tvShows}>TV Shows</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.moviesButtonRow}>
                <View style={styles.moviesButton}>
                  <View style={styles.movButton}>
                    <View style={styles.movieEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="video-vintage"
                        style={styles.movieEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.movies}>Movies</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.musicButton}>
                  <View style={styles.musButton}>
                    <View style={styles.musicEmojiRow}>
                      <FontAwesomeIcon
                        name="music"
                        style={styles.musicEmoji}
                      ></FontAwesomeIcon>
                      <Text style={styles.music}>Music</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.genre}>Genre</Text>
              <View style={styles.actionButtonRow}>
                <View style={styles.actionButton}>
                  <View style={styles.actButton}>
                    <View style={styles.actionEmojiRow}>
                      <SimpleLineIconsIcon
                        name="target"
                        style={styles.actionEmoji}
                      ></SimpleLineIconsIcon>
                      <Text style={styles.action}>Action</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.comedyButton}>
                  <View style={styles.comButton}>
                    <View style={styles.comedyEmojiRow}>
                      <IoniconsIcon
                        name="ios-happy"
                        style={styles.comedyEmoji}
                      ></IoniconsIcon>
                      <Text style={styles.comedy}>Comedy</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dramaButtonRow}>
                <View style={styles.dramaButton}>
                  <View style={styles.draButton}>
                    <View style={styles.dramaEmojiRow}>
                      <EntypoIcon
                        name="mask"
                        style={styles.dramaEmoji}
                      ></EntypoIcon>
                      <Text style={styles.drama}>Drama</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.horrorButton}>
                  <View style={styles.horButton}>
                    <View style={styles.horrorEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="ghost"
                        style={styles.horrorEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.horror}>Horror</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.thrillerButtonRow}>
                <View style={styles.thrillerButton}>
                  <View style={styles.thrButton}>
                    <View style={styles.thrillerEmojiRow}>
                      <MaterialCommunityIconsIcon
                        name="knife"
                        style={styles.thrillerEmoji}
                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.thriller}>Thriller</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.romanceButton}>
                  <View style={styles.romButtonStack}>
                    <View style={styles.romButton}>
                      <MaterialCommunityIconsIcon
                        name="heart"
                        style={styles.romanceEmoji}
                      ></MaterialCommunityIconsIcon>
                    </View>
                    <Text style={styles.romance}>Romance</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.sort}>Sort</Text>
              <View style={styles.recentSortButtonRow}>
                <View style={styles.recentSortButton}>
                  <View style={styles.mosRecButtonStack}>
                    <View style={styles.mosRecButton}>
                      <FontAwesomeIcon
                        name="calendar"
                        style={styles.calendar}
                      ></FontAwesomeIcon>
                    </View>
                    <Text style={styles.mostRecent}>Most Recent</Text>
                  </View>
                </View>
                <View style={styles.alphaSortButton}>
                  <View style={styles.aZButtonStack}>
                    <View style={styles.aZButton}>
                      <MaterialCommunityIconsIcon
                        name="sort-alphabetical"
                        style={styles.aZ}
                      ></MaterialCommunityIconsIcon>
                    </View>
                    <Text style={styles.alphabetical}>Alphabetical</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.filters}>Filters</Text>
          </View>
        </View>
        <Text style={styles.mediaRecommendations}>Media Recommendations</Text>
        <BackArrow style={styles.backArrow}></BackArrow>
      </View>
      <View style={styles.filterMediaButton}>
        <View style={styles.filButtonStack}>
          <View style={styles.filButton}>
            <Text style={styles.filterMedia}>Filter Media</Text>
          </View>
          <MaterialCommunityIconsIcon
            name="filter-variant"
            style={styles.filterEmoji}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <Homebar style={styles.homebar}></Homebar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filterBody: {
    top: 111,
    left: 3,
    width: 352,
    height: 644,
    position: "absolute"
  },
  body: {
    left: 15,
    width: 321,
    height: 643,
    position: "absolute",
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 70,
    top: 1
  },
  category: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 33,
    width: 99,
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    marginLeft: 111
  },
  bookButton: {
    width: 142,
    height: 63
  },
  booButton: {
    top: 0,
    left: 0,
    width: 133,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  bookEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 10,
    marginLeft: 10
  },
  books: {
    top: 19,
    left: 55,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 27,
    width: 87,
    fontSize: 16
  },
  booButtonStack: {
    width: 142,
    height: 63
  },
  tVShowsButton: {
    width: 133,
    height: 63,
    marginLeft: 18
  },
  tvsButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  tVEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    width: 40,
    height: 44
  },
  tvShows: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 81,
    textAlign: "center",
    fontSize: 16,
    marginTop: 9
  },
  tVEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 1,
    marginLeft: 11,
    marginTop: 10
  },
  bookButtonRow: {
    height: 63,
    flexDirection: "row",
    marginLeft: 9,
    marginRight: 19
  },
  moviesButton: {
    width: 133,
    height: 63
  },
  movButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  movieEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  movies: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 20,
    width: 62,
    fontSize: 16,
    marginLeft: 5,
    marginTop: 12
  },
  movieEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 10,
    marginTop: 10
  },
  musicButton: {
    width: 133,
    height: 63,
    marginLeft: 27
  },
  musButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  musicEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    width: 34,
    height: 40
  },
  music: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 60,
    fontSize: 16,
    marginLeft: 8,
    marginTop: 8
  },
  musicEmojiRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 11,
    marginTop: 12
  },
  moviesButtonRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 9,
    marginRight: 19
  },
  genre: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    height: 27,
    width: 76,
    fontSize: 18,
    marginTop: 12,
    marginLeft: 126
  },
  actionButton: {
    width: 133,
    height: 63
  },
  actButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  actionEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    width: 40,
    height: 44
  },
  action: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 66,
    fontSize: 16,
    marginLeft: 5,
    marginTop: 11
  },
  actionEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 10,
    marginTop: 10
  },
  comedyButton: {
    width: 133,
    height: 63,
    marginLeft: 27
  },
  comButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  comedyEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    width: 32,
    height: 44
  },
  comedy: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 66,
    fontSize: 16,
    marginLeft: 6,
    marginTop: 11
  },
  comedyEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 15,
    marginTop: 10
  },
  actionButtonRow: {
    height: 63,
    flexDirection: "row",
    marginLeft: 9,
    marginRight: 19
  },
  dramaButton: {
    width: 133,
    height: 63,
    marginTop: 1
  },
  draButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  dramaEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  drama: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 66,
    fontSize: 16,
    marginLeft: 7,
    marginTop: 11
  },
  dramaEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 8,
    marginTop: 9
  },
  horrorButton: {
    width: 133,
    height: 63,
    marginLeft: 27
  },
  horButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  horrorEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  horror: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 1,
    marginTop: 11
  },
  horrorEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 12,
    marginTop: 10
  },
  dramaButtonRow: {
    height: 64,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 9,
    marginRight: 19
  },
  thrillerButton: {
    width: 133,
    height: 63
  },
  thrButton: {
    width: 133,
    height: 63,
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  thrillerEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  thriller: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 66,
    fontSize: 16,
    marginLeft: 5,
    marginTop: 12
  },
  thrillerEmojiRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 10,
    marginTop: 9
  },
  romanceButton: {
    width: 147,
    height: 63,
    marginLeft: 27
  },
  romButton: {
    top: 0,
    left: 0,
    width: 133,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  romanceEmoji: {
    color: "rgba(27,6,94,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 10,
    marginLeft: 11
  },
  romance: {
    top: 21,
    left: 53,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 94,
    fontSize: 16
  },
  romButtonStack: {
    width: 147,
    height: 63
  },
  thrillerButtonRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 9,
    marginRight: 5
  },
  sort: {
    fontFamily: "open-sans-600",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 130
  },
  recentSortButton: {
    width: 133,
    height: 63
  },
  mosRecButton: {
    top: 0,
    left: 0,
    width: 133,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  calendar: {
    color: "rgba(27,6,94,1)",
    fontSize: 35,
    width: 33,
    height: 35,
    marginTop: 14,
    marginLeft: 13
  },
  mostRecent: {
    top: 13,
    left: 55,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 51,
    width: 66,
    fontSize: 16
  },
  mosRecButtonStack: {
    width: 133,
    height: 64
  },
  alphaSortButton: {
    width: 150,
    height: 63,
    marginLeft: 26
  },
  aZButton: {
    top: 0,
    left: 0,
    width: 140,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,134,0,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  aZ: {
    color: "rgba(27,6,94,1)",
    fontSize: 35,
    width: 35,
    height: 38,
    marginTop: 13,
    marginLeft: 12
  },
  alphabetical: {
    top: 20,
    left: 49,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 24,
    width: 101
  },
  aZButtonStack: {
    width: 150,
    height: 63
  },
  recentSortButtonRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 9,
    marginRight: 3
  },
  filters: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(249,105,0,1)",
    height: 40,
    width: 352,
    textAlign: "center",
    fontSize: 36
  },
  bodyStack: {
    width: 352,
    height: 644
  },
  mediaRecommendations: {
    top: 10,
    left: 0,
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
    left: 10,
    height: 76,
    width: 48
  },
  filterBodyStack: {
    width: 355,
    height: 755,
    marginTop: 15
  },
  filterMediaButton: {
    width: 325,
    height: 87,
    marginTop: 13,
    marginLeft: 24
  },
  filButton: {
    top: 9,
    left: 0,
    width: 325,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 82,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  filterMedia: {
    fontFamily: "open-sans-700",
    color: "#121212",
    height: 57,
    width: 102,
    fontSize: 20,
    textAlign: "center",
    marginTop: 6,
    marginLeft: 157
  },
  filterEmoji: {
    top: 0,
    left: 45,
    position: "absolute",
    color: "rgba(0,107,166,1)",
    fontSize: 80
  },
  filButtonStack: {
    width: 325,
    height: 87
  },
  homebar: {
    width: 362,
    height: 65,
    marginTop: 15
  }
});

export default Filter;
