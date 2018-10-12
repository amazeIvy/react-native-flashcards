import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'IvyFlashcards:decks'

/**
* Return all of the decks along with their titles, questions, and answers
*
* @function getDecks
*/
export function getDecks () {
  // return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  const mockDecks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  return mockDecks
}

// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.