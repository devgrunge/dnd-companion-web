import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/index.tsx";
import { store } from "../store/index.ts";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ModalProvider } from "../contexts/modalContext.tsx";

export const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <CssBaseline />
        <ToastContainer />
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </Provider>
    </React.Fragment>
  );
};
