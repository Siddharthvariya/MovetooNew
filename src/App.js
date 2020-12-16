import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import Root from './navigation';
import { Theme } from '@global';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Color } from './utils';

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: Color.AppColor,
      accent: Color.AppColor,
    },
  };
  return (

    <PaperProvider theme={theme} style={styles.container}>
      <StatusBar backgroundColor={Color.AppColor} barStyle="light-content"/>
      <Root />
    </PaperProvider>
  );
};
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
