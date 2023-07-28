export interface IUser {
  id?: number;
  email: "string";
  firstName: "string";
  lastName: "string";
}

export interface IUsersData {
  data: IUser[];
}

export const usersInitState = localStorage.getItem("usersData")
  ? JSON.parse(localStorage.usersData)
  : {
      data: [],
    };

export interface IUsersState {
  users: IUsersData;
  status: "idle" | "loading" | "succeeded" | "failed";
}
