import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {SignIn} from './src/screens/SignIn';
import {THEME} from './src/styles/theme';
import {Loading} from './src/components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {isLoading ? <Loading /> : <SignIn />}
    </NativeBaseProvider>
  );
}

export default App;
