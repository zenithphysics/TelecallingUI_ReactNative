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
import Register from "./register";
import Login from "./login";

class Home extends Component {
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




    update=()=>{

        fetch('http://10.0.2.2:3000/update',{

            method:'POST',
            body:JSON.stringify({id:this.id,blog_title:this.blog_title,blog_content:this.blog_content}),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        }).then((responsedata)=>
        {

            return responsedata.json()

        }).then((jsondata)=>{

                this.setState({data:jsondata})
            }

        ).done()
        this.id=null;
        this.blog_content=null;
        this.blog_title=null




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

                <View>
                    <TextInput value={this.id}
                               placeholder={'id'}
                               onChangeText={(item)=>this.id=item}

                    />
                    <TextInput value={this.body_title}
                               placeholder={'TITLE'}
                               onChangeText={(item)=>this.blog_title=item}
                    />

                    <TextInput value={this.body_content}
                               onChangeText={(item)=>this.blog_content=item}
                               placeholder={'CONTENT'}

                    />

                    <TouchableOpacity onPress={()=>this.update()} ><Text>sumbit</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')} ><Text>register new user</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}><Text>login</Text></TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default Home