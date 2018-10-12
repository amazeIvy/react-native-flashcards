import React, { Component } from 'react'
import { View } from 'react-native'
import Decks from './Decks'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render () {
    return (
      <View>
        <Decks />
      </View>
    )
  }
}

export default connect()(Home)