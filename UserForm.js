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
  ScrollView,
  Text
} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'

export default class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''

    }
  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) => this.setState({username: text})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({password: text})}/>
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 50,
    backgroundColor: '#c2f2d0'
  }
})
