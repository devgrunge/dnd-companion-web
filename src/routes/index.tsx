import { createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "../views/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/login",
    element: <div>Login aqui</div>,
  },
]);
