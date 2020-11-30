import {createSelector} from 'reselect'
import { Record } from 'immutable'

/**
 * Constants
 * */

export const moduleName = 'example'
const prefix = moduleName

export const CHANGE_INCREASE_COUNTER = `${prefix}/CHANGE_INCREASE_COUNTER`
export const CHANGE_DECREASE_COUNTER = `${prefix}/CHANGE_DECREASE_COUNTER`

/**
 * Reducer
 * */

export const ReducerRecord = Record({
  counter: 0,
})

export default function reducer(state = new ReducerRecord(), action) { // new !
  const {type, payload} = action

  switch (type) {
    case CHANGE_INCREASE_COUNTER:
      return state.set('counter', payload)
    case CHANGE_DECREASE_COUNTER:
      return state.set('counter', payload)    
      // return Object.assign({}, state, {
      //   counter: payload
      // })    
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const counterSelector = createSelector(stateSelector, state => state.counter) // второй арг это фуу кот получает данные

/**
 * Redux thunks (action creators)
 * */

// function action() {
//   return () => {
//     return ...
//   }
// }


export const changeIncreaceCounter = () => (dispatch, getState) => {
  console.log(getState())
  
  const { counter } = getState().example  
  
  setTimeout(() => {
    dispatch({
      type: CHANGE_INCREASE_COUNTER,
      payload: counter + 1
    })  
  }, 2000)  
}

export const changeDecreaceCounter = (iterator) => ({
  type: CHANGE_DECREASE_COUNTER,
  payload: iterator - 1
})


// export const initCurrencyList = () => (dispatch, getState) => {
//   const url = `https://api.exchangeratesapi.io/latest`
//   axios.get(url).then(({data}) => {
//     const listCurrencies = Object.keys(data.rates)

//     dispatch({
//       type: INIT_CURRENCY_TITLE_LIST,
//       payload: listCurrencies
//     })
//   })
// }