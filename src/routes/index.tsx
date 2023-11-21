import { createBrowserRouter } from "react-router-dom";
import { Home } from "../views/Home.tsx";
import { Login } from "../views/Login.tsx";
import { Register } from "../views/Register.tsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
