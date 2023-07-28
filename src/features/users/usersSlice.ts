import { RootState } from "app/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUsersState, usersInitState } from "./userModels";

import { getUsers } from "./usersThunk";

const initialState: IUsersState = {
  users: usersInitState,
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<IUser>) => {
      state.users.data.push(payload);
      localStorage.setItem("usersData", JSON.stringify(state.users));
    },
    deleteUser: (state, { payload }: PayloadAction<number | any>) => {
      console.log("delete");

      state.users.data = state.users.data.filter((user) => user.id !== payload);
      localStorage.setItem("usersData", JSON.stringify(state.users));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users.data = state.users.data.concat(payload);
        localStorage.setItem("usersData", JSON.stringify(state.users));

        state.status = "succeeded";
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
