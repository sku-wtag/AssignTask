import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import ShowData from "./pages/ShowData";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<NotFound />} path="/not_found" />
        <Route
          element={
            <PrivateRoute
              redirectTo={"/login"}
              canAccess={() => user != null}
            />
          }
        >
          <Route
            element={
              <PrivateRoute
                redirectTo={"/not_found"}
                canAccess={() => user.is_admin}
              />
            }
          >
            <Route element={<ShowData />} path="/data" />
          </Route>
          <Route element={<Home />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
