/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//
import Vista from './src/screens/modules/Demo/ViDemo'


//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Vista);


//instalar expo
