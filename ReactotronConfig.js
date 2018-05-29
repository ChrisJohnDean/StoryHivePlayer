import Reactotron from 'reactotron-react-native'
import { mst } from 'reactotron-mst'
import FilmStore from './FilmStore'

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
  .use(mst())

const myTree = FilmStore

Reactotron.trackMstNode(myTree)
