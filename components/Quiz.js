import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import QuizDetail from './QuizDetail'
import commonStyles from '../utils/styles'
import { blue, purple, orange, white } from '../utils/colors'

class Quiz extends Component {
  state = {
    isQuestionSide: true,
    isLastCard: false,
    cardIndex: 0,
    score: 0,
  }

  handleClickLink = () => {
    this.setState((preState) => ({
      isQuestionSide: !preState.isQuestionSide
    }))
  }

  handleSelectClick = (isCorrect) => {
    // Check if it's the last card
    const { cardIndex } = this.state
    const { questions } = this.props.deck
    if ( cardIndex + 1 === questions.length ) {
      this.setState((preState) => ({
        isLastCard: true,
        score: isCorrect ? preState.score + 1 : preState.score,
      }))
    } else {
      this.setState((preState) => ({
        isQuestionSide: true,
        cardIndex: preState.cardIndex + 1,
        score: isCorrect ? preState.score + 1 : preState.score,
      }))
    }
  }

  handleRestart = () => {
    this.setState({
      isQuestionSide: true,
      isLastCard: false,
      cardIndex: 0,
      score: 0,
    })
  }

  render () {
    const { isQuestionSide, isLastCard, cardIndex, score } = this.state
    const { deck, navigation } = this.props
    const { questions } = deck
    return (
      <View>
        {!isLastCard
          ? (
              <View>
                <View style={styles.indexContainer}>
                  <Text style={{color: purple}}>{`${cardIndex + 1} / ${questions.length}`}</Text>
                </View>
                {isQuestionSide
                  ? <QuizDetail content={questions[cardIndex].question} link={'Answer'} handleClickLink={this.handleClickLink} />
                  : <QuizDetail content={questions[cardIndex].answer} link={'Question'} handleClickLink={this.handleClickLink} />
                }
                <View style={[commonStyles.container, {marginTop: 50}]}>
                  <TouchableOpacity style={[styles.btn, styles.btnCorrect]} onPress={() => this.handleSelectClick(true)}>
                    <Text style={styles.btnText}>Correct</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.btnInCorrect]} onPress={() => this.handleSelectClick(false)}>
                    <Text style={styles.btnText}>Incorrect</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          : (
              <View style={commonStyles.container}>
                <Text style={styles.score}>{(score / questions.length * 100).toFixed(0)} %</Text>
                <Text style={styles.underScoreTxt}>Correct!</Text>
                <TouchableOpacity style={[styles.btn, styles.btnCorrect]} onPress={this.handleRestart}>
                  <Text style={styles.btnText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnBack]} onPress={() => navigation.navigate('DeckMain') }>
                  <Text style={styles.btnBackText}>Back to Deck</Text>
                </TouchableOpacity>
              </View>
            )
        }
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
  btnBack: {
    backgroundColor: white,
  },
  btnText: {
    color: white,
    fontWeight: '500',
  },
  btnBackText: {
    color: purple,
    fontWeight: '500',
  },
  score: {
    marginTop: 60,
    fontSize: 60,
    fontWeight:'bold',
    marginBottom: 30,
    color: purple
  },
  underScoreTxt: {
    fontSize: 20,
    color: blue,
    marginBottom: 40,
  }
})

function mapStateToProps ({ decks }, props) {
  const { deckKey } = props.navigation.state.params
  return {
    deck: decks[deckKey]
  }
}

export default connect(mapStateToProps)(Quiz)