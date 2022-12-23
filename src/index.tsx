import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Root";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
