import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'

class Decks extends Component {
  render () {
    const { decks } = this.props
    return (
      <View>
        {decks && Object.keys(decks).map((key) => (
          <Deck
            key={decks[key].title}
            title={decks[key].title}
            count={decks[key].questions ? decks[key].questions.length : 0}
          />
        ))}
      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)
