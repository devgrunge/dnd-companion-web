import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "../routes/index.tsx";
import { store } from "../store/configureStore.ts";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </React.Fragment>
  );
};
