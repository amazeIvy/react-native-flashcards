import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import { clearDecks } from '../utils/api' /* only for test */

import PropTypes from 'prop-types'


class Decks extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render () {

    const { decks, navigation } = this.props

    return (
      <View style={styles.container}>
        {decks && Object.keys(decks).map((key) => (
          <TouchableOpacity key={key} onPress={() => navigation.navigate(
            'DeckMain',
            { title: key }
          )}>
            <DeckCard
              title={decks[key].title}
              count={decks[key].questions ? decks[key].questions.length : 0}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={clearDecks}>
          <Text>Clear</Text>{/* only for test */}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function mapStateToProps ({ decks }) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Decks)
