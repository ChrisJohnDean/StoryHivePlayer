'use strict'
import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native'
import { Container, Header, View, Button, Icon, Fab, Content, Toast, Text, Root } from 'native-base'

export default class CardSwiper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'true',
      showToast: false
    }
  }

  componentWillUnmount() {
    Toast.toastInstance = null;
  }

  render () {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button onPress={() => Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay'
          })}>
            <Text>Toast</Text>
          </Button>
        </Content>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 50 }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F', marginBottom: 50 }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998', marginBottom: 50 }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144', marginBottom: 50 }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
//   cont: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//     marginTop: 50,
//     backgroundColor: '#c2f2d0'
//   }
})
