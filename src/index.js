import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import userReducer from './features/user'
import themeReducer from './features/theme'
import pokemonReducer from './features/pokemon'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    pokemon: pokemonReducer
  }
})


export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)