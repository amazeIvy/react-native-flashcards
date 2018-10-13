import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { purple, white, gray } from '../utils/colors'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }
  handleSubmit = () => {
    const { dispatch, navigation } = this.props
    const { question, answer } = this.state
    const { deckKey } = navigation.state.params
    const card = {
      question,
      answer
    }

    // update redux
    dispatch(addCard(card, deckKey))

    // save to AsyncStorage

    // navigate to DeckMain
    navigation.navigate('DeckMain')
  }
  render () {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.label}>Question</Text>
        </View>
        <View style={{ flexDirection: 'row', height: 40}}>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={(input) => this.setState({ question: input})}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.label}>Answer</Text>
        </View>
        <View style={{ flexDirection: 'row', height: 40}}>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={(input) => this.setState({ answer: input})}
          />
        </View>
        {question === '' || answer === ''
          ? (
            <Text style={styles.unfinishMsg}>Fill both Question and Answer please</Text>
          )
          : (
            <TouchableOpacity style={[styles.btn, ]} onPress={this.handleSubmit}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          )}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 0.8,
    fontSize: 20,
    fontWeight: '500',
    color: purple,
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  input: {
    flex: 0.8,
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: gray,
    paddingLeft: 5,
  },
  btn: {
    backgroundColor: purple,
    borderRadius: 5,
    height: 40,
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  unfinishMsg: {
    marginTop: 30,
  },
  btnText: {
    color: white,
    fontWeight: '500',
  }
})

function mapStateToProps ({ decks }, props) {
  const { deckKey } = props.navigation.state.params
  return {
    decks,
    title: deckKey
  }
}

export default connect(mapStateToProps)(AddCard)