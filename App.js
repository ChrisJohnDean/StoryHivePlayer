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
  FlatList,
  TouchableHighlight,
  Image
} from 'react-native';



class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    return (
      <TouchableHighlight 
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image/>
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{this.props.item.name}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

}

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

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.films}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    
  },
  textContainer: {
    flex: 1
  },
  itemName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  }
});
