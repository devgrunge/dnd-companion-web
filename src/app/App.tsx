import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "../routes/index.tsx";
import { store } from "../store/configureStore.ts";
import CssBaseline from "@mui/material/CssBaseline";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <CssBaseline />
    </Provider>
  );
};
