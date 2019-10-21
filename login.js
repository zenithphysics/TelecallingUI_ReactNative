import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    Button,
    View, FlatList, TouchableOpacity, TextInput
} from 'react-native';


export default class Login extends React.Component{
    constructor()
    {
        super()
        this.state={

        }
        this.loginname=null;
        this.passwords=null;


    }
login=()=>{
    fetch('http://10.0.2.2:3000/login',{

        method:'POST',
        body:JSON.stringify({loginname:this.loginname,passwords:this.passwords}),
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

}

    render() {

        return(
            <View>
                <TextInput placeholder={'user name'}
                           value={this.loginname}
                           onChangeText={(text)=>this.loginname=text}

                />
                <TextInput placeholder={'password'}
                           value={this.passwords}
                           onChangeText={(text)=>this.passwords=text}

                />
                <TouchableOpacity onPress={()=>this.login()} ><Text>sumbit</Text></TouchableOpacity>


            </View>
        )
    }
}