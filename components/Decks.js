import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'
import DeckCard from './DeckCard'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import { clearDecks } from '../utils/api' /* only for test */
import commonStyles from '../utils/styles'


class Decks extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render () {

    const { decks, navigation } = this.props

    return (
      <ScrollView contentContainerStyle={commonStyles.container}>
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
      </ScrollView>
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Decks)
