import React, { useEffect } from "react";

import styles from "./Home.module.scss";
import { getUsers } from "features/users/usersThunk";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUsers } from "features/users/usersSlice";
import { Form } from "./Form";
import { Table } from "./Table";

export default function Home() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(selectUsers);

  useEffect(() => {
    if (localStorage.usersData === undefined && users.data.length === 0) {
      dispatch(getUsers());
    }
  }, [dispatch, users]);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Form />
        <Table />
      </div>
    </div>
  );
}
