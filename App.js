import React from 'react'
import Navigation from './navigations/FoodNavigation';

import categoriReducer from './store/reducer/categori';
import recepReducer from './store/reducer/recep';
import favoriteReducer from './store/reducer/favorites';

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  categori: categoriReducer,
  recep: recepReducer,
  favorites: favoriteReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
