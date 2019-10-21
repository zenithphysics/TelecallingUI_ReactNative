import React from 'react';

import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,Button,Text,TouchableOpacity
} from 'react-native';

import Row from './examples/Simple/app/Row';
import {Appp} from "./home";
import {createAppContainer, CreateNavigatorConfig as defaultNavigationOptions,} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator, } from 'react-navigation-tabs';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
import { createDrawerNavigator } from 'react-navigation-drawer';

import {createStackNavigator} from "react-navigation-stack";
import Icon from "@material-ui/core/Icon";
import TabHelper from "./TabHelper";
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


export default class Apps extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        title: "CPU",
        headerLeft: (
            <TouchableOpacity

                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),
    })
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

                <TabHelper/>
            </View>


        )
    }
}


//
//
// const HomeScreenNavigator = createMaterialTopTabNavigator({
//
//     Home: {
//         screen: Apps,
//     },
//
//
//     Settings: {
//         screen: Appp
//     },
// },
//     {
//         initialRouteName: "Home"
//     }
//
//     );
//
// const HomeScreenNavigator1 = createMaterialTopTabNavigator({
//
//
//
//     Home: {
//         screen: Apps,
//     },
//
//
//     Settings: {
//         screen: Appp,
//
//     },
//
//
// },
// {
//     initialRouteName: "Settings"
// }
// );
// const AppNavigator = createDrawerNavigator({
//
//
//
//
//     Home: {
//
//
//         screen: HomeScreenNavigator,
//
//     },
//     Products: {
//         screen: HomeScreenNavigator1
//     },
//
// },
//     );
// export default createAppContainer(AppNavigator)