import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Deck from './Deck'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import { clearDecks } from '../utils/api' /* only for test */

import PropTypes from 'prop-types'


class Decks extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render () {

    const { decks } = this.props

    return (
      <View style={styles.container}>
        {decks && Object.keys(decks).map((key) => (
          <Deck
            key={decks[key].title}
            title={decks[key].title}
            count={decks[key].questions ? decks[key].questions.length : 0}
          />
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
