/**
 * @format
 */
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['It appears that you are using']);
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);

