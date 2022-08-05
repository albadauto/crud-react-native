import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './src/screens/About/Index';
import Home from './src/screens/Home/Index';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from './src/components/Header/Index';
import FlashMessage from 'react-native-flash-message';
import Login from './src/screens/Login/Index';
export default function App() {
  const Tab = createBottomTabNavigator();
  const colorMain: string = '#F24F00'
  return (
    <NavigationContainer>
      <Header />
      <FlashMessage />
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }} >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: ({color, focused}) => {
            return (
              <Text style={{ color: focused ? colorMain : '#000'}}>Home</Text>
            )
          },

          tabBarIcon: ({ color , size }) => {
            color = colorMain
            return(
              <Ionicons name="home" color={color} size={size} />
            )
          }
          
        }} />
        <Tab.Screen name="Sobre" component={About} options={{
           tabBarLabel: ({color, focused}) => {
            return (
              <Text style={{ color: focused ? colorMain : '#000'}}>Sobre</Text>
            )
          },
          tabBarIcon: ({ color, size }) => {
            color = colorMain
            return(
              <Ionicons name="alert" color={color} size={size} />
            )
          }
        }} />

        <Tab.Screen name="Login" component={Login} options={{
           tabBarLabel: ({focused}) => {
            return (
              <Text style={{ color: focused ? colorMain : '#000'}}>Login</Text>
            )
          },
          tabBarIcon: ({ color, size }) => {
            color = colorMain
            return (
              <Ionicons name="body" color={color} size={size} />
            )
          }
          
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

