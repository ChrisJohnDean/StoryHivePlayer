'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    Picker,
    StyleSheet,
    NavigatorIOS
} from 'react-native';
import Button from 'react-native-button';
import FilmList from './FilmList';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          url: "https://www.storyhive.com/api/grid-data/portal-community-videos"
        }
      }


      _onPress = () => {
        console.log(this.state.url)
        this.props.navigator.push({
            title: 'Story Hive',
            component: FilmList,
            passProps: {filmTypeUrl: this.state.url}
        });
      };

      render() {
          return (
                <View style={styles.container}>
                    <View style={styles.view}></View>
                    <Picker 
                    selectedValue={this.state.url} 
                    onValueChange={(itemValue, itemIndex) => this.setState({url: itemValue})} style={styles.view}>
                        <Picker.Item label="Community Videos" value="https://www.storyhive.com/api/grid-data/portal-community-videos" />
                        <Picker.Item label="Music Videos" value="https://www.storyhive.com/api/grid-data/edition-projects/phase/10/cycleType/music/cycleId/10" />
                        <Picker.Item label="Web Series" value="https://www.storyhive.com/api/grid-data/edition-projects/phase/10/cycleType/web/cycleId/12" />
                        <Picker.Item label="Digital Shorts" value="https://www.storyhive.com/api/grid-data/edition-projects/phase/10/cycleType/short/cycleId/8" />
                        <Picker.Item label="Animation" value="https://www.storyhive.com/api/grid-data/edition-projects/phase/10/cycleType/short/cycleId/9" />
                    </Picker>
                    <View style={styles.buttonView}>
                        <Button
                            containerStyle={{ 
                                padding: 10,
                                marginBottom: 30, 
                                height: 45,
                                width: 300, 
                                overflow: 'hidden', 
                                borderRadius: 4, 
                                backgroundColor: '#013220',
                            }}
                            onPress={this._onPress}
                            style={{ fontSize: 20, color: 'white' }}
                        >
                            Watch Now!
                        </Button>
                    </View>
                </View>
          )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c2f2d0'
    },
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})