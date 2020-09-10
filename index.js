import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import Navigator from './src/Navigator'


AppRegistry.registerComponent(appName, () => Navigator)
