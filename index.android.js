import React, {Component} from 'react';
import {Navigator, AppRegistry, BackAndroid} from 'react-native';
import Screen1 from './app/screen1';
import Screen2 from './app/screen2';

export default class App extends Component {

    renderScene(route, navigator) {
        switch (route.id) {
            case 'scene1':
                return (<Screen1 navigator={navigator}/>)
            case 'scene2':
                return (<Screen2 navigator={navigator}/>)
        }
    }

    render() {
        return (<Navigator
                initialRoute={{id: 'scene1'}}
                renderScene={this.renderScene}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
                ref={(nav) => { _navigator = nav; }}
            />
        );
    }


/*  TODO: handle android back button:
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        //Forgetting to remove the listener will cause pop executes multiple times
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack() {
        console.log('handleback!');
        if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
            this.navigator.pop();
            return true; //avoid closing the app
        }

        return false; //close the app
    }*/
}

AppRegistry.registerComponent('progtim', () => App);
