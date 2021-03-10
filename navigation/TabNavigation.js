import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Book from "../screens/MediaScreen/Book";
import Home from '../screens/HomeScreen/Home';
//import Chat from '../screens/'
import { icons, COLORS } from "../components";
import { Ionicons } from '@expo/vector-icons';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Chat from '../screens/Chat'

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
                        case "Book":
                            return (
                                /*<Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />*/
                                <Ionicons name="home-outline" size={25} />
                            )

                        case "Notifications":
                            return (
                                <MaterialIconsIcon
                                    name="notifications"
                                    style={styles.notification}></MaterialIconsIcon>
                            )

                        case "Chat":
                            return (
                                /*<Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />*/
                                <IoniconsIcon name="md-chatboxes" style={styles.chat}></IoniconsIcon>
                            )

                        case "Setting":
                            return (
                                /*<Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />*/
                                <Ionicons name='settings' size={25} />
                            )
                        
                        case "Home":
                            return (
                                <View style={styles.earthStack}>
                                    <IoniconsIcon name="md-globe" style={styles.earth}></IoniconsIcon>
                                    <MaterialCommunityIconsIcon
                                        name="television-classic"
                                        style={styles.icon8}></MaterialCommunityIconsIcon>
                                    <EntypoIcon name="book" style={styles.icon7}></EntypoIcon>
                                    <MaterialCommunityIconsIcon
                                        name="video-vintage"
                                        style={styles.icon9}></MaterialCommunityIconsIcon>
                                    <FontAwesomeIcon
                                        name="music"
                                        style={styles.icon10}></FontAwesomeIcon>
                                </View>
                            )
                        
                        case 'Library':
                            return (
                                <MaterialIconsIcon
                                    name="bookmark"
                                    style={styles.bookmark}></MaterialIconsIcon>
                            )
                        
                        case 'User':
                            return (
                                <IoniconsIcon name="md-person" style={styles.profile}></IoniconsIcon>
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Notifications"
                component={Notifications}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
            />
            <Tab.Screen
                name="Book"
                component={Book}
            />
            <Tab.Screen
                name="Home"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs;