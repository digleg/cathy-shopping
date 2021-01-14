import { createSlice } from '@reduxjs/toolkit';

export const rowWrapperSlice = createSlice({
  name: 'rowWrapper',
  initialState: {
    processingOrder: {},
    completeOrder: {},
  },
  reducers: {
    setProcessingOrder: (state, action) => {
      state.processingOrder = action.payload;
    },
    setCompleteOrder: (state, action) => {
      state.completeOrder = action.payload;
    },
  },
});

export const { setProcessingOrder, setCompleteOrder } = rowWrapperSlice.actions;

export const selectGetProcessingOrder = (state) => state.rowWrapper.processingOrder;
export const selectGetCompleteOrder = (state) => state.rowWrapper.completeOrder;
export default rowWrapperSlice.reducer;
