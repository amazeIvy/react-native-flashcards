import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import QuizDetail from './QuizDetail'
import commonStyles from '../utils/styles'
import { blue, purple, orange, white } from '../utils/colors'

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
    const { questions } = deck
    return (
      <View>
        <View style={styles.indexContainer}>
          <Text style={{color: purple}}>{`${cardIndex + 1} / ${questions.length}`}</Text>
        </View>
        {isQuestionSide
          ? <QuizDetail content={questions[cardIndex].question} link={'ANSWER'} handleClickLink={this.handleClickLink} />
          : <QuizDetail content={questions[cardIndex].answer} link={'Question'} handleClickLink={this.handleClickLink} />
        }
        <View style={[commonStyles.container, {marginTop: 50}]}>
          <TouchableOpacity style={[styles.btn, styles.btnCorrect]} onPress={this.handleClickCorrect}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnInCorrect]} onPress={this.handleClickInCorrect}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  indexContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  btn: {
    borderRadius: 3,
    height: 40,
    width: 120,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnCorrect: {
    backgroundColor: blue,
  },
  btnInCorrect: {
    backgroundColor: orange,
  },
  btnText: {
    color: white,
    fontWeight: '500',
  }
})

function mapStateToProps ({ decks }, props) {
  const { deckKey } = props.navigation.state.params
  return {
    deck: decks[deckKey]
  }
}

export default connect(mapStateToProps)(Quiz)