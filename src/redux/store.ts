import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './loading/loadingSlice';
const store = configureStore({
  reducer: {
    loading: LoadingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
