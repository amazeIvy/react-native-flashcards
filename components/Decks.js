import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'
import { handleInitialData, clearCustomDecks } from '../actions'
import { connect } from 'react-redux'
import { clearDecks } from '../utils/api'
import commonStyles from '../utils/styles'
import { blue } from '../utils/colors'



class Decks extends Component {
  componentDidMount () {
    const { decks, dispatch } = this.props
    dispatch(handleInitialData())
  }

  clear = () => {
    this.props.dispatch(clearCustomDecks())
    clearDecks()
    this.props.dispatch(handleInitialData())
  }

  render () {

    const { decks, isInitialData, navigation } = this.props

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
        {!isInitialData
          ? (
              <TouchableOpacity onPress={this.clear}>
                <Text style={styles.clearTxt}>RESET</Text>
              </TouchableOpacity>
            )
          : null
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  clearTxt: {
    color: blue,
    fontSize: 12,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: '300',
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks,
    isInitialData: decks && Object.keys(decks).length === 2,
  }
}

export default connect(mapStateToProps)(Decks)
