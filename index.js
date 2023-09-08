import 'react-native-gesture-handler'
import 'react-native-reanimated'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogLevel, OneSignal } from 'react-native-onesignal';

import { KEY } from './key'

OneSignal.initialize(KEY.ONESIGNAL_ID);

OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// requestPermission will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
OneSignal.Notifications.requestPermission(true);

// Method for listening for notification clicks
OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
});

AppRegistry.registerComponent(appName, () => App);
