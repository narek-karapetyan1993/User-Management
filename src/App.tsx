import Loading from "components/common/Loading";
import Layout from "components/Layout/Layout";
import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("components/Home/Home"));
const NoMatch = React.lazy(() => import("components/NoMatch"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Navigate to="users" replace />} />

        <Route
          path="users"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <React.Suspense fallback={<Loading />}>
            <NoMatch />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
