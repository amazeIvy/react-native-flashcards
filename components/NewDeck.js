import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { purple, white, gray, red } from '../utils/colors'
import commonStyles from '../utils/styles'


class NewDeck extends Component {
  state = {
    input: '',
    shouldShowValidation: false,
  }
  submitTitle = () => {
    const { input } = this.state
    const { decks } = this.props
    const deck = {
      title: input,
      questions: [],
    }

    if (input !== '') {
      // Update Redux
      this.props.dispatch(addDeck(deck))

      // Save to AsyncStorage
      saveDeckTitle(input)

      this.setState({
        input: ''
      })

      // Go DECKS view
      this.props.navigation.navigate('Decks')
    } else {
      this.setState({
        shouldShowValidation: true
      })
    }
  }
  handleInputChange = (input) => {
    this.setState({
      input,
      shouldShowValidation: false,
    })
  }
  render () {
    const { input, shouldShowValidation } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={[commonStyles.container, { flex: 1 }]}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <View style={{ flexDirection: 'row', height: 40}}>
          <TextInput
            value={input}
            style={styles.input}
            placeholder="Type title here"
            onChangeText={this.handleInputChange}
          />
        </View>
        {shouldShowValidation
          ? <Text style={styles.validationText}>Title can't be empty!</Text>
          : null
        }
        <TouchableOpacity style={styles.btn} onPress={this.submitTitle}>
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
    padding: 30,
    color: purple,
  },
  input: {
    flex: 0.8,
    flexDirection: 'row',
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
  btnText: {
    color: white,
    fontWeight: '500',
  },
  validationText: {
    color: red
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(NewDeck)
