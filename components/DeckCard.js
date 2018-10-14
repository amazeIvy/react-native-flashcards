import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { purple, white, gray } from '../utils/colors'
import commonStyles from '../utils/styles'

const DeckCard = ({ title, count }) => {
  return (
    <View style={[commonStyles.container, styles.deckContainer]}>
      <Text style={styles.title}>{title}</Text>
      <Text>{count} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deckContainer: {
    width: 250,
    margin: 20,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: gray,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: purple
  }
})

export default DeckCard