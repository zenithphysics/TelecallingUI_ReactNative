import React, { Component } from 'react';
//import react in our code.
import {
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

//Import required react-navigation component
import {createAppContainer, CreateNavigatorConfig as defaultNavigationOptions,} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator, } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {createStackNavigator} from "react-navigation-stack";
//Import all the screens for Drawer/ Sidebar
import App from './app1';
import Appp from './home'

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                 <Text>=</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//Stack Navigator for First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 1',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: Appp,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 2',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for Third Option of Navigation Drawer


//Drawer Navigator for the Navigation Drawer / Sidebar
const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
        //Title
        screen: FirstActivity_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 1',
        },
    },

    Screen2: {
        //Title
        screen: Screen2_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 2',
        },
    },


});
export default createAppContainer(DrawerNavigatorExample);