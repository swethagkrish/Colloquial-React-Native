import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import SelectLanguage from "./src/screens/SelectLanguage";
import Welcome from "./src/screens/Welcome";
import Filter from "./src/screens/Filter";
import FilteredMedia from "./src/screens/FilteredMedia";
import SelectedMedia from "./src/screens/SelectedMedia";
import WriteReview from "./src/screens/WriteReview";
import ChatScreen from "./src/screens/ChatScreen";
import Bookmarks from "./src/screens/Bookmarks";
import Profile from "./src/screens/Profile";
import Contacts from "./src/screens/Contacts";
import Review from "./src/screens/Review";

const DrawerNavigation = createDrawerNavigator({
  SelectLanguage: SelectLanguage,
  Welcome: Welcome,
  Filter: Filter,
  FilteredMedia: FilteredMedia,
  SelectedMedia: SelectedMedia,
  WriteReview: WriteReview,
  ChatScreen: ChatScreen,
  Bookmarks: Bookmarks,
  Profile: Profile,
  Contacts: Contacts,
  Review: Review
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    SelectLanguage: SelectLanguage,
    Welcome: Welcome,
    Filter: Filter,
    FilteredMedia: FilteredMedia,
    SelectedMedia: SelectedMedia,
    WriteReview: WriteReview,
    ChatScreen: ChatScreen,
    Bookmarks: Bookmarks,
    Profile: Profile,
    Contacts: Contacts,
    Review: Review
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
      "open-sans-700": require("./src/assets/fonts/open-sans-700.ttf"),
      "open-sans-800": require("./src/assets/fonts/open-sans-800.ttf"),
      "open-sans-600": require("./src/assets/fonts/open-sans-600.ttf"),
      "open-sans-regular": require("./src/assets/fonts/open-sans-regular.ttf")
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
