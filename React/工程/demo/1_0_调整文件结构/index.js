/**
 * @format
 */

import {AppRegistry} from 'react-native';




// 调整为
import App from './src/index';

// 等价于
// import App from './src';




// 原来的
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
