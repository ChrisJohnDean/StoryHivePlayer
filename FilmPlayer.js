'use strict'

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import YouTube from 'react-native-youtube';

export default class FilmPlayer extends Component<{}> {

    render() {
        console.log(this.props.filmData);
        console.log(this.props.filmData.video_link);
        return (
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.title}>{this.props.filmData.title}</Text>
                </View>
                <YouTube
                    videoId={this.props.filmData.video_link}   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={true}             // control whether the video should loop when ended
                    apiKey={'AIzaSyBRPkRzflSheuVv2mkNm98rYyffqMFbAts'}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
                <View style={styles.textBox}>
                    <Text style={styles.quote}>"{this.props.filmData.elevator_pitch}"</Text>
                    <Text style={styles.projectLead}>By: {this.props.filmData.project_lead}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#89cff0'
    },
    title: {
        // textAlign: 'center',
        // justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 30,
        color: '#23415a',
        textAlign: 'center'
    },
    projectLead: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 18,
        color: '#23415a'
    },
    quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,
        color: '#FFF',
        marginBottom: -25
    },
    textBox: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})