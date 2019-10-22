import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import {Navigation} from 'react-native-navigation'

export default class Root extends Component {
  static options() {
    return {
        topBar: {
            title: {
                text: "Root",
            }
        }
    };
  }
  goToWelcome() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Welcome'
      }
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: 'pink'}}>
        <Button
            onPress={() => this.goToWelcome()}
            title="Navigate To Welcome"
          />
      </View>
    );
  }
}

