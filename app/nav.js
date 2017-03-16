import React, {Component} from 'react';
import {Navigator, TouchableHighlight, Text} from 'react-native';
import Screen1 from './screen1';
import Screen2 from './screen2';

export default class Navi extends Component {

    renderScene(route, navigator) {
        switch (route.id) {
            case 'Scene1':
                return (<Screen1 navigator={{navigator}} />)
            case 'Scene2':
                return (<Screen2 navigator={{navigator}} />)
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 'Scene1'}}
                renderScene={this.renderScene}
            />
        );
    };
}