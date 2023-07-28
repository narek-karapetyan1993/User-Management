import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addUser, deleteUser } from "./usersSlice";
import { FieldValues } from "react-hook-form";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await axios.get(
      "https://637143e8078587786179e46d.mockapi.io/api/v1/ITWorkin"
    );
    return response.data;
  }
);

export const addUserApi = createAsyncThunk<any, FieldValues>(
  "users/addUsersApi",
  async (
    { firstName, lastName, email }: FieldValues,
    { rejectWithValue, dispatch }
  ) => {
    const response = await axios.post(
      "https://637143e8078587786179e46d.mockapi.io/api/v1/ITWorkin",
      {
        firstName,
        lastName,
        email,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    localStorage.clear();
    dispatch(addUser(response.data));

    return response.data;
  }
);

export const deleteUserApi = createAsyncThunk<any, number | undefined>(
  "users/deleteUserApi",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await axios.delete(
      `https://637143e8078587786179e46d.mockapi.io/api/v1/ITWorkin/${id}`
    );
    localStorage.clear();
    dispatch(deleteUser(id));
    dispatch(getUsers);

    return response.data;
  }
);
