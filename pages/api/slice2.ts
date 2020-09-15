import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";

interface State1 {
  count1: number;
}

enum NameSlice {
  COUNT = "count",
  RUN = "run",
}
const countSlice1 = createSlice({
  name: NameSlice.RUN,
  initialState: { count1: 1 } as State1,
  reducers: {
    increment(state: State1, action: PayloadAction<number, string>) {
      state.count1 += action.payload;
      console.log(action.type);
    },
    decrement(state: State1, action: PayloadAction<number, string>) {
      state.count1 -= action.payload;
      console.log(action.type);
    },
    reducerTest: {
      reducer(
        state: State1,
        action: PayloadAction<number, string, { metaData: string }>
      ) {
        console.log(action);
      },
      prepare(payload: number, metaData: string) {
        return { payload, meta: { metaData } };
      },
    },
  },
});

export const { increment, decrement,reducerTest } = countSlice1.actions;

export default countSlice1.reducer;
