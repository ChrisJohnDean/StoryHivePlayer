/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Home from './Home';
import FilmList from './FilmList';


type Props = {};

export default class App extends Component<{}> {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
              // title: 'Story Hive',
              // component: FilmList,
              title: 'Story Hive',
              component: Home
          }}/>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
});
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);
//     console.log("hello");
//     this.state = { 
//       films: []
//     }
//   }


//   componentDidMount() {
//     const result = fetch('https://www.storyhive.com/api/grid-data/portal-community-videos')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson.results)
//       setTimeout(() => {
//         this.setState({
//           films: responseJson.results
//         });
//       }, 2000)
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }
  
//   _keyExtractor = (item, index) => index.toString();

//   _renderItem = ({item, index}) => (
//     <ListItem
//       item={item}
//       data = {item}
//       index={index}
//       onPressItem={this._onPressItem}
//     />
//   );

//   _onPressItem = (index) => {
//     console.log("Pressed row: "+index);
//   };

//   render() {
//     console.log(this.state.films.length > 0 ? "yes" : "no");
//     return (
//       <View style={styles.container}>
//       {
//         this.state.films.length > 0 ?
//         <FlatList
//           data={this.state.films}
//           keyExtractor={this._keyExtractor}
//           renderItem={this._renderItem}
//         />
//         :
//         <ActivityIndicator size="large" color="#0000ff"/>
//         //this.state.films.length > 0 ?
//       }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   container: {
//     flex: 1,
//     marginTop: 50,
//     backgroundColor: '#F5FCFF',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#48BBEC',
//   },
//   thumb: {
//     width: 80,
//     height: 80,
//     borderRadius: 80/2,
//     marginRight: 10
//   },
//   navContainer: {
//     flex: 1,
//   }
// });
