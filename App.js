import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Decks from './components/Decks'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Decks />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
