import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ScreenOrientation from 'expo-screen-orientation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './pages/Main';
import About from './pages/About';
import Options from './pages/Setting';


const Stack = createMaterialTopTabNavigator()
export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE); // Lock view in Landscape
  return (
    <NavigationContainer>
        <StatusBar animated={true} hidden={true} style="auto" />
        <Stack.Navigator screenOptions={ ({route}) => ({
                          
                          tabBarIcon: ({focused, color, size}) =>{
                            
                            let iconName;
                            let rn = route.name;
                            
                            if (rn == "Home"){
                              iconName = focused ? 'paper-plane' : 'paper-plane';
                            }
                            else if (rn == "About"){
                              iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                            }
                            else if (rn == "Opts"){
                              iconName = focused ? 'apps' : 'apps-outline';
                            }

                            return <Ionicons name={iconName} size={20} color={color} style={{paddingLeft: 2}} />
                          },

                          

                        })}
                        tabBarOptions={{
                          activeTintColor: '#AAAAAA',
                          inactiveTintColor: '#616161',
                          indicatorStyle: {
                            backgroundColor: '#c1c1c1'
                          },
                          labelStyle: {paddingBottom: 10, fontSize: 7,fontWeight: "bold"},
                          style: { backgroundColor: 'black' ,padding: 1, height: 70, borderTopWidth:0 },
                          tabStyle: {
                            backgroundColor: "black",
                            borderTopWidth: 0,
                            width: 150,
                          },
                        }}
                        >
          <Stack.Screen name={"Home"} component={Main} />
          <Stack.Screen name={"About"} component={About} />
          <Stack.Screen name={"Opts"} component={Options} />


        </Stack.Navigator>
    </NavigationContainer>
  );
}
