import { configureStore } from '@reduxjs/toolkit';
import RowWrapperSlice from './components/RowWrapper/RowWrapperSlice';
import counterReducer from './features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    rowWrapper: RowWrapperSlice,
  },
});
