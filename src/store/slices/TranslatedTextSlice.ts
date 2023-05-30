import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TranslatedText {
    translatedText: string;
    translationLanguage: string
}
  
const initialState: TranslatedText = {
    translatedText: '',
    translationLanguage: ''
};

const translatedTextSlice = createSlice({
    name: 'translatedText',
    initialState,
    reducers: {
        setTranslatedText(state, action: PayloadAction<string>) {
            state.translatedText = action.payload;
        },
        setTranslationLanguage(state, action: PayloadAction<string>) {
            state.translatedText = action.payload;
        }
    }
});

export const { setTranslatedText, setTranslationLanguage } = translatedTextSlice.actions;

export default translatedTextSlice.reducer;