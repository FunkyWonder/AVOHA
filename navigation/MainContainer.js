import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CameraWebScreen from "./screens/CameraWebScreen";

// Screen names
const homeName = "Home";
const detailsName = "Document List";
const CameraWebName = "Camera";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarActiveTintColor: '#B2FCFB',
                    tabBarInactiveTintColor: '#60949F',
                    tabBarStyle: {backgroundColor: '#102E44'},
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let routeName = route.name;

                        if (routeName === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (routeName === detailsName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (routeName === CameraWebName) {
                            iconName = focused ? 'list' : 'camera-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={detailsName} component={DetailsScreen}/>
                <Tab.Screen name={CameraWebName} component={CameraWebScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

