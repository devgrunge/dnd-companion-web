import { createBrowserRouter } from "react-router-dom";
import { Home } from "../views/Home.tsx";
import { Login } from "../views/Login.tsx";
import { Register } from "../views/Register.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
]);
