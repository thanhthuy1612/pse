import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PhoneState {
  phone: string;
}

const initialState: PhoneState = {
  phone: "",
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    resetStatePhone: () => initialState,
  },
});

export default phoneSlice.reducer;

export const { updatePhone, resetStatePhone } = phoneSlice.actions;
