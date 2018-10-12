import React from 'react'
import { View, Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import Home from './components/Home'
import NewDeck from './components/NewDeck'
import { purple, white } from './utils/colors'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'

const store = createStore(reducer, middleware)

const Tabs = createBottomTabNavigator({
  Deck: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={20} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={20} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: purple,
    style: {
      height: 56,
      backgroundColor: white,
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}
