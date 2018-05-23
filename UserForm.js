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
  }

  render () {
    return (
        <Container style={styles.cont}>
            <Text>User Form</Text>
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
