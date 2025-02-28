/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store.tsx';  
import App from './App';  
import { name as appName } from './app.json';

const AppWithProvider = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithProvider);
