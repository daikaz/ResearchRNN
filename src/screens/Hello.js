import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Hello extends Component {
    static options() {
        return {
            topBar: {
                title: {
                    text: "Hello",
                },
                background: { color: 'orange' },
                elevation: 0,
            }
        };
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: 'green'}}>
        <Text>Hello!</Text>
      </View>
    );
  }
}