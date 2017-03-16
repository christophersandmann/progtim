import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';

export default class Screen1 extends Component {
    navigate() {
        this.props.navigator.push({id: 'scene2'});
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.navigate()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Progtim</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Text>Screen1</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    };
}