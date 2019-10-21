import React, {
    Component,
} from 'react';

import {
    Button,
    LayoutAnimation, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity,
    UIManager,
    View,
} from 'react-native';

import FoldView from 'react-native-foldview';

import InfoCard from './components/InfoCard';
import PhotoCard from './components/PhotoCard';
import ProfileCard from './components/ProfileCard';
import {Content, Form, Input, Item, Label,Textarea} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import {ThickGrayLine, ThinRedLine} from "./components/Lines";


// Enable LayoutAnimation on Android
if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ROW_HEIGHT = 180;

const Spacer = ({ height }) => (
    <View
        pointerEvents="none"
        style={{
            height,
        }}
    />
);

export default class Row extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            height: ROW_HEIGHT,
        };
    }

    componentWillMount() {
        this.flip = this.flip.bind(this);
        this.handleAnimationStart = this.handleAnimationStart.bind(this);
        this.renderFrontface = this.renderFrontface.bind(this);
        this.renderBackface = this.renderBackface.bind(this);
    }

    flip() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    handleAnimationStart(duration, height) {
        const isExpanding = this.state.expanded;

        const animationConfig = {
            duration,
            update: {
                type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.height,
            },
        };

        LayoutAnimation.configureNext(animationConfig);

        this.setState({
            height,
        });
    }

    renderFrontface() {
        return (
            <InfoCard onPress={this.flip} />
        );
    }

    renderBackface() {
        return (
            <View style={{borderRadius:15}}>
                <ScrollView horizontal={true}>






                    <View style={{backgroundColor:'white',width:'100%',flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,flexDirection:'column',padding:15,backgroundColor:'#33373B'}}>
<View >
                            <TouchableOpacity onPress={this.flip} style={{backgroundColor:'lightgreen',width:'100%',marginBottom: 10,borderWidth:2,borderColor:'#33373B',borderRadius:15}}>
                               <View style={{padding:4}}>
                                <Icon name="call" size={27} color="white" />
                               </View>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.flip} style={{backgroundColor:'#2C77E0',marginBottom: 10,width:'100%',borderWidth:2,borderColor:'#33373B',borderRadius:15}}>
                                <View style={{flexDirection:'row',padding:4}}>
                                    <Icon name="save" size={27} color="white" />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.flip} style={{backgroundColor:'#E06367',marginBottom: 10,width:'100%',borderWidth:2,borderColor:'#33373B',borderRadius:15}}>
                                <View style={{flexDirection:'row',padding:4}}>
                                    <Icon name="close" size={30} color="white" />
                                </View>

                            </TouchableOpacity>
    <View  style={{backgroundColor:'red',marginBottom: 10,width:0,borderWidth:2,borderColor:'#33373B',borderRadius:15}}></View>

</View>

                        </View>






                        <View style={{flex:1,flexDirection:'column',marginLeft:15,textAlign: 'right'}}>

                            <Content >
                                <Form >
                                    <Item floatingLabel style={{width:215,fontSize:20,padding:4}}>
                                        <Label><Icon name="perm-contact-calendar" size={20} color="#33373B" />Client name</Label>
                                        <Input  />
                                    </Item>
                                    <Item floatingLabel style={{width:215,padding:4,fontSize:20,}} >
                                        <Icon name="location-on" size={30} color="red" />
                                        <Label> <Icon name="location-on" size={20} color="#33373B" />Location</Label>
                                        <Input />
                                    </Item>
                                </Form>
                            </Content>
                        </View>

                        <View style={{flex:1,flexDirection:'column',width:370,marginTop:'1%',marginLeft:65,}}>

                                <Content padder>
                                    <Form>
                                        <Textarea rowSpan={5} bordered placeholder="Response" />
                                    </Form>
                                </Content>
                                                  </View>


                    </View>



                </ScrollView>

            </View>
        );
    }

    render() {
        const { height } = this.state;
        const { zIndex } = this.props;

        const spacerHeight = height - ROW_HEIGHT;

        return (
            <View
                style={{

                    flex: 1,
                    zIndex,

                }}
            >
                <View
                    style={{
                        height: ROW_HEIGHT,
                        margin: 10,

                        position:'relative'
                    }}
                >
                    <FoldView
                        expanded={this.state.expanded}
                        onAnimationStart={this.handleAnimationStart}
                        perspective={1000}
                        renderBackface={this.renderBackface}
                        renderFrontface={this.renderFrontface}
                    >
                        <PhotoCard onPress={this.flip} />
                    </FoldView>

                </View>

                <Spacer height={spacerHeight} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    leftPane: {
        flex: 1,
        backgroundColor: '#33373B',
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    rightPane: {
        flex: 2,
        padding: 16,
        backgroundColor: '#fff',
    },
});