import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Decks from './Decks'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render () {
    return (
      <View style={styles.container}>
        <Decks />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default connect()(Home)