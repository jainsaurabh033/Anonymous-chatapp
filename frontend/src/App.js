import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components

import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";
import Rooms from "./components/Rooms";
import Room from "./components/Room";

// auth middleware

import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "/rooms",
    element: (
      <AuthorizeUser>
        <Rooms />
      </AuthorizeUser>
    ),
  },
  {
    path: "/room/:id",
    element: (
      <AuthorizeUser>
        <Room />
      </AuthorizeUser>
    ),
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
