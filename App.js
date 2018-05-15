/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      films : 
        [
          {
            name: "Harold and Kumar"
          }, 
          {
            name: "Get him to the greek"
          }, 
          {
            name: "The Avengers"
          }, 
          {
            name: "Transformers"
          }
        ]
    }
  }


  // <FlatList
  // data={[{key: 'a'}, {key: 'b'}]}
  // renderItem={({item}) => <Text>{item.key}</Text>}
  // />

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.films}
          renderItem={({item}) => <Text>{item.name}</Text>}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
