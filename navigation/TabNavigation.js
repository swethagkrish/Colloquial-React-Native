import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import Welcome from '../screens/Welcome'
import Bookmarks from "../screens/Bookmarks"
import SelectLanguage from "../screens/SelectLanguage"
import Profile from '../screens/Profile'

import { icons, COLORS } from "../components";
import { Ionicons } from '@expo/vector-icons';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//import Chat from '../screens/Chat'

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "Bookmark":
                            return (
                                <MaterialIconsIcon
                                    name="bookmark"
                                    style={styles.bookmark}
                                    ></MaterialIconsIcon>
                            )

                        case "Welcome":
                            return (
                                <MaterialIconsIcon
                                    name="notifications"
                                    style={styles.notification}></MaterialIconsIcon>
                            )
                        
                        case "SelectLanguage":
                            return (
                                <View style={styles.container}>
                                    <View style={styles.earthStack}>
                                        <IoniconsIcon name="md-globe" style={styles.earth}></IoniconsIcon>
                                        <MaterialCommunityIconsIcon
                                            name="television-classic"
                                            style={styles.tV}
                                        ></MaterialCommunityIconsIcon>
                                        <EntypoIcon name="book" style={styles.book}></EntypoIcon>
                                        <MaterialCommunityIconsIcon
                                            name="video-vintage"
                                            style={styles.movie}
                                        ></MaterialCommunityIconsIcon>
                                        <FontAwesomeIcon name="music" style={styles.icon10}></FontAwesomeIcon>
                                    </View>
                                </View>
                            )
                        
                        
                        case 'Profile':
                            return (
                                <IoniconsIcon name="md-person" style={styles.profile}></IoniconsIcon>
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Welcome"
                component={Welcome}
            />
            {/*<Tab.Screen
                name="Chat"
                component={Chat}
            />*/}
            <Tab.Screen
                name="SelectLanguage"
                component={SelectLanguage}
            />
            <Tab.Screen
                name="Bookmark"
                component={Bookmarks}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {},
    earth: {
      position: "absolute",
      color: "rgba(255,134,0,1)",
      fontSize: 70,
      left: 0,
      top: 0
    },
    tV: {
      top: 23,
      left: 38,
      position: "absolute",
      color: "rgba(217,240,255,1)",
      fontSize: 19
    },
    book: {
      top: 7,
      left: 20,
      position: "absolute",
      color: "rgba(217,240,255,1)",
      fontSize: 18
    },
    movie: {
      top: 25,
      left: 2,
      position: "absolute",
      color: "rgba(217,240,255,1)",
      fontSize: 18
    },
    icon10: {
      top: 43,
      left: 22,
      position: "absolute",
      color: "rgba(217,240,255,1)",
      fontSize: 16
    },
    earthStack: {
      width: 57,
      height: 76
    }
  });

export default Tabs;