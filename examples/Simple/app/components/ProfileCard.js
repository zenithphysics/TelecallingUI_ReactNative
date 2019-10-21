import React, {
    Component,
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet, ScrollView, Button, TextInput, TouchableOpacity,
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

import {
    ThinGrayLine,
    ThickDarkGrayLine,
} from './Lines';
import PhotoCard from "./PhotoCard";
import {Content, Form, Input, Item, Label} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Row extends Component {

    componentWillMount() {
        this.renderBackface = this.renderBackface.bind(this);
        this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
    }

    renderBlankFace() {
        return (
            <View
                style={{
                    backgroundColor: '#D6EFFF',
                    flex: 1,
                }}
            />
        );
    }

    renderBackface() {
        const onPress = this.props.onPress;
        return (
            <View style={{ flex: 1 }}>

                <FoldView
                    renderFrontface={this.renderBlankFace}
                    renderBackface={this.renderInnerBackFace}
                >
                    <AdditionalInfoCard onPress={onPress} />
                </FoldView>

            </View>
        );
    }

    renderInnerBackFace() {
        const onPress = this.props.onPress;
        return (
            <View>
                <ScrollView horizontal={true}>
                    <View style={{backgroundColor:'white',width:'100%',flex:1,flexDirection:'row',borderWidth:5,bordercolor:'grey'}}>
                        <View style={{flex:1,flexDirection:'column',marginTop:15,padding:15}}>


                           <TouchableOpacity onPress={this.flip} style={{marginBottom: 15,}}>
                               <Icon name="call" size={40} color="green" />
                               <Text>Call</Text>
                           </TouchableOpacity>
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
        );
    }

    render() {
        const onPress = this.props.onPress;

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                }}
            >

                <View style={{ flex: 1 }} >

                    <View
                        style={{
                            flex: 1,
                            paddingBottom: 10,
                            padding: 16,
                        }}
                    >

                        <ThinGrayLine width={120} />

                        <View
                            style={{
                                marginTop: 10,
                                flexDirection: 'row',
                            }}
                        >

                            <TouchableHighlight
                                onPress={onPress}
                            >
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: 10,
                                        backgroundColor: '#BDC2C9',
                                    }}
                                />
                            </TouchableHighlight>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                }}
                            >
                                <ThickDarkGrayLine width={200} />
                                <ThinGrayLine width={120} />
                            </View>

                        </View>

                    </View>

                    <View style={{ flex: 1 }}>

                        <FoldView
                            renderFrontface={this.renderBlankFace}
                            renderBackface={this.renderInnerBackFace}
                        >
                            <ProfileDetailCard onPress={onPress} />

                        </FoldView>

                    </View>

                </View>

            </View>
        );
    }
}