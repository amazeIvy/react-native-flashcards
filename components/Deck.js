import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { purple, white, orange } from '../utils/colors'

const Deck = () => {
  return (
    <View style={styles.deckContainer}>
      <Text style={styles.title}>Front Ends</Text>
      <Text>3 cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deckContainer: {
    width: 250,
    margin: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: purple
  }
})

export default Deck