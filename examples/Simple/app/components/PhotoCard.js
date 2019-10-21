import React from 'react';

import {
  View,
  StyleSheet,Text,TouchableOpacity
} from 'react-native';

import {
  ThinGrayLine,
  ThickWhiteLine,
} from './Lines';
import AdditionalInfoCard from "./AdditionalInfoCard";
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373B',
    padding: 10,
    flexDirection: 'column',


      height:'100%'
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',

      flexDirection:'row'

  },
});
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

export default ({ onPress }) => (


  <View style={styles.container}>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',

        height: 40,
        padding: 10,

      }}
    >
        <View style={{backgroundColor:'white',width:60,borderRadius:15}}>
            <Text style={{justifyContent:'flex-start',alignItems:'center',alignSelf:'center',borderRadius:15}}>{hours}:{minutes}</Text>
        </View>

        <View style={{backgroundColor:'white',width:60,borderRadius:15}}>
            <Text style={{justifyContent:'flex-start',alignItems:'center',alignSelf:'center'}}>1</Text>
        </View>

    </View>

    <View style={styles.card}>

        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor:'#33373B',
                width:62,padding:10


            }}
        >


            <View style={{flexDirection:'column',width:50,}}>
                <TouchableOpacity style={{alignSelf:'flex-start',backgroundColor:'lightblue',borderRadius:15,padding:5,}} >
                    <View>
                    <Icon name="message" size={27} color="white" />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{flexDirection:'column',width:50,}}>
                <TouchableOpacity style={{alignSelf:'flex-start',backgroundColor:'pink',borderRadius:15,padding:5,}} >
                    <View>
                        <Icon name="heart" size={27} color="white" />
                    </View>
                </TouchableOpacity>

            </View>



    </View>
        <Text style={{fontSize:25,alignItems:'center',alignSelf:'center',marginTop:'5%',textAlign: 'right',position: 'absolute', right: 15,}}>+91-9026232425</Text>

    </View>


</View>


);
