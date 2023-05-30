import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface originText {
    originText: string;
    originLanguage: string
}
  
const initialState: originText = {
    originText: '',
    originLanguage: ''
};

const originTextSlice = createSlice({
    name: 'originText',
    initialState,
    reducers: {
        setOriginText(state, action: PayloadAction<string>) {
            state.originText = action.payload;
        },
        setOriginLanguage(state, action: PayloadAction<string>) {
            state.originLanguage = action.payload;
        }
    }
});

export const { setOriginText, setOriginLanguage } = originTextSlice.actions;

export default originTextSlice.reducer;