import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "./features/phone";

export const makeStore = () => {
  return configureStore({
    reducer: {
      phone: phoneSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
