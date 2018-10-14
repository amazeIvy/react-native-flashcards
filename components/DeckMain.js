import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'
import commonStyles from '../utils/styles'


class DeckMain extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // navigation.geParam('paramName', 'defaultValue')
      title: navigation.getParam('title', 'Deck'),
    }
  }

  render() {
    const { title, questions, navigation } = this.props
    return (
      <View style={[commonStyles.container, { flex: 0.7 }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardNumber}>{questions.length} cards</Text>
        <TouchableOpacity style={styles.btnLight} onPress={() => navigation.navigate(
          'AddCard',
          {deckKey: title}
        )}>
          <Text style={styles.btnTextDark}>Add Card</Text>
        </TouchableOpacity>
        {questions.length > 0
          ? (
              <TouchableOpacity style={styles.btnDark} onPress={() => navigation.navigate(
                'Quiz',
                {deckKey: title}
              )}>
                <Text style={styles.btnTextLight}>Start Quiz</Text>
              </TouchableOpacity>
          )
          : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: purple,
  },
  cardNumber: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: purple,
    borderRadius: 5,
    height: 40,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnLight: {
    backgroundColor: white,
    borderRadius: 5,
    height: 40,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnTextLight: {
    color: white,
    fontWeight: '500',
  },
  btnTextDark: {
    color: purple,
    fontWeight: '500',
  },
})

function mapStateToProps ({ decks }, { navigation }) {
  const { title } = navigation.state.params
  return {
    title,
    questions: decks[title].questions
  }
}

export default connect(mapStateToProps)(DeckMain)
