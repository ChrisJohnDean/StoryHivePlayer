import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reduceFilms from './redux/reducers/reduceFilms'
import App from './App'

const store = createStore(reduceFilms)

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

// AppRegistry.registerComponent('StoryHivePlayer', () => App);
AppRegistry.registerComponent('StoryHivePlayer', () => RNRedux)

//export store
