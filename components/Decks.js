import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Deck from './Deck'

export default class Decks extends Component {
  render () {
    return (
      <View>
        <Deck />
        <Deck />
        <Deck />
      </View>
    )
  }
}
