import React from 'react';
import { UserAuthProvider } from './UserAuthProvider';
import Navigate from './Naivgate';
import { Provider as PaperProvider } from 'react-native-paper';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <PaperProvider>
      <UserAuthProvider>
        <Navigate />
      </UserAuthProvider>
    </PaperProvider>
    
  );
}