import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
// redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

console.log(store.getState());

ReactDOM.render(app, document.getElementById('app'))


