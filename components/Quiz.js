import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import QuizDetail from './QuizDetail'
import commonStyles from '../utils/styles'

class Quiz extends Component {
  state = {
    isQuestionSide: true,
    cardIndex: 0,
    score: 0,
  }

  handleClickLink = () => {
    this.setState((preState) => ({
      isQuestionSide: !preState.isQuestionSide
    }))
  }

  render () {
    const { isQuestionSide, cardIndex } = this.state
    const { deck } = this.props
    return (
      <View style={commonStyles.container}>
      {isQuestionSide
        ? <QuizDetail content={deck.questions[cardIndex].question} link={'ANSWER'} handleClickLink={this.handleClickLink} />
        : <QuizDetail content={deck.questions[cardIndex].answer} link={'Question'} handleClickLink={this.handleClickLink} />
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

function mapStateToProps ({ decks }, props) {
  const { deckKey } = props.navigation.state.params
  return {
    deck: decks[deckKey]
  }
}

export default connect(mapStateToProps)(Quiz)