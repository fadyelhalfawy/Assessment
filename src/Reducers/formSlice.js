// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stage: 1,
  selectedTitle: null,
  selectedItem: null,
  assessments: {},
  result: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.selectedTitle = action.payload;
    },
    setItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setAssessment: (state, action) => {
        const { data } = action.payload;
        state.assessments = { ...state.assessments, ...data };
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    nextStage: (state) => {
      state.stage += 1;
    },
    prevStage: (state) => {
      state.stage -= 1;
    },
    resetForm: () => initialState,
  },
});

export const {
  setTitle,
  setItem,
  setAssessment,
  setResult,
  nextStage,
  prevStage,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
