
'use strict';
import React, { Component } from 'react';
import {
    Platform, 
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import FilmPlayer from './FilmPlayer';

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
    
  }

  render() {
    const item = this.props.item;
    console.log(item.image_url)
    console.log(item.title)
    return (
      <TouchableHighlight 
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source ={{uri: this.props.item.image_url}}/>
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{this.props.item.title}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

}

// type Props = {};
let colors = ['#e43446', '#4fb84f', '#e23d96', '#c2c500', '#72c2a7', '#f37021'];
export default class FilmList extends Component<{}> {
    constructor(props) {
      super(props);
      console.log("hello");
      console.log(props.filmTypeUrl);
      this.state = { 
        films: []
      }

      //this._onPressItem = this._onPressItem.bind(this)
    }
  
    async componentDidMount() {
        console.log(this.props.filmTypeUrl);
        try {
            // const response =  await fetch('https://www.storyhive.com/api/grid-data/portal-community-videos');
            const response =  await fetch(this.props.filmTypeUrl);
            const responseJson = await response.json();
            this.setState({films: responseJson.results});
        }   catch (error) {
                console.error(error);
            }
    }
    
    _keyExtractor = (item, index) => index.toString();
    
    _renderItem = ({item, index}) => (
        
        <View style={{backgroundColor: colors[index % colors.length]}}>
            <ListItem
                item={item}
                data = {item}
                index={index}
                onPressItem={this._onPressItem}
            />
        </View>
    );
  
    _onPressItem = (index, item) => {
        console.log("Pressed row: "+index);
        console.log(item);
        this.props.navigator.push({
            title: 'Hive Player',
            component: FilmPlayer,
            passProps: {filmData: item}
        });
    };
  
    render() {
      console.log(this.state.films.length > 0 ? "yes" : "no");
      return (
        
        <View style={styles.container}>
        {
          this.state.films.length > 0 ?
          <FlatList
            data={this.state.films}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
          :
          <View style={styles.textContainer}>
            <ActivityIndicator size="large" color="#0000ff"/>
          </View>
        }
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
      marginTop: 67,
      backgroundColor: '#F5FCFF',
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 10,
      flex: 1,
      borderColor: '#000',
      borderTopWidth: 2,
      borderBottomWidth: 2
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    itemName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    thumb: {
      width: 80,
      height: 80,
      borderRadius: 80/2,
      marginRight: 10
    }
  });
  
