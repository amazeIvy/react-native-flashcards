import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'IvyFlashcards:decks'

/**
* Return all of the decks along with their titles, questions, and answers
*
* @function getDecks
*/
export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => formatDecks(results))
}

function setDummyData () {
  const decks = {
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

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))

  return decks
}

function formatDecks (results) {
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}

/**
* Take in two arguments, title and card, and will add the card to the list of questions
* for the deck with the associated title.
*
* @function addCardToDeck
*/
export function addCardToDeck (card, title) {
  getDecks()
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          title,
          questions: decks[title].questions.concat([card])
        }
      }
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
    })
}

/**
* Initialize app data, clear added decks / cards.
*
* @function clearDecks
*/
export function clearDecks () {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}

/**
* Take in a single title argument and add it to the decks.
*
* @function saveDeckTitle
*/
export function saveDeckTitle (title) {
  getDecks()
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          title,
          questions: [],
        }
      }
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
    })
}
