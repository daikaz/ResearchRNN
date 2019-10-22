/**
 * @format
 */

import Welcome from './src/screens/Welcome';
import Hello from './src/screens/Hello';
import Root from './src/screens/Root';

import {Navigation} from 'react-native-navigation'

Navigation.registerComponent('Welcome', () => Welcome)
Navigation.registerComponent('Hello', () => Hello)
Navigation.registerComponent('Root', () => Root)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'AppStack',
                children: [{
                    component: {
                        name: 'Root',
                    }
                }],
                options: {
                    topBar: {
                        title: {
                            text: 'Root'
                        },
                        visible: true
                    }
                }
            }
        }
    });
});

