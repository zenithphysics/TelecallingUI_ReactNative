import React from 'react';

import {
    Button,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet, TextInput,
    View,
} from 'react-native';

import Row from './Row';
import {Content, Form, Input, Item, Label} from "native-base";

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

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

export default () => (
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
);
<View>
    <ScrollView horizontal={true}>
        <View style={{backgroundColor:'white',width:'100%',flex:1,flexDirection:'row',borderWidth:5,bordercolor:'grey'}}>
            <View style={{flex:1,flexDirection:'column',marginTop:15,padding:15}}>

                <Button title={'call '} onPress={this.flip} style={{marginBottom: 15,}}/>
                <View style={{margin:5}}></View>
                <Button title={'sumbit feedback'} onPress={this.flip} style={{margin: 15}}/>
                <View style={{margin:5}}></View>
                <Button title={'Close'} onPress={this.flip} style={{margin: 15}}/>



            </View>






            <View style={{flex:1,flexDirection:'column',marginLeft:15}}>

                <Content >
                    <Form >
                        <Item floatingLabel style={{width:150}}>
                            <Label>Coustumer name</Label>
                            <Input  />
                        </Item>
                        <Item floatingLabel style={{width:150}} >
                            <Label>AVAIL</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
            </View>

            <View style={{flex:1,flexDirection:'column',width:150,marginTop:'5%',marginLeft:50}}>
                <TextInput underlineColorAndroid='black'/>
            </View>


        </View>

        {/*<View style={{width:'100%'}}>*/}

        {/*        <Content >*/}
        {/*            <Form >*/}
        {/*                <Item floatingLabel style={{width:200}}>*/}
        {/*                    <Label>Coustumer name</Label>*/}
        {/*                    <Input  />*/}
        {/*                </Item>*/}
        {/*                <Item floatingLabel style={{width:200}} >*/}
        {/*                    <Label>AVAIL</Label>*/}
        {/*                    <Input />*/}
        {/*                </Item>*/}
        {/*            </Form>*/}
        {/*        </Content>*/}
        {/*</View>*/}


    </ScrollView>

</View>