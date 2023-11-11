import { createBrowserRouter } from "react-router-dom";
import { InitialScreen } from "../views/InitialScreen.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialScreen />,
  },
  {
    path: "/login",
    element: <div>Login aqui</div>,
  },
]);
