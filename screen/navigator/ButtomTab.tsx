import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import LoginScreen from "../view/LoginScreen";
import SignUpScreen from "../view/SignUpScreen";
import CartScreen from "../view/CartScreen";
import DentailProductScreen from "../view/DentailProductScreen";
import PersonScreen from "../view/PersonScreen";
import PayScreen from "../view/PayScreen";
import SearchScreen from "../view/SearchScreen";
import Homescreen from "../view/Homescreen";
import QandA from "../view/QandA";
import CamNangCayTrong from "../view/CamNangCayTrong";
import ShowPayScreen from "../view/ShowPayScreen";
import store from "../redux/store";
import { Provider } from "react-redux";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Welcome(props: { navigation: any; }) {
    const { navigation } = props;
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('MyStack');
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#0C0F14',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../image/img1.png')}
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    );
}

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                options={{ headerShown: false }}
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUpScreen"
                options={{ headerShown: false }}
                component={SignUpScreen}
            />
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route, }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Homescreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'SearchScreen') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'CartScreen') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'PersonScreen') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} color={color} size={size} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Homescreen"
                component={Homescreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: focused ? 14 : 12,
                            fontWeight: 'bold',
                            color: focused ? 'black' : 'gray'
                        }}>Home</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: focused ? 14 : 12,
                            fontWeight: 'bold',
                            color: focused ? 'black' : 'gray'
                        }}>Search</Text>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: focused ? 14 : 12,
                            fontWeight: 'bold',
                            color: focused ? 'black' : 'gray'
                        }}>Cart</Text>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="PersonScreen"
                component={PersonScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: focused ? 14 : 12,
                            fontWeight: 'bold',
                            color: focused ? 'black' : 'gray'
                        }}>Person</Text>
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
export default function Navigator() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Welcome"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="Welcome"
                        options={{ headerShown: false }}
                        component={Welcome}
                    />
                    <Stack.Screen name="MyStack" component={MyStack} />
                    <Stack.Screen name="MyTabs" component={MyTabs} />
                    <Stack.Screen name='DentailProductScreen' component={DentailProductScreen} />
                    <Stack.Screen name='PayScreen' component={PayScreen} />
                    <Stack.Screen name='ShowPayScreen' component={ShowPayScreen} />
                    <Stack.Screen name="QandA" component={QandA} />
                    <Stack.Screen name="CamNangCayTrong" component={CamNangCayTrong} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
