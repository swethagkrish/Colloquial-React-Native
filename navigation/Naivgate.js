import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { auth } from '../components/Firebase/method';
//import navigationTheme from './navigationTheme';
import UserAuthNavigation from './UserAuthNavigation';
import AppNavigation from './AppNavigation';
import { UserAuthContext } from './UserAuthProvider';
//import Spinner from '../components/Spinner';

export default function Navigate() {
  const { user, setUser } = useContext(UserAuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    //return <Spinner />;
  }

  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <UserAuthNavigation/>}
    </NavigationContainer>
  );
}