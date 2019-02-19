import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'


let enhancer = undefined;

if(process.env.NODE_ENV === 'development') {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  enhancer = compose(
    applyMiddleware(ReduxThunk),
    devTools
  )
} else {
  enhancer = compose(applyMiddleware(ReduxThunk))
}

const store = createStore(reducer, enhancer)

export default store