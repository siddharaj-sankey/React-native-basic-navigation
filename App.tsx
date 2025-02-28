import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing screens
import HomeScreen from './screens/HomeScreen';
// import Profile from './screens/Profile';
// import Dayinfo from './screens/Dayinfo';//
import Dayinfo from './screens/Dayinfo';
import ToDoScreen from './screens/ToDoScreen';
import Profile from './screens/Profile';
import News from './screens/News';
import Incdec from './screens/Incdec';
// Create a tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="News"
        screenOptions={{
          tabBarActiveTintColor: 'tomato',  // Active tab color
          tabBarInactiveTintColor: 'gray',  // Inactive tab color
          tabBarStyle: { backgroundColor: 'lightblue' },  // Tab bar style
        }}
      >
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Todo" component={ToDoScreen} />
        <Tab.Screen name="Dayinfo" component={Dayinfo} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name = "InDc" component={Incdec} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

