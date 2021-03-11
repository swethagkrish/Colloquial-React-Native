import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Homebar from "../components/Homebar";

function SelectLanguage(props) {
  return (
    <View style={styles.container}>
      <Homebar style={styles.homebar}></Homebar>
      <Text style={styles.selectALanguage}>Select a Language</Text>
      <View style={styles.languageButtons}>
        <View style={styles.germanButtonRow}>
          <View style={styles.germanButton}>
            <View style={styles.gERButton}>
              <Text style={styles.german}>German</Text>
            </View>
          </View>
          <View style={styles.italianButton}>
            <View style={styles.iTLButton}>
              <Text style={styles.italian}>Italian</Text>
            </View>
          </View>
        </View>
        <View style={styles.frenchButtonRow}>
          <View style={styles.frenchButton}>
            <View style={styles.fRAButton}>
              <Text style={styles.french}>French</Text>
            </View>
          </View>
          <View style={styles.portugueseButton}>
            <View style={styles.pORButton}>
              <Text style={styles.portuguese}>Portuguese</Text>
            </View>
          </View>
        </View>
        <View style={styles.spanishButtonRow}>
          <View style={styles.spanishButton}>
            <View style={styles.eSPButton}>
              <Text style={styles.spanish}>Spanish</Text>
            </View>
          </View>
          <View style={styles.dutchButton}>
            <View style={styles.dUTButton}>
              <Text style={styles.dutch}>Dutch</Text>
            </View>
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
    width: 360,
    height: 65,
    marginTop: 675
  },
  selectALanguage: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 131,
    width: 360,
    fontSize: 48,
    textAlign: "center",
    marginTop: -718
  },
  languageButtons: {
    width: 327,
    height: 471,
    marginTop: 14,
    marginLeft: 17
  },
  germanButton: {
    width: 154,
    height: 131
  },
  gERButton: {
    width: 154,
    height: 131,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 44,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  german: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    marginTop: 85,
    marginLeft: 31
  },
  italianButton: {
    width: 154,
    height: 131,
    marginLeft: 17
  },
  iTLButton: {
    width: 154,
    height: 131,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 44,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  italian: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    marginTop: 85,
    marginLeft: 41
  },
  germanButtonRow: {
    height: 131,
    flexDirection: "row",
    marginLeft: 1,
    marginRight: 1
  },
  frenchButton: {
    width: 154,
    height: 131
  },
  fRAButton: {
    width: 154,
    height: 131,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 44,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  french: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    marginTop: 86,
    marginLeft: 38
  },
  portugueseButton: {
    width: 154,
    height: 131,
    marginLeft: 17
  },
  pORButton: {
    width: 154,
    height: 131,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 44,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  portuguese: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    height: 28,
    width: 147,
    fontSize: 24,
    textAlign: "center",
    marginTop: 86,
    marginLeft: 4
  },
  frenchButtonRow: {
    height: 131,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 1,
    marginRight: 1
  },
  spanishButton: {
    width: 154,
    height: 131
  },
  eSPButton: {
    width: 154,
    height: 131,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 44,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  spanish: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 24,
    marginTop: 85,
    marginLeft: 32
  },
  dutchButton: {
    width: 154,
    height: 131,
    justifyContent: "center",
    marginLeft: 18
  },
  dUTButton: {
    width: 154,
    height: 131,
    borderRadius: 44,
    backgroundColor: "rgba(217,240,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    alignSelf: "center"
  },
  dutch: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    textAlign: "center",
    fontSize: 24,
    marginTop: 85,
    marginLeft: 43
  },
  spanishButtonRow: {
    height: 131,
    flexDirection: "row",
    marginTop: 41,
    marginRight: 1
  }
});

export default SelectLanguage;
