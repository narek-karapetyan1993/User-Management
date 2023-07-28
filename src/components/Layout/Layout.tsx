import { Header } from "components/Header";
import { Main } from "components/Main";
import React from "react";

import styles from "./layout.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />

      <Main />
    </div>
  );
}

export default Layout;
