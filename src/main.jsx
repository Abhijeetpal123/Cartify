import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App.jsx";
import { ClerkProvider } from "@clerk/react";
import { DataProvider } from "./Context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <ClerkProvider>
        <RouterProvider router={appRouter} />
      </ClerkProvider>
    </DataProvider>
  </StrictMode>,
);
