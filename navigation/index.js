import React from 'react';
import { UserAuthProvider } from './UserAuthProvider';
import Navigate from './Naivgate';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <UserAuthProvider>
      <Navigate />
    </UserAuthProvider>
  );
}