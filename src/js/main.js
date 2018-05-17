'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

document.addEventListener('readystatechange', () => {
  if (document.readyState !== 'complete') return void 0

  ;(function runReact (root) {
    if (!root) return void 0

    const container = root.getAttribute('data-container')

    ReactDOM.render(<App container={container} />, root)
  })(document.getElementById('root'))
})
