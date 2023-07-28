import React from "react";
import styles from "./Table.module.scss";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUsers } from "features/users/usersSlice";
import { deleteUserApi } from "features/users/usersThunk";

export function Table() {
  const dispatch = useAppDispatch();

  const { users } = useAppSelector(selectUsers);

  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {users.data.length !== 0 ? (
            users.data.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(deleteUserApi(user?.id));
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className={styles.emptyTable}>
              <td>Список пуст</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
