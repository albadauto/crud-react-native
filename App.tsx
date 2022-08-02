import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './src/screens/About/Index';
import Home from './src/screens/Home/Index';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Sobre" component={About} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
