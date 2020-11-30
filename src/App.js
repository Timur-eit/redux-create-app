import React, { useEffect } from "react"
import './App.css';
import { connect } from 'react-redux'
import FormExample from './components/FormExample'

import {
  currencyListSelector,
  initCurrencyList
} from './models/currency'

import {
  counterSelector,
  changeIncreaceCounter,
  changeDecreaceCounter
} from './models/example'


function App({initCurrencyList, currencyList, counter, changeIncreaceCounter, changeDecreaceCounter }) {

  useEffect(() => {
    initCurrencyList()
  }, [initCurrencyList])

  const handleSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* {currencyList && currencyList.map((item, key) => { */}
         {/* return (<div key={key}>{item}</div>) */}
        {/* })} */}
        <FormExample onSubmit={handleSubmit}/>
        {/* <div>
          <button onClick={() => changeDecreaceCounter(counter)}>-</button>
          {counter}
          <button onClick={() => changeIncreaceCounter(counter)}>+</button>
        </div> */}
        
      </header>
    </div>
  );
}

export default connect(state => ({
  currencyList: currencyListSelector(state),
  counter: counterSelector(state)
}), {
  initCurrencyList,
  changeIncreaceCounter,
  changeDecreaceCounter
})(App)

