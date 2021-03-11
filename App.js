import React, { useState } from 'react';
import Providers from './navigation';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold, OpenSans_400Regular} from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold, 
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  } else {
      return <Providers />;
  }
}
