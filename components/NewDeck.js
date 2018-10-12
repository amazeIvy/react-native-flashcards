import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { purple, white, gray } from '../utils/colors'

export default class NewDeck extends Component {
  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <View style={{ flexDirection: 'row', height: 40}}>
          <TextInput style={styles.input} placeholder="Type title here" />
        </View>
        <TouchableOpacity style={styles.btn}>
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
  }
})
