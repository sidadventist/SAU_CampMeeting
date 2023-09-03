import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { legacy_createStore } from 'redux';
import Navigator from './src/components/navigator';
import { Provider } from 'react-redux';
import { Platform, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const reducer = (state = 12, action) => {
  // console.log(state)
  switch (action.type) {
    case 'INCREASE_FONT_SIZE':
      return state !== 28 ? state + 4 : state
    case 'DECREASE_FONT_SIZE':
      return state !== 12 ? state - 4 : state
    default:
      return state
  }
}
const store = legacy_createStore(reducer)

// useEffect(() => {
//   SplashScreen.hide()
// })

if (Platform.OS === 'ios') {
  SplashScreen.hide()
}
function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (

    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    </Provider>

  );
}

export default App;

// basic flow...check if storage = null then useEffect & get data save inAsyncStorage else populte with data
