import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Profile} from "../views/Profile";
import {Home} from "../views/Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => <Icon name="home" color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color}) => <Icon name="person" color={color} />,
      }}
    />
  </Tab.Navigator>
  );
};

const StackScreen = () => {
    const [isLoggedIn] = useContext(MainContext);
    return (
      <Stack.Navigator>
        // TODO: if isLoggedIn is true add Tabs and Single      
            <Stack.Screen name="Tabs" component={TabScreen}/>
            <Stack.Screen name="Single" component={Single}/>          
        // TODO: else add Login
            <Stack.Screen name="Login" component={Login}/>          
      </Stack.Navigator>
    );
  };

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen/>
    </NavigationContainer>
  );
};
  
export default Navigator;