'use strict'
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      films: []
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow () {
    // alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    // alert('Keyboard Hidden');
  }

  async _fetchSearchResult () {
    console.log(this.state.text)
    console.log('33')
    try {
      const storyHiveUrl = 'https://www.storyhive.com/api/index/search?query='
      const searchUrl = this.state.text
      const replacedUrl = searchUrl.split(' ').join('+')
      var result = storyHiveUrl.concat(replacedUrl)
      console.log(result)
      const response = await fetch(result)
      const responseJson = await response.json()
      this.setState({films: responseJson.results})
      console.log(this.state)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    console.log('rendered')
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container style={styles.cont}>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                onChangeText={(text) => this.setState({text})}
              />
              <Icon name="ios-people" />
            </Item>
            <Button transparent onPress={() => this._fetchSearchResult()}>
              <Text>Search</Text>
            </Button>
          </Header>
          <FlatList
            data={this.state.films}
            renderItem={({item}) => <View style={styles.rowContainer}><Text>{item.name}</Text></View>}
          />
        </Container>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#c2f2d0'
  },
  rowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
})
