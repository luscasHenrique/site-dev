import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoadingState = {
  loading: boolean;
};

const INITIAL_STATE: LoadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLoading = (state: any) => {
  return state.loading as LoadingState;
};

export default loadingSlice.reducer;
