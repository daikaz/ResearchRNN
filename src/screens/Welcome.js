import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import {Navigation} from 'react-native-navigation'

export default class Welcome extends Component {

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: "Welcome",
                },
                noBorder: true,
                visible: true,
                drawBehind: true,
                transparent: true,
                translucent: true,
                background: { color: 'transparent' },
                elevation: 0
            }
        };
    }

    constructor(props) {
        super(props)
        Navigation.events().bindComponent(this);
    }

    goToHello() {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'Hello'
          }
        })
    }

    doTransparentTopBar() {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    text: "Welcome A",
                },
                noBorder: true,
                visible: true,
                drawBehind: true,
                transparent: true,
                translucent: true,
                background: { color: 'transparent' },
                elevation: 0
            }
        })
    }

    doWhiteTopBar() {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    text: "Welcome B",
                },
                transparent: false,
                translucent: false,
                background: { color: 'white' },
                elevation: 0,
            }
        })
    }

    render() {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: 'yellow'}}>
            <Button style={{marginTop: 10}} onPress={() => this.goToHello()} title="Navigate To Hello"  />
            <Button style={{marginTop: 10}} onPress={() => this.doTransparentTopBar()} title="Transparent TopBar"  />
            <Button style={{marginTop: 10}} onPress={() => this.doWhiteTopBar()} title="White TopBar"  />
          </View>
        );
    }
}