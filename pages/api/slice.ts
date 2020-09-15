import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";

interface State1 {
  count: number;
}

enum NameSlice {
  COUNT = "count",
  RUN = "rung",
}

const countSlice = createSlice({
  name: NameSlice.COUNT,
  initialState: { count: 1 } as State1,
  reducers: {
    onIncrement() {},
    onDecrement() {},
    increment(state: State1, action: PayloadAction<number>) {
      console.log(123);
      state.count += action.payload;
      console.log(action.type);
    },
    decrement(state: State1, action: PayloadAction<number>) {
      state.count -= action.payload;
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

export const { increment, decrement , onDecrement , onIncrement,reducerTest } = countSlice.actions;

export default countSlice.reducer;
