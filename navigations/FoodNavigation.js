import React from 'react'
import { Button, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather";
import Color from '../constants/Color'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from '../screens/LoginScreens'
import SignupScreens from '../screens/SignupScreens';
import FoodCategoriScreens, { FoodScreenOptions } from '../screens/FoodCategoriScreens';
import ProfileScreens, { ProfileScreenOption } from '../screens/ProfileScreen';
import FilterScreens, { FilterScreenOption } from '../screens/FilterScreen';
import FavoriteScreens, { FavoriteScreenOption } from '../screens/FavoriteScreen';
import MealsDetailScreens, { MealsDetailOption } from '../screens/MealsDetailScreens';


const ProfileStack = createStackNavigator()
const ProfileNavigation = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profiles" component={ProfileScreens}
                options={ProfileScreenOption}
            />
        </ProfileStack.Navigator>
    )
}

const FilterStack = createStackNavigator();
const filterNavigations = () => {
    return (
        <FilterStack.Navigator>
            <FilterStack.Screen name="FilterStack" component={FilterScreens}
                options={FilterScreenOption}
            />
        </FilterStack.Navigator>
    );
};

const StackFavotites = createStackNavigator();
const FavNavigator = () => {
    return (
        <StackFavotites.Navigator>
            <StackFavotites.Screen name="FavoriteScreen" component={FavoriteScreens}
                options={FavoriteScreenOption}
            />

        </StackFavotites.Navigator>
    );
};

const Stack = createStackNavigator();
const FoodNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignupScreens} />
                <Stack.Screen name="container" component={MealsFavTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const NavStack = createStackNavigator();
const Navigation = () => {
    return (
        <NavStack.Navigator>
            <NavStack.Screen
                name="FoodCategori"
                component={FoodCategoriScreens}
                options={FoodScreenOptions}
            />
            <NavStack.Screen
                name="MealDetailScreen"
                component={MealsDetailScreens}
                options={MealsDetailOption}
            />
        </NavStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const MealsFavTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeColor: Color.accentColor,
                //activeColor: 'red',
                barStyle: {
                    backgroundColor: Color.primaryColor,
                    //backgroundColor: 'red',
                },
            }}
        >
            <Tab.Screen
                name="Categori Food"
                component={MainNavigator}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="ios-restaurant"
                                size={25}
                                color={Color.primaryColor}
                            //color="red"
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Food Favorite"
                component={FavNavigator}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name="ios-star" size={25} color={Color.primaryColor} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};


const Drawer = createDrawerNavigator();
const MainNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <View style={{ flex: 1, padding: 20 }}>
                        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
                            <DrawerItemList {...props} />
                            <Button
                                title="Logout"
                                color={Color.primary}
                                //color="red"
                                onPress={() => {
                                    props.navigation.navigate("Login");
                                }}
                            />
                        </SafeAreaView>
                    </View>
                );
            }}
        >
            <Drawer.Screen name="Food Categori" component={Navigation} options={{
                drawerIcon: (props) => (
                    <Ionicons
                        name={Platform.OS === "android" ? "md-pizza" : "ios-pizza"}
                        size={23}
                        color={props.color}
                    />
                ),
            }} />

            <Drawer.Screen name="Filter" component={filterNavigations} options={{
                drawerIcon: (props) => (
                    <Ionicons
                        name={Platform.OS === "android" ? "md-color-filter" : "ios-color-filter"}
                        size={23}
                        color={props.color}
                    />
                ),
            }} />
            <Drawer.Screen name="Profile" component={ProfileNavigation} options={{
                drawerIcon: (props) => (
                    <Feather name="user-check" size={23} color={props.color} />
                ),
            }} />

        </Drawer.Navigator>
    );
};


export default FoodNavigation
