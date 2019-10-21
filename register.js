
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    AsyncStorage,
    Dimensions,
    ScrollView,TextInput,Button
} from 'react-native';

export default class Register extends React.Component {

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
                <Button title={'this data is from back end server'} onclick={()=>this.showDetail()}/>
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


            </View>
        );
    }

}