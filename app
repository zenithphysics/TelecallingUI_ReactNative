
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    Button,
    View, FlatList, TouchableOpacity, TextInput
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Register from "./register";
import login from "./login";
import Add from "./add_blog";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {

    constructor(){
        super()

        this.state = {

            data:[]
        }
        this.id= null ;
        this.blog_title='';
        this.blog_content='';
    }


    showDetail=async()=>{
        const response = await fetch('http://10.0.2.2:3000/show');
        const shows=await response.json();
        this.setState({data:shows})
    }






    componentDidMount() {
        this.showDetail()

    }

    render() {
        return (
            <View>
                <Button title={'show all blogs'} onclick={()=>this.showDetail()}/>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>
                        <View>
                            <Text>{item.blog_title}</Text>
                            <Text>{item.blog_content}</Text>




                        </View>

                    }

                />

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')} ><Text>register new user</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('add_blog')}><Text>add</Text></TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}><Text>login</Text></TouchableOpacity>
            </View>
        );
    }

}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}

                <Text>hello</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    register:Register,
    login:login,
    add_blog:Add
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});

export default createAppContainer(
    createBottomTabNavigator(
        {
            Home: HomeStack,
            Settings: SettingsStack,
        },
        {
            /* Other configuration remains unchanged */
        }
    )
);