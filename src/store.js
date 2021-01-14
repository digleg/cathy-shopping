import { configureStore } from '@reduxjs/toolkit';
import RowWrapperSlice from './components/RowWrapper/RowWrapperSlice';

export default configureStore({
  reducer: {
    rowWrapper: RowWrapperSlice,
  },
});
