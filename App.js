import React from 'react';

import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,Button,Text,TouchableOpacity
} from 'react-native';

import Row from './examples/Simple/app/Row';
import Home from "./home";
import {createAppContainer, CreateNavigatorConfig as defaultNavigationOptions,} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator, } from 'react-navigation-tabs';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
import { createDrawerNavigator } from 'react-navigation-drawer';

import {createStackNavigator} from "react-navigation-stack";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#4A637D',
        flex: 1,
        padding: 10,
        paddingTop: STATUSBAR_HEIGHT,
    },
});

export class App extends React.Component{

    constructor()
    {
        super()
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <ScrollView
                    style={styles.scrollView}
                >
                    <Row zIndex={100} />
                    <Row zIndex={90} />
                    <Row zIndex={80} />
                    <Row zIndex={70} />
                </ScrollView>

            </View>


        )
    }
}



const TabNavigator = createMaterialTopTabNavigator({
    Homes: {screen:App,
        navigationOptions: {

            tabBarIcon: ({ tintColor }) => (

                <View style={{width:50}}>
                    <Icon name="person" size={35} color="white" />
                </View>
            )
        },

    },
    Settings: {screen:Home,
        navigationOptions: {

            tabBarIcon: ({ tintColor }) => (
<View style={{width:50}}>
                <Icon name="settings" size={35} color="white" />
</View>
            )
        },


    },
},
    {
         // So your Android tabs go bottom
        tabBarOptions: {
            showIcon: 'true',
            showLabel: false ,// Shows an icon for both iOS and Android

            labelStyle: {
                fontSize: 12
            },
            style: {
                backgroundColor: '#6C86A2',
                color:'white',
                height:60// Makes Android tab bar white instead of standard blue
            }
        }
    },
);

export default createAppContainer(TabNavigator);