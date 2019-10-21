
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


export default class Add extends React.Component{

    constructor(){
        super()
        this.state={

        }
        this.id= null ;
        this.blog_title='';
        this.blog_content='';
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


    render() {
        return(
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

            </View>

        )
    }
}