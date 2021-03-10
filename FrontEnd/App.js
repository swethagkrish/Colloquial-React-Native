import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Bookmarks from "./src/screens/Bookmarks";
import ChatScreen from "./src/screens/ChatScreen";
import Contacts from "./src/screens/Contacts";
import Filter from "./src/screens/Filter";
import FilteredMedia from "./src/screens/FilteredMedia";
import Profile from "./src/screens/Profile";
import Review from "./src/screens/Review";
import SelectedMedia from "./src/screens/SelectedMedia";
import SelectLanguage from "./src/screens/SelectLanguage";
import Welcome from "./src/screens/Welcome";
import WriteReview from "./src/screens/WriteReview";

const DrawerNavigation = createDrawerNavigator({
  Bookmarks: Bookmarks,
  ChatScreen: ChatScreen,
  Contacts: Contacts,
  Filter: Filter,
  FilteredMedia: FilteredMedia,
  Profile: Profile,
  Review: Review,
  SelectedMedia: SelectedMedia,
  SelectLanguage: SelectLanguage,
  Welcome: Welcome,
  WriteReview: WriteReview
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Bookmarks: Bookmarks,
    ChatScreen: ChatScreen,
    Contacts: Contacts,
    Filter: Filter,
    FilteredMedia: FilteredMedia,
    Profile: Profile,
    Review: Review,
    SelectedMedia: SelectedMedia,
    SelectLanguage: SelectLanguage,
    Welcome: Welcome,
    WriteReview: WriteReview
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "open-sans-800": require("./src/assets/fonts/roboto-regular.ttf"),
      "open-sans-600": require("./src/assets/fonts/roboto-regular.ttf"),
      "open-sans-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "open-sans-700": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
