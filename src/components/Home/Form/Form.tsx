import React from "react";
import styles from "./Form.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "app/hooks";
import { addUserApi } from "features/users/usersThunk";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
}

export function Form() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onBlur",
  });

  function submitForm(data: FieldValues) {
    dispatch(addUserApi(data));
    reset({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formBlock}>
        <h2 className={styles.heading}>Добавление нового пользователя</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Имя</label>
            <input
              type="text"
              className={styles.formInput}
              style={
                errors.firstName
                  ? { border: "2px solid red" }
                  : { border: "2px solid transparent" }
              }
              {...register("firstName", {
                required: "Обязательное поле",
                minLength: { value: 2, message: "Минимум 2 буквы!" },
                maxLength: 20,
              })}
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName?.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Фамилия</label>
            <input
              type="text"
              className={styles.formInput}
              style={
                errors.lastName
                  ? { border: "2px solid red" }
                  : { border: "2px solid transparent" }
              }
              {...register("lastName", {
                required: "Обязательное поле",
                minLength: { value: 2, message: "Минимум 2 буквы!" },
                maxLength: 20,
              })}
            />
            {errors.lastName && (
              <p className={styles.error}>{errors.lastName?.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Электронная почта</label>
            <input
              style={
                errors.email
                  ? { border: "2px solid red" }
                  : { border: "2px solid transparent" }
              }
              type="text"
              className={styles.formInput}
              {...register("email", {
                required: "Обязательное поле",
                pattern: {
                  value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                  message: "Не валидный Email!",
                },
              })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email?.message}</p>
            )}
          </div>
          <button type="submit" className={styles.btn}>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}
