import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import commonStyles from '../utils/styles'
import { blue, orange} from '../utils/colors'

const QuizDetail = ({ content, link, handleClickLink }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={styles.content}>{content}</Text>
      <TouchableOpacity onPress={handleClickLink}>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: 30,
    maxWidth: 300,
    marginTop: 30,
    marginBottom: 30,
    color: blue,
  },
  link: {
    fontSize: 20,
    color: orange,
    fontWeight: '500',
    textDecorationLine: 'underline',
  }
})

export default QuizDetail