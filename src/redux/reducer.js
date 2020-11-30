import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import currencyReducer, {moduleName as currencyModule} from '../models/currency'
import exampleReducer, {moduleName as exampleModule} from '../models/example'

export default combineReducers({
  form: formReducer,
  [currencyModule]: currencyReducer,
  [exampleModule]: exampleReducer,
})