import { configureStore } from '@reduxjs/toolkit'
import TranslatedTextSlice from './slices/TranslatedTextSlice'

interface AppState {
    translatedText: string,
    originText: string
}

const initialState: AppState = {
    translatedText: '',
    originText: ''
} 

export const store = configureStore({
  reducer: {
    translatedText: translatedTextSlice
  },
  preloadedState: initialState
})

export default store;