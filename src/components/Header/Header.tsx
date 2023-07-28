import React from "react";

import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Наша команда</h1>
        </div>
      </div>
    </header>
  );
}
