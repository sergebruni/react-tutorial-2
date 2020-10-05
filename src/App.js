import React from "react";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducer'
import Router from './router'

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App