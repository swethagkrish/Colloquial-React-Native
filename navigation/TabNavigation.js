import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Books from "../screens/BookScreen/Book";
import { icons, COLORS } from "../components";
import { Ionicons } from '@expo/vector-icons';
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
                        case "Books":
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

                        case "Search":
                            return (
                                /*<Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />*/
                                <Ionicons name='search-outline' size={25} />
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
                                <Ionicons name='notifications-outline' size={25} />
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
                    }
                }
            })}
        >
            <Tab.Screen
                name="Books"
                component={Books}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
            />
        </Tab.Navigator>
    )
}

export default Tabs;