'use strict'
import React, {Component} from 'react'
import {
  Platform, 
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';
import Search from './Search';
import CardSwiper from './CardSwiper';
import UserForm from './UserForm';

export default class FooterTabBar extends Component {
  constructor (props) {
    super()
    this.state = {index: 0}
  }

  render() {
    let AppComponent = null;

    if (this.state.index == 0) {
      AppComponent = Search
    } else if (this.state.index == 1) {
      AppComponent = UserForm
    } else {
      AppComponent = CardSwiper
    }

    return (
      <Container>
        <Content>
          <AppComponent/>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.setState({index: 0})} active={this.state.index===0}>
              <Icon name="search"/>
              <Text>Search</Text>
            </Button>
            <Button vertical onPress={() => this.setState({index: 1})} active={this.state.index===1}>
              <Icon name="text" />
              <Text>Form</Text>
            </Button>
            <Button vertical onPress={() => this.setState({index: 2})} active={this.state.index===2}>
              <Icon active name="navigate" />
              <Text>Swipe</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
