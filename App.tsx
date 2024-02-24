import React from 'react';
import RootNavigator from './app/navigation';
import AppProvider from './app/providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
