import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './app'

ReactDOM.render(
  <Provider >
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
